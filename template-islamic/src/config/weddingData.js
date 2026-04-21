export const weddingData = {
  couple: {
    groom: "Fahad",
    bride: "Ayesha",
    ampersand: "&",
    initials: "F&A"
  },
  
  dates: {
    // JavaScript parsable ISO format (used for countdown & ICS file)
    preciseDateIso: "2026-11-15T10:30:00+05:30",
    rsvpDeadlineIso: "2026-05-10T23:59:59+05:30",
    
    // UI strings for the calendar view
    calendar: {
      dayOfWeek: "Sunday",
      dayNumber: "15",
      month: "Nov",
      year: "2026",
    },

    // UI strings for text sections
    headerDisplay: "Nov 15 Â· 2026",
    rsvpDeadlineSummary: "15th", // e.g. "See you on the 15th!"
    
    // For ICS Generator specifically
    icsFormat: {
      dateStart: "20261115T050000Z",
      dateEnd:   "20261115T160000Z"
    }
  },

  events: {
    ceremony: {
      titleEn: "Nikah Ceremony",
      titleMl: "à´¨à´¿à´•àµà´•à®¾à®¹à¯",
      timeText: "10:30 AM to 11:30 AM"
    },
    reception: {
      titleEn: "Walima Reception",
      titleMl: "à´µà´²àµ€à´® à´¸àµ½à´•àµà´•à´¾à´°à´‚",
      timeText: "6:00 PM onwards"
    }
  },

  venue: {
    name: "Al-Hambra Convention Center",
    addressEn: [
      "124 Gateway Avenue, Kochi",
      "Kerala â€” 682 011"
    ],
    singleLineAddress: "Al-Hambra Convention Center, Kochi, Kerala",
    links: {
      googleMapsEmbed: "https://maps.google.com/maps?q=Kochi,Kerala&output=embed&zoom=13",
      googleMapsDirect: "https://maps.google.com/?q=Kochi+Kerala",
    }
  },

  reception: {
    name: "Walima â€” Grand Ballroom, Hotel Taj",
    timeText: "7:30 PM onwards",
    addressEn: [
      "MG Road, Ernakulam",
      "Kochi, Kerala â€” 682 035"
    ],
    singleLineAddress: "Grand Ballroom, Hotel Taj, Kochi, Kerala",
    links: {
      googleMapsEmbed: "https://maps.google.com/maps?q=Hotel+Taj+Kochi&output=embed&zoom=14",
      googleMapsDirect: "https://maps.google.com/?q=Hotel+Taj+Kochi",
    }
  },

  hosts: [
    "Mr. & Mrs. Abdul Rahman",
    "Mr. & Mrs. Salim Khan"
  ],

  family: {
    groom: {
      name: "Fahad Abdul Rahman",
      father: "Mr. Abdul Rahman",
      mother: "Mrs. Fathima Rahman",
      relation: "Son of"
    },
    bride: {
      name: "Ayesha Salim",
      father: "Mr. Salim Khan",
      mother: "Mrs. Zubaidha Salim",
      relation: "Daughter of"
    }
  },

  strings: {
    bismillahArabic: "Ø¨ÙØ³Ù’Ù…Ù Ø§Ù„Ù„ÙŽÙ‘Ù‡Ù Ø§Ù„Ø±ÙŽÙ‘Ø­Ù’Ù…ÙŽÙ°Ù†Ù Ø§Ù„Ø±ÙŽÙ‘Ø­ÙÙŠÙ…Ù",
    inviteSecondaryEn: "In the name of Allah, the Most Gracious, the Most Merciful. We joyfully invite you to celebrate the marriage of",
    invitePrimaryMl: "à´µà´¿à´µà´¾à´¹ à´•àµà´·à´£à´‚",
    envelopeSmallTitle: "BISMILLAH",
    whatsappShareText: "You are affectionately invited to the Nikah of Fahad & Ayesha! ðŸ“ Al-Hambra Convention Center, Kochi ðŸ“… 15th Nov 2026"
  },

  gallery: [
    { src: '/gallery/photo1.jpg', alt: 'Together', span: 'tall' },
    { src: '/gallery/photo2.jpg', alt: 'Garden walk', span: 'wide' },
    { src: '/gallery/photo3.jpg', alt: 'Laughing', span: 'tall' },
    { src: '/gallery/photo4.jpg', alt: 'Sunset', span: 'wide' },
    { src: '/gallery/photo5.jpg', alt: 'Flowers', span: 'square' },
    { src: '/gallery/photo6.jpg', alt: 'Venue', span: 'tall' },
  ]
};
