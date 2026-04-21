export const weddingData = {
  couple: {
    groom: "Anand",
    bride: "Meera",
    ampersand: "&",
    initials: "A&M"
  },
  
  dates: {
    // JavaScript parsable ISO format (used for countdown & ICS file)
    preciseDateIso: "2026-05-20T10:30:00+05:30",
    rsvpDeadlineIso: "2026-05-10T23:59:59+05:30",
    
    // UI strings for the calendar view
    calendar: {
      dayOfWeek: "Wednesday",
      dayNumber: "20",
      month: "May",
      year: "2026",
    },

    // UI strings for text sections
    headerDisplay: "May 20 Â· 2026",
    rsvpDeadlineSummary: "20th", // e.g. "See you on the 20th!"
    
    // For ICS Generator specifically
    icsFormat: {
      dateStart: "20260520T050000Z",
      dateEnd:   "20260520T160000Z"
    }
  },

  events: {
    ceremony: {
      titleEn: "Muhurtham Time",
      titleMl: "à´®àµà´¹àµ‚àµ¼à´¤àµà´¤à´‚",
      timeText: "10:30 AM to 11:15 AM"
    },
    reception: {
      titleEn: "Reception",
      titleMl: "à´¸àµ½à´•àµà´•à´¾à´°à´‚",
      timeText: "6:00 PM onwards"
    }
  },

  venue: {
    name: "Kalyana Mandapam",
    addressEn: [
      "12/45 Temple Road, Thrissur",
      "Kerala â€” 680 001"
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
      "Thrissur, Kerala â€” 680 001"
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

  strings: {
    inviteSecondaryEn: "Together with their families, we joyfully invite you to celebrate the marriage of",
    invitePrimaryMl: "à´µà´¿à´µà´¾à´¹ à´•àµà´·à´£à´‚",
    envelopeSmallTitle: "à´µà´¿à´µà´¾à´¹ à´•àµà´·à´£à´‚",
    whatsappShareText: "You're invited to the wedding of Anand & Meera! ðŸ“ Kalyana Mandapam, Thrissur ðŸ“… 20th May 2026"
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
