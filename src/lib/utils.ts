export function cn(...classes: Array<string | number | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function whatsappLink(phone: string, message: string) {
  const digits = phone.replace(/[^\d]/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
