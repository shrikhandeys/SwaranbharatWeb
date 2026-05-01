'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  MessageCircle,
  X,
  Send,
  ShoppingBag,
  FileText,
  MessageSquare,
  Bot,
  User,
  ChevronDown,
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';
import {
  createInitialState,
  processUserInput,
  type ChatState,
  type ChatMessage,
} from '@/lib/chatbot-engine';

/* ------------------------------------------------------------------ */
/*  Typing indicator                                                   */
/* ------------------------------------------------------------------ */

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
        <Bot className="h-3.5 w-3.5" />
      </div>
      <div className="rounded-2xl rounded-bl-sm bg-brand-sand px-4 py-3">
        <div className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-brand-navy/40 [animation-delay:0ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-brand-navy/40 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-brand-navy/40 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Message bubble                                                     */
/* ------------------------------------------------------------------ */

function MessageBubble({ message }: { message: ChatMessage }) {
  const isBot = message.role === 'bot';

  // Render text with basic markdown-like bold
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className={`flex items-end gap-2 ${isBot ? '' : 'flex-row-reverse'}`}>
      {isBot ? (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
          <Bot className="h-3.5 w-3.5" />
        </div>
      ) : (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-white">
          <User className="h-3.5 w-3.5" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
          isBot
            ? 'rounded-bl-sm bg-brand-sand text-brand-navy'
            : 'rounded-br-sm bg-brand-navy text-white'
        }`}
      >
        {renderText(message.text)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick reply buttons                                                */
/* ------------------------------------------------------------------ */

function QuickReplies({
  replies,
  onSelect,
}: {
  replies: string[];
  onSelect: (text: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5 pl-9">
      {replies.map((reply) => {
        if (reply === 'Connect on WhatsApp' || reply === 'Connect Now') {
          return (
            <a
              key={reply}
              href={whatsappLink(
                siteConfig.whatsapp,
                'Hello, I am interested in your export products. Please share details.',
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1.5 text-xs font-medium text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9a11.84 11.84 0 0 0 1.6 5.96L0 24l6.33-1.66a11.88 11.88 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9a11.82 11.82 0 0 0-3.44-8.42ZM12.07 21.5h-.01a9.55 9.55 0 0 1-4.87-1.33l-.35-.21-3.75.98 1-3.66-.23-.38a9.6 9.6 0 1 1 17.82-5c0 5.29-4.31 9.6-9.61 9.6Zm5.49-7.19c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.23 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35Z" />
              </svg>
              {reply}
            </a>
          );
        }
        return (
          <button
            key={reply}
            type="button"
            onClick={() => onSelect(reply)}
            className="rounded-full border border-brand-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-brand-navy transition hover:border-brand-gold hover:bg-brand-gold/10"
          >
            {reply}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Chatbot component                                             */
/* ------------------------------------------------------------------ */

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<ChatState | null>(null);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Lazy-initialize state on first open
  useEffect(() => {
    if (open && !state) {
      setState(createInitialState());
    }
  }, [open, state]);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [state?.messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Track scroll position
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 80);
  }, []);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const handleSend = useCallback(
    (text?: string) => {
      const msg = (text ?? input).trim();
      if (!msg || !state) return;
      setInput('');

      // Show typing indicator
      setTyping(true);
      const updated = processUserInput(state, msg);

      // Simulate brief typing delay for natural feel
      setTimeout(() => {
        setState(updated);
        setTyping(false);
      }, 400 + Math.random() * 400);
    },
    [input, state],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Find last bot message with quick replies
  const lastBotWithReplies = state?.messages
    .filter((m) => m.role === 'bot' && m.quickReplies?.length)
    .at(-1);

  // Show quick replies only for the last bot message
  const showQuickRepliesForId = lastBotWithReplies?.id;

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg ring-4 ring-white transition hover:bg-brand-navy-deep"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && state && (
        <div
          role="dialog"
          aria-label="Swaranbharat export assistant"
          className="fixed bottom-24 right-5 z-40 flex w-[92vw] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-card-hover"
          style={{ height: 'min(70vh, 560px)' }}
        >
          {/* Header */}
          <div className="relative bg-brand-navy px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-serif text-base font-semibold leading-tight">
                  Export Assistant
                </p>
                <p className="text-[0.65rem] text-brand-ivory/70">
                  Swaranbharat ExportSarathi
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 hover:bg-white/15"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick action bar */}
          <div className="flex gap-1 border-b border-brand-navy/5 bg-brand-sand/50 px-3 py-2">
            <QuickAction icon={<ShoppingBag className="h-3 w-3" />} label="Products" onClick={() => handleSend('View Products')} />
            <QuickAction icon={<FileText className="h-3 w-3" />} label="Quotation" onClick={() => handleSend('Get Quotation')} />
            <QuickAction
              icon={
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9a11.84 11.84 0 0 0 1.6 5.96L0 24l6.33-1.66a11.88 11.88 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.9a11.82 11.82 0 0 0-3.44-8.42Z" />
                </svg>
              }
              label="WhatsApp"
              onClick={() => {
                window.open(
                  whatsappLink(
                    siteConfig.whatsapp,
                    'Hello, I am interested in your export products. Please share details.',
                  ),
                  '_blank',
                );
              }}
            />
            <QuickAction icon={<MessageSquare className="h-3 w-3" />} label="Ask" onClick={() => handleSend('Ask a Question')} />
          </div>

          {/* Messages area */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="relative flex-1 space-y-3 overflow-y-auto px-3 py-3"
          >
            {state.messages.map((msg) => (
              <div key={msg.id}>
                <MessageBubble message={msg} />
                {msg.id === showQuickRepliesForId &&
                  msg.quickReplies &&
                  msg.quickReplies.length > 0 && (
                    <div className="mt-2">
                      <QuickReplies replies={msg.quickReplies} onSelect={handleSend} />
                    </div>
                  )}
              </div>
            ))}
            {typing && <TypingIndicator />}

            {/* Scroll to bottom button */}
            {showScrollBtn && (
              <button
                type="button"
                onClick={scrollToBottom}
                className="sticky bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-brand-navy/80 p-1.5 text-white shadow-md hover:bg-brand-navy"
                aria-label="Scroll to latest"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Privacy notice */}
          <div className="border-t border-brand-navy/5 bg-brand-sand/30 px-3 py-1.5">
            <p className="text-center text-[0.6rem] text-brand-navy/50">
              🔒 Your information will be used only for business communication and will not be shared.
            </p>
          </div>

          {/* Input area */}
          <div className="border-t border-brand-navy/10 bg-white px-3 py-2.5">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-brand-navy/15 bg-brand-sand/50 px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-gold focus:outline-none"
                aria-label="Chat message"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white transition hover:bg-brand-navy-deep disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick action button (top bar)                                      */
/* ------------------------------------------------------------------ */

function QuickAction({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-brand-navy transition hover:bg-brand-navy/5"
    >
      <span className="text-brand-gold">{icon}</span>
      <span className="text-[0.6rem] font-medium">{label}</span>
    </button>
  );
}
