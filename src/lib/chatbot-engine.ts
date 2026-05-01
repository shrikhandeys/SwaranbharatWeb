import { featuredProducts } from '@/data/products';
import { services } from '@/data/services';
import { faqs } from '@/data/faqs';
import { categories } from '@/data/categories';
import { siteConfig } from '@/data/site';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type MessageRole = 'bot' | 'user';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: number;
  quickReplies?: string[];
}

export type LeadType = 'hot' | 'warm' | 'cold';

export interface LeadData {
  name?: string;
  company?: string;
  country?: string;
  contact?: string; // email or phone/whatsapp
  product?: string;
  quantity?: string;
  leadType: LeadType;
  query: string;
  transcript: ChatMessage[];
  timestamp: number;
  consentLocation: boolean;
}

export type Intent =
  | 'greeting'
  | 'product_inquiry'
  | 'service_inquiry'
  | 'pricing_moq'
  | 'export_support'
  | 'general_inquiry'
  | 'faq_match'
  | 'whatsapp_connect'
  | 'rude'
  | 'thanks'
  | 'bye'
  | 'unknown';

type LeadStep =
  | 'idle'
  | 'ask_name'
  | 'ask_company'
  | 'ask_country'
  | 'ask_contact'
  | 'ask_product'
  | 'ask_quantity'
  | 'confirm';

export interface ChatState {
  messages: ChatMessage[];
  leadStep: LeadStep;
  lead: Partial<LeadData>;
  rudeCount: number;
  conversationStarted: boolean;
  leadCaptured: boolean;
  intentHistory: Intent[];
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

let msgCounter = 0;
function makeId(): string {
  return `msg-${Date.now()}-${++msgCounter}`;
}

function botMsg(text: string, quickReplies?: string[]): ChatMessage {
  return { id: makeId(), role: 'bot', text, timestamp: Date.now(), quickReplies };
}

function userMsg(text: string): ChatMessage {
  return { id: makeId(), role: 'user', text, timestamp: Date.now() };
}

const lower = (s: string) => s.toLowerCase().trim();

/* ------------------------------------------------------------------ */
/*  Keyword dictionaries                                               */
/* ------------------------------------------------------------------ */

const RUDE_WORDS = [
  'fuck', 'shit', 'damn', 'ass', 'bitch', 'bastard', 'idiot', 'stupid',
  'dumb', 'crap', 'hell', 'suck', 'moron', 'loser', 'trash', 'scam',
  'fraud', 'cheat', 'bloody', 'wtf', 'stfu',
];

const GREETING_PATTERNS = [
  'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening',
  'greetings', 'hola', 'namaste', 'howdy', 'sup', "what's up",
];

const THANKS_PATTERNS = [
  'thank', 'thanks', 'thx', 'appreciate', 'grateful', 'ty',
];

const BYE_PATTERNS = [
  'bye', 'goodbye', 'see you', 'take care', 'later', 'cya',
];

const PRODUCT_PATTERNS = [
  'product', 'moringa', 'turmeric', 'onion', 'ginger', 'chilli', 'chili',
  'red chilli', 'spice', 'paper bag', 'powder', 'dehydrated', 'perishable',
  'agri', 'agriculture', 'grain', 'pulse', 'oil seed', 'garlic',
  'catalog', 'catalogue', 'what do you sell', 'what do you export',
  'item', 'commodity', 'goods', 'vegetable', 'flake',
];

const SERVICE_PATTERNS = [
  'service', 'hs code', 'documentation', 'compliance', 'market research',
  'packaging', 'logistics', 'private label', 'sourcing', 'consultation',
  'export support', 'buyer support', 'what services',
];

const PRICING_PATTERNS = [
  'price', 'pricing', 'cost', 'rate', 'moq', 'minimum order',
  'quotation', 'quote', 'how much', 'bulk', 'discount', 'quantity',
];

const EXPORT_PATTERNS = [
  'export', 'import', 'shipping', 'shipment', 'customs', 'duty',
  'tariff', 'certificate', 'certification', 'fssai', 'iec', 'apeda',
  'iso', 'nabl', 'halal', 'kosher', 'phytosanitary', 'lab test',
  'country', 'destination', 'deliver', 'international',
];

const WHATSAPP_PATTERNS = [
  'whatsapp', 'call', 'phone', 'contact number', 'speak to someone',
  'talk to someone', 'representative', 'connect', 'reach',
];

/* ------------------------------------------------------------------ */
/*  Intent detection                                                   */
/* ------------------------------------------------------------------ */

function detectIntent(text: string): Intent {
  const t = lower(text);

  if (RUDE_WORDS.some((w) => t.includes(w))) return 'rude';
  if (GREETING_PATTERNS.some((p) => t.includes(p))) return 'greeting';
  if (THANKS_PATTERNS.some((p) => t.includes(p))) return 'thanks';
  if (BYE_PATTERNS.some((p) => t.includes(p))) return 'bye';
  if (WHATSAPP_PATTERNS.some((p) => t.includes(p))) return 'whatsapp_connect';

  const faqMatch = matchFaq(t);
  if (faqMatch) return 'faq_match';

  if (PRICING_PATTERNS.some((p) => t.includes(p))) return 'pricing_moq';
  if (PRODUCT_PATTERNS.some((p) => t.includes(p))) return 'product_inquiry';
  if (SERVICE_PATTERNS.some((p) => t.includes(p))) return 'service_inquiry';
  if (EXPORT_PATTERNS.some((p) => t.includes(p))) return 'export_support';

  return 'unknown';
}

/* ------------------------------------------------------------------ */
/*  FAQ matching                                                       */
/* ------------------------------------------------------------------ */

function matchFaq(text: string): string | null {
  const t = lower(text);
  for (const faq of faqs) {
    const keywords = lower(faq.question).split(/\s+/).filter((w) => w.length > 3);
    const matchCount = keywords.filter((k) => t.includes(k)).length;
    if (matchCount >= 2 || (keywords.length <= 3 && matchCount >= 1)) {
      return faq.answer;
    }
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Product search                                                     */
/* ------------------------------------------------------------------ */

function findProduct(text: string): (typeof featuredProducts)[number] | null {
  const t = lower(text);
  for (const p of featuredProducts) {
    if (t.includes(lower(p.name)) || t.includes(lower(p.slug.replace(/-/g, ' ')))) {
      return p;
    }
  }
  return null;
}

function findCategory(text: string): (typeof categories)[number] | null {
  const t = lower(text);
  for (const c of categories) {
    if (t.includes(lower(c.name)) || t.includes(lower(c.slug.replace(/-/g, ' ')))) {
      return c;
    }
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Lead qualification                                                 */
/* ------------------------------------------------------------------ */

function qualifyLead(lead: Partial<LeadData>): LeadType {
  const hasProduct = Boolean(lead.product);
  const hasQuantity = Boolean(lead.quantity);
  const hasContact = Boolean(lead.contact);

  if (hasProduct && hasQuantity && hasContact) return 'hot';
  if (hasProduct && hasContact) return 'warm';
  return 'cold';
}

/* ------------------------------------------------------------------ */
/*  Response builders                                                  */
/* ------------------------------------------------------------------ */

function greetingResponse(): ChatMessage {
  return botMsg(
    `Hello! Welcome to ${siteConfig.shortName} ExportSarathi. 👋\n\nHow can I assist you today?`,
    ['View Products', 'Get Quotation', 'Our Services', 'Connect on WhatsApp'],
  );
}

function productInquiryResponse(text: string): ChatMessage[] {
  const product = findProduct(text);
  const category = findCategory(text);

  if (product) {
    return [
      botMsg(
        `Great choice! Here are the details for **${product.name}**:\n\n` +
          `📦 ${product.blurb}\n` +
          (product.hsCode ? `📋 HS Code: ${product.hsCode}\n` : '') +
          (product.moq ? `📊 MOQ: ${product.moq}\n` : '') +
          `\n✅ Export-ready with full documentation support.`,
      ),
      botMsg(
        'Would you like a quotation or more product details?',
        ['Get Quotation', 'Request Sample', 'View All Products', 'Connect on WhatsApp'],
      ),
    ];
  }

  if (category) {
    const subcats = category.subcategories?.join(', ') ?? '';
    return [
      botMsg(
        `We have a range of **${category.name}**:\n\n` +
          `${category.description}\n\n` +
          (subcats ? `Available: ${subcats}` : ''),
      ),
      botMsg(
        'Which specific product interests you? Or would you like a quotation for the full range?',
        ['Get Quotation', 'View All Products', 'Ask a Question'],
      ),
    ];
  }

  // Product not in our catalog
  return [
    botMsg(
      'We may be able to help source this product for you. Could you share more details about your requirement?\n\n' +
        'Our current export range includes:\n' +
        '• Agri Products (Grains, Pulses, Spices)\n' +
        '• Perishable Products (Fresh Onion, Ginger, Garlic)\n' +
        '• Dehydrated Products (Onion, Garlic, Ginger)\n' +
        '• Powdered Products (Moringa, Turmeric, Chilli)\n' +
        '• Paper Products (Bags, Kraft Packaging)',
      ['View Products', 'Get Quotation', 'Ask a Question'],
    ),
  ];
}

function serviceInquiryResponse(text: string): ChatMessage[] {
  const t = lower(text);
  const matchedService = services.find(
    (s) => t.includes(lower(s.name)) || t.includes(lower(s.slug.replace(/-/g, ' '))),
  );

  if (matchedService) {
    return [
      botMsg(
        `**${matchedService.name}**\n\n${matchedService.blurb}\n\nOur team can provide detailed guidance tailored to your requirements.`,
      ),
      botMsg(
        'Would you like to discuss this further with our team?',
        ['Get Consultation', 'Connect on WhatsApp', 'View All Services'],
      ),
    ];
  }

  const serviceList = services.map((s) => `• ${s.name}`).join('\n');
  return [
    botMsg(
      `We offer the following export support services:\n\n${serviceList}\n\nWhich service would you like to know more about?`,
      ['Get Consultation', 'Connect on WhatsApp'],
    ),
  ];
}

function pricingResponse(): ChatMessage[] {
  return [
    botMsg(
      'Pricing depends on the product, quantity, destination and packaging requirements.\n\n' +
        'To provide you an accurate quotation, I would need a few details. Shall I connect you with our team?',
      ['Get Quotation', 'Connect on WhatsApp', 'View Products'],
    ),
  ];
}

function exportSupportResponse(text: string): ChatMessage[] {
  const t = lower(text);
  const certKeywords: Record<string, string> = {
    fssai: 'FSSAI (Food Safety & Standards Authority) — In Process',
    iec: 'IEC (Import Export Code) — Registered',
    apeda: 'APEDA (Agricultural Products Export Authority) — In Process',
    iso: 'ISO 22000 — Planned',
    nabl: 'NABL Lab Testing — Planned',
    halal: 'HALAL Certification — Planned',
    kosher: 'KOSHER Certification — Planned',
  };

  for (const [key, value] of Object.entries(certKeywords)) {
    if (t.includes(key)) {
      return [
        botMsg(`Regarding **${value}**:\n\nWe maintain full compliance documentation. Our team can share specific details and supporting documents.`),
        botMsg('Would you like to speak with our compliance team?', ['Get Consultation', 'Connect on WhatsApp']),
      ];
    }
  }

  return [
    botMsg(
      'We provide comprehensive export support including:\n\n' +
        '📋 HS Code Identification\n' +
        '📄 Export Documentation\n' +
        '✅ Quality & Compliance Guidance\n' +
        '📊 Market Research & Buyer Support\n' +
        '📦 Packaging & Logistics Coordination\n\n' +
        'Our registrations: IEC, GST, MSME (Registered). FSSAI & APEDA (In Process).',
      ['Get Consultation', 'View Certifications', 'Connect on WhatsApp'],
    ),
  ];
}

function whatsappResponse(): ChatMessage {
  return botMsg(
    `You can connect with our team directly on WhatsApp.\n\n📞 ${siteConfig.phone}\n\nBefore I redirect you, may I have your name so our team can assist you better?`,
    ['Connect Now', 'Share My Details First'],
  );
}

function thanksResponse(): ChatMessage {
  return botMsg(
    "You're welcome! Is there anything else I can help you with?",
    ['View Products', 'Get Quotation', 'Connect on WhatsApp'],
  );
}

function byeResponse(): ChatMessage {
  return botMsg(
    `Thank you for visiting ${siteConfig.shortName} ExportSarathi. Have a great day! 🙏\n\nFeel free to reach out anytime.`,
  );
}

function rudeResponse(count: number): ChatMessage | null {
  if (count === 1) {
    return botMsg(
      'We are here to assist you professionally. Kindly keep the conversation respectful.',
    );
  }
  if (count === 2) {
    return botMsg(
      'We may need to end this chat if the conversation continues this way. Please let us know how we can help you.',
    );
  }
  return botMsg(
    'This chat has been ended due to inappropriate language. Please feel free to contact us via email or WhatsApp for professional assistance.\n\n' +
      `📧 ${siteConfig.email}`,
  );
}

function unknownResponse(): ChatMessage {
  return botMsg(
    "Let me connect you with our team for accurate details. Could you please share your contact information so we can get back to you?",
    ['Share My Details', 'Connect on WhatsApp', 'Ask Another Question'],
  );
}

/* ------------------------------------------------------------------ */
/*  Lead capture flow                                                  */
/* ------------------------------------------------------------------ */

function startLeadCapture(state: ChatState): ChatMessage {
  state.leadStep = 'ask_name';
  return botMsg("I'd be happy to help! Let me collect a few details.\n\nWhat is your name?");
}

function processLeadStep(state: ChatState, input: string): ChatMessage[] {
  const messages: ChatMessage[] = [];

  switch (state.leadStep) {
    case 'ask_name':
      state.lead.name = input.trim();
      state.leadStep = 'ask_company';
      messages.push(botMsg(`Thank you, ${state.lead.name}! What is your company name?`));
      break;

    case 'ask_company':
      state.lead.company = input.trim();
      state.leadStep = 'ask_country';
      messages.push(botMsg('Which country are you based in?'));
      break;

    case 'ask_country':
      state.lead.country = input.trim();
      state.leadStep = 'ask_contact';
      messages.push(botMsg('Please share your email address or WhatsApp number so we can reach you.'));
      break;

    case 'ask_contact':
      state.lead.contact = input.trim();
      state.leadStep = 'ask_product';
      messages.push(botMsg('What product are you interested in?', getAllProductNames()));
      break;

    case 'ask_product':
      state.lead.product = input.trim();
      state.leadStep = 'ask_quantity';
      messages.push(botMsg('What quantity do you require? (You can skip this if unsure)', ['Skip']));
      break;

    case 'ask_quantity': {
      const t = lower(input);
      if (t !== 'skip' && t !== 'not sure' && t !== 'unsure') {
        state.lead.quantity = input.trim();
      }
      state.leadStep = 'confirm';
      state.lead.leadType = qualifyLead(state.lead);
      state.lead.timestamp = Date.now();
      state.leadCaptured = true;

      const summary =
        `Here is a summary of your details:\n\n` +
        `👤 Name: ${state.lead.name ?? '—'}\n` +
        `🏢 Company: ${state.lead.company ?? '—'}\n` +
        `🌍 Country: ${state.lead.country ?? '—'}\n` +
        `📧 Contact: ${state.lead.contact ?? '—'}\n` +
        `📦 Product: ${state.lead.product ?? '—'}\n` +
        (state.lead.quantity ? `📊 Quantity: ${state.lead.quantity}\n` : '') +
        '\nIs this correct?';

      messages.push(botMsg(summary, ['Yes, Submit', 'Edit Details']));
      break;
    }

    case 'confirm': {
      const t = lower(input);
      if (t.includes('yes') || t.includes('submit') || t.includes('correct')) {
        state.leadStep = 'idle';
        messages.push(
          botMsg(
            `Thank you, ${state.lead.name}! Your enquiry has been submitted successfully. ✅\n\n` +
              'Our team typically responds within **24 hours**.\n\n' +
              'Would you like to connect on WhatsApp for faster communication?',
            ['Connect on WhatsApp', 'No, Thank You'],
          ),
        );
      } else {
        state.leadStep = 'ask_name';
        state.lead = {};
        messages.push(botMsg("No problem! Let's start again. What is your name?"));
      }
      break;
    }

    default:
      break;
  }

  return messages;
}

function getAllProductNames(): string[] {
  return featuredProducts.map((p) => p.name);
}

/* ------------------------------------------------------------------ */
/*  Main engine                                                        */
/* ------------------------------------------------------------------ */

export function createInitialState(): ChatState {
  return {
    messages: [greetingResponse()],
    leadStep: 'idle',
    lead: {},
    rudeCount: 0,
    conversationStarted: false,
    leadCaptured: false,
    intentHistory: [],
  };
}

export function processUserInput(state: ChatState, input: string): ChatState {
  const newState = { ...state };
  const trimmed = input.trim();
  if (!trimmed) return newState;

  newState.messages = [...state.messages, userMsg(trimmed)];
  newState.conversationStarted = true;

  // If in lead capture flow, handle that first
  if (newState.leadStep !== 'idle') {
    const leadMsgs = processLeadStep(newState, trimmed);
    newState.messages = [...newState.messages, ...leadMsgs];
    saveLead(newState);
    return newState;
  }

  // Handle quick reply actions
  const t = lower(trimmed);
  if (t === 'view products' || t === 'view all products') {
    const cats = categories.map((c) => `• **${c.name}**: ${c.subcategories?.join(', ') ?? ''}`).join('\n');
    newState.messages.push(
      botMsg(`Here are our product categories:\n\n${cats}\n\nWhich category interests you?`, ['Get Quotation', 'Connect on WhatsApp']),
    );
    return newState;
  }
  if (t === 'get quotation' || t === 'get consultation' || t === 'share my details' || t === 'share my details first') {
    const msg = startLeadCapture(newState);
    newState.messages.push(msg);
    return newState;
  }
  if (t === 'connect on whatsapp' || t === 'connect now') {
    newState.messages.push(
      botMsg(
        `Great! Click the button below to connect with our team on WhatsApp.\n\n` +
          `📞 ${siteConfig.phone}\n\n` +
          '🔒 Your information will be used only for business communication and will not be shared.',
      ),
    );
    return newState;
  }
  if (t === 'our services' || t === 'view all services') {
    const serviceList = services.map((s) => `• **${s.name}** — ${s.blurb}`).join('\n');
    newState.messages.push(
      botMsg(`Our export support services:\n\n${serviceList}`, ['Get Consultation', 'Connect on WhatsApp']),
    );
    return newState;
  }
  if (t === 'view certifications') {
    newState.messages.push(
      botMsg(
        'Our certifications & compliance:\n\n' +
          '✅ IEC — Registered\n' +
          '✅ GST — Registered\n' +
          '✅ MSME — Registered\n' +
          '⏳ FSSAI — In Process\n' +
          '⏳ APEDA — In Process\n' +
          '📋 ISO, NABL, HALAL, KOSHER — Planned',
        ['Get Consultation', 'Connect on WhatsApp'],
      ),
    );
    return newState;
  }
  if (t === 'ask a question' || t === 'ask another question') {
    newState.messages.push(
      botMsg('Sure! Please type your question and I will do my best to help.'),
    );
    return newState;
  }
  if (t === 'request sample') {
    newState.messages.push(
      botMsg(
        'We offer paid samples dispatched via DHL/FedEx within 3–5 working days. Sample cost is adjustable against your first commercial order.\n\nLet me collect your details for the sample request.',
      ),
    );
    const msg = startLeadCapture(newState);
    newState.messages.push(msg);
    return newState;
  }
  if (t === 'no, thank you' || t === 'no thanks') {
    newState.messages.push(
      botMsg(`Thank you for your interest in ${siteConfig.shortName} ExportSarathi. Have a great day! 🙏`),
    );
    return newState;
  }
  if (t === 'edit details') {
    newState.leadStep = 'ask_name';
    newState.lead = {};
    newState.messages.push(botMsg("Let's start again. What is your name?"));
    return newState;
  }
  if (t === 'skip') {
    return newState;
  }

  // Detect intent
  const intent = detectIntent(trimmed);
  newState.intentHistory = [...state.intentHistory, intent];

  switch (intent) {
    case 'rude': {
      newState.rudeCount = state.rudeCount + 1;
      const rudeMsg = rudeResponse(newState.rudeCount);
      if (rudeMsg) newState.messages.push(rudeMsg);
      break;
    }

    case 'greeting':
      newState.messages.push(greetingResponse());
      break;

    case 'thanks':
      newState.messages.push(thanksResponse());
      break;

    case 'bye':
      newState.messages.push(byeResponse());
      break;

    case 'product_inquiry':
      newState.messages.push(...productInquiryResponse(trimmed));
      break;

    case 'service_inquiry':
      newState.messages.push(...serviceInquiryResponse(trimmed));
      break;

    case 'pricing_moq':
      newState.messages.push(...pricingResponse());
      break;

    case 'export_support':
      newState.messages.push(...exportSupportResponse(trimmed));
      break;

    case 'faq_match': {
      const answer = matchFaq(lower(trimmed));
      if (answer) {
        newState.messages.push(botMsg(answer));
        newState.messages.push(
          botMsg('Is there anything else I can help with?', ['View Products', 'Get Quotation', 'Connect on WhatsApp']),
        );
      }
      break;
    }

    case 'whatsapp_connect':
      newState.messages.push(whatsappResponse());
      break;

    case 'unknown':
    default:
      newState.messages.push(unknownResponse());
      break;
  }

  saveLead(newState);
  return newState;
}

/* ------------------------------------------------------------------ */
/*  Lead storage (localStorage)                                        */
/* ------------------------------------------------------------------ */

const LEADS_KEY = 'sb-chatbot-leads';
const TRANSCRIPT_KEY = 'sb-chatbot-transcript';

function saveLead(state: ChatState): void {
  if (typeof window === 'undefined') return;

  try {
    // Save transcript
    localStorage.setItem(TRANSCRIPT_KEY, JSON.stringify(state.messages));

    // Save lead if captured
    if (state.leadCaptured && state.lead.name) {
      const existingRaw = localStorage.getItem(LEADS_KEY);
      const existing: LeadData[] = existingRaw ? JSON.parse(existingRaw) : [];
      const newLead: LeadData = {
        ...state.lead,
        leadType: qualifyLead(state.lead),
        query: state.messages
          .filter((m) => m.role === 'user')
          .map((m) => m.text)
          .join(' | '),
        transcript: state.messages,
        timestamp: Date.now(),
        consentLocation: false,
      } as LeadData;

      existing.push(newLead);
      localStorage.setItem(LEADS_KEY, JSON.stringify(existing));
    }
  } catch {
    // Silently fail — localStorage may be full or unavailable
  }
}

export function getStoredLeads(): LeadData[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LEADS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
