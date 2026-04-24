# Deploying Swaranbharat ExportSarathi on Hostinger

This project is a **Next.js 14 (App Router)** application that uses **SSR + API
routes** (e.g. `/api/contact` handles the inquiry form). This means the recommended
deployment path is **Hostinger VPS (Node)** — not Hostinger shared hosting.

Two supported paths are documented below.

---

## Recommended: Hostinger VPS (Node)

### 1. Provision a VPS

From the Hostinger dashboard, create a VPS with:

- **Ubuntu 22.04 LTS**
- At least **2 vCPU / 4 GB RAM** (any VPS KVM plan works).
- A dedicated IP.

Point your domain’s A-record to the VPS IP:

```
A  swaranbharatexports.com        → <VPS_IP>
A  www.swaranbharatexports.com    → <VPS_IP>
```

### 2. SSH in and install the runtime

```bash
ssh root@<VPS_IP>

# Node 20 + build tools
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs git nginx ufw

# PM2 for process management
npm i -g pm2

# Basic firewall
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
```

### 3. Clone and build the app

```bash
cd /var/www
git clone https://github.com/shrikhandeys/SwaranbharatWeb.git
cd SwaranbharatWeb
npm ci
npm run build
```

### 4. Run with PM2

```bash
pm2 start npm --name swaranbharat -- start
pm2 save
pm2 startup systemd -u root --hp /root   # follow the printed command
```

Next.js serves on port **3000** by default.

### 5. Nginx reverse proxy + SSL

`/etc/nginx/sites-available/swaranbharat`:

```nginx
server {
  server_name swaranbharatexports.com www.swaranbharatexports.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
  }

  listen 80;
}
```

Enable and install certificates:

```bash
ln -s /etc/nginx/sites-available/swaranbharat /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d swaranbharatexports.com -d www.swaranbharatexports.com
```

### 6. Continuous deployment (manual pull)

```bash
cd /var/www/SwaranbharatWeb
git pull
npm ci
npm run build
pm2 restart swaranbharat
```

Automation can later be wired via GitHub Actions + SSH.

---

## Alternative: Hostinger shared hosting (static export)

Hostinger's shared Business/Premium plans host static files only. Next.js can
be exported as a static site, but **API routes will not work** — you will need
to point the inquiry form at an external endpoint (e.g. Formspree, SendGrid
serverless, or a small Cloudflare Worker).

### 1. Add an `export` build step

In `package.json`:

```jsonc
"scripts": {
  "build": "next build && next export -o out"
}
```

Remove / replace the `/api/contact` endpoint with an external form service.

### 2. Upload `out/` via hPanel → File Manager

Upload the entire contents of the `out/` directory to `public_html/`.

### 3. Enable SSL in hPanel

Hostinger auto-issues Let’s Encrypt SSL once the domain is pointed at Hostinger.

---

## Environment variables

The current codebase reads no runtime secrets, but the inquiry API is ready
for integration. When you integrate an email/CRM provider, add variables in
Hostinger’s hPanel (VPS: `/etc/systemd/system/swaranbharat.service` env, or
export via PM2 ecosystem file):

```
RESEND_API_KEY=...
CRM_WEBHOOK_URL=...
OTP_PROVIDER_KEY=...
```

---

## Verification checklist after deployment

- [ ] `https://swaranbharatexports.com` loads with a valid SSL certificate.
- [ ] Header, hero slider, and floating WhatsApp/chatbot buttons render.
- [ ] Language switcher & accessibility menu toggle correctly.
- [ ] Inquiry form submits and `/api/contact` logs the request (VPS path) OR
      external form provider receives the payload (shared-hosting path).
- [ ] Lighthouse (mobile) ≥ 90 on Performance, Accessibility, SEO.
