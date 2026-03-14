export const reportData = {
  hero: {
    title: { en: "Report a Concern", sw: "Ripoti Taarifa" },
    subtitle: {
      en: "Report safety issues, abuse, or any urgent concerns.",
      sw: "Ripoti masuala ya usalama, unyanyasaji, au hofu yoyote ya dharura.",
    },
  },
  sections: [
    {
      id: 'safety',
      type: 'category',
      title: { en: "Safety Issues", sw: "Masuala ya Usalama" },
      description: {
        en: "Report hazards, unsafe conditions, or immediate threats to yourself or others.",
        sw: "Ripoti hatari, hali zisizo salama, au tishio lolote kwako au kwa wengine.",
      },
      contacts: [
        { type: "Phone", value: "+254 700 000 001" },
        { type: "Email", value: "safety@neurocare.org" },
        { type: "Hotline", value: "0800 123 456" },
      ],
      instructions: {
        en: [
          "Clearly describe the issue or location.",
          "Include any people involved if safe to do so.",
          "Provide photos or evidence if available.",
        ],
        sw: [
          "Eleza tatizo au eneo kwa uwazi.",
          "Jumuisha watu walioko ikiwa ni salama kufanya hivyo.",
          "Toa picha au ushahidi ikiwa upo.",
        ],
      },
    },
    {
      id: 'abuse',
      type: 'category',
      title: { en: "Abuse or Neglect", sw: "Unyanyasaji au Kutengwa" },
      description: {
        en: "Report physical, emotional, or financial abuse or neglect of a person under your care.",
        sw: "Ripoti unyanyasaji wa kimwili, kihisia, au kifedha au kutengwa kwa mtu unaemlea.",
      },
      contacts: [
        { type: "Phone", value: "+254 700 000 002" },
        { type: "Email", value: "abuse@neurocare.org" },
        { type: "Hotline", value: "0800 234 567" },
      ],
      instructions: {
        en: [
          "Provide the victim's age and relationship to you.",
          "Include the type of abuse and how long it has been occurring.",
          "Attach any supporting evidence if safe.",
        ],
        sw: [
          "Toa umri wa mwathirika na uhusiano wako naye.",
          "Jumuisha aina ya unyanyasaji na muda umeanza.",
          "Ambatanisha ushahidi wowote ikiwa ni salama.",
        ],
      },
    },
    {
      id: 'other',
      type: 'category',
      title: { en: "Other Concerns", sw: "Masuala Mengine" },
      description: {
        en: "Report any other urgent or unusual issues affecting care, safety, or well-being.",
        sw: "Ripoti masuala mengine yoyote ya dharura au yasiyo ya kawaida yanayoathiri huduma, usalama, au ustawi.",
      },
      contacts: [
        { type: "Phone", value: "+254 700 000 003" },
        { type: "Email", value: "info@neurocare.org" },
      ],
      instructions: {
        en: [
          "Describe the concern in detail.",
          "Provide relevant dates and times.",
          "Include any supporting attachments if available.",
        ],
        sw: [
          "Eleza tatizo kwa undani.",
          "Toa tarehe na muda muhimu.",
          "Jumuisha nyongeza yoyote ya ushahidi ikiwa upo.",
        ],
      },
    },
  ],
};
