import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-white transition hover:scale-105 md:bottom-28"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9a11.84 11.84 0 0 0 1.6 5.96L0 24l6.33-1.66a11.88 11.88 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9a11.82 11.82 0 0 0-3.44-8.42ZM12.07 21.5h-.01a9.55 9.55 0 0 1-4.87-1.33l-.35-.21-3.75.98 1-3.66-.23-.38a9.6 9.6 0 1 1 17.82-5c0 5.29-4.31 9.6-9.61 9.6Zm5.49-7.19c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.23 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
