export const weddingData = {
  couple: {
    groom: "Anand",
    bride: "Meera",
    ampersand: "&",
    initials: "A&M"
  },

  dates: {
    preciseDateIso: "2026-05-20T10:30:00+05:30",
    rsvpDeadlineIso: "2026-05-10T23:59:59+05:30", // Feature #20: RSVP deadline
    calendar: {
      dayOfWeek: "Wednesday",
      dayNumber: "20",
      month: "May",
      year: "2026",
    },
    headerDisplay: "May 20 · 2026",
    rsvpDeadlineSummary: "20th",
    icsFormat: {
      dateStart: "20260520T050000Z",
      dateEnd:   "20260520T160000Z"
    }
  },

  events: {
    ceremony: {
      titleEn: "Muhurtham Time",
      titleMl: "മുഹൂർത്തം",
      timeText: "10:30 AM to 11:15 AM"
    },
    reception: {
      titleEn: "Reception",
      titleMl: "സൽക്കാരം",
      timeText: "6:00 PM onwards"
    }
  },

  venue: {
    name: "Kalyana Mandapam",
    addressEn: [
      "12/45 Temple Road, Thrissur",
      "Kerala — 680 001"
    ],
    singleLineAddress: "Kalyana Mandapam, Thrissur, Kerala",
    links: {
      googleMapsEmbed: "https://maps.google.com/maps?q=Thrissur,Kerala&output=embed&zoom=13",
      googleMapsDirect: "https://maps.google.com/?q=Kalyana+Mandapam+Thrissur+Kerala",
    }
  },

  reception: {
    name: "Royal Gardens Banquet Hall",
    timeText: "6:00 PM onwards",
    addressEn: [
      "Palace Road, Near Sakthan Bus Stand",
      "Thrissur, Kerala — 680 001"
    ],
    singleLineAddress: "Royal Gardens Banquet Hall, Thrissur, Kerala",
    links: {
      googleMapsEmbed: "https://maps.google.com/maps?q=Thrissur,Kerala&output=embed&zoom=14",
      googleMapsDirect: "https://maps.google.com/?q=Royal+Gardens+Banquet+Hall+Thrissur",
    }
  },

  hosts: [
    "Mr. & Mrs. Krishnan Nair",
    "Mr. & Mrs. Suresh Menon"
  ],

  family: {
    groom: {
      name: "Anand Krishnan",
      father: "Mr. Krishnan Nair",
      mother: "Mrs. Santha Krishnan",
      relation: "Son of"
    },
    bride: {
      name: "Meera Suresh",
      father: "Mr. Suresh Menon",
      mother: "Mrs. Leela Suresh",
      relation: "Daughter of"
    }
  },

  // Feature #16: Dress Code
  dressCode: {
    enabled: true,
    label: "Dress Code",
    theme: "Traditional · Gold & Cream",
    note: "Ladies are requested to wear sarees or churidars. Gents, traditional wear preferred."
  },

  // Feature #17: Gifts / Registry
  gifts: {
    enabled: true,
    message: "Your presence is the greatest gift. If you wish to bless us:",
    upi: "anand.meera2026@okaxis",
    bankNote: "Or contact family for bank details."
  },

  // Feature #3: Multi-language
  translations: {
    ml: {
      inviteSecondaryEn: "ഞങ്ങളുടെ വിവാഹ ആഘോഷത്തിൽ പങ്കെടുക്കാൻ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു",
      venueLabel: "സ്ഥലം",
      ceremonyLabel: "മുഹൂർത്തം",
      receptionLabel: "സൽക്കാരം",
      rsvpTitle: "സ്ഥിരീകരിക്കൂ",
      ourStory: "ഞങ്ങളുടെ കഥ",
      familiesTitle: "ഞങ്ങളുടെ കുടുംബങ്ങൾ"
    }
  },

  strings: {
    inviteSecondaryEn: "Together with their families, we joyfully invite you to celebrate the marriage of",
    invitePrimaryMl: "വിവാഹ ക്ഷണം",
    envelopeSmallTitle: "വിവാഹ ക്ഷണം",
    whatsappShareText: "You're invited to the wedding of Anand & Meera! 📍 Kalyana Mandapam, Thrissur 📅 20th May 2026"
  },

  // Feature #11: OG / SEO meta
  meta: {
    title: "Anand & Meera Wedding — 20th May 2026",
    description: "You are warmly invited to celebrate the wedding of Anand & Meera on 20th May 2026 at Kalyana Mandapam, Thrissur.",
    ogImage: "/og-cover.jpg",
    themeColor: "#B8913A"
  },

  // Feature #12: PWA
  pwa: {
    appName: "Anand & Meera",
    shortName: "A&M Wedding",
    description: "Wedding Invitation — Anand & Meera · May 20, 2026"
  },

  gallery: [
    { src: '/gallery/photo1.jpg', alt: 'Together', span: 'tall' },
    { src: '/gallery/photo2.jpg', alt: 'Garden walk', span: 'wide' },
    { src: '/gallery/photo3.jpg', alt: 'Laughing', span: 'tall' },
    { src: '/gallery/photo4.jpg', alt: 'Sunset', span: 'wide' },
    { src: '/gallery/photo5.jpg', alt: 'Flowers', span: 'square' },
    { src: '/gallery/photo6.jpg', alt: 'Temple', span: 'tall' },
  ]
};
