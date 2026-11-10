export const companyProfile = {
  name: 'TechoraDev',
  email: 'techoradev1@gmail.com',
  phone: '+917708843354',
  phoneDisplay: '7708843354',
  whatsappNumber: '917708843354',
  instagram: 'https://www.instagram.com/techoradev/',
  tagline: 'Building Digital Solutions for Businesses.',
};

export function buildWhatsAppLink(context = 'General inquiry') {
  const message = `Hi TechoraDev, I am interested in ${context}. Please share more details.`;
  return `https://wa.me/${companyProfile.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildCallLink() {
  return `tel:${companyProfile.phone}`;
}

export function buildEmailLink(subject = 'TechoraDev enquiry', body = '') {
  const safeBody = body ? `&body=${encodeURIComponent(body)}` : '';
  return `mailto:${companyProfile.email}?subject=${encodeURIComponent(subject)}${safeBody}`;
}

export function buildInstagramLink() {
  return companyProfile.instagram;
}
