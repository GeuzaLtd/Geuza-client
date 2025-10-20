export const handleWhatsAppInteraction = (message: string) => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
};
