// src/demo/myths.ts
export const mythsData = {
  hero: {
    title: { en: 'Myths & Facts', sw: 'Hadithi na Ukweli' },
    subtitle: {
      en: 'Learn the truth about common neurological misconceptions.',
      sw: 'Jifunze ukweli kuhusu dhana potofu za neurolojia.',
    },
  },

  sections: [
    {
      id: 'myths-list',
      type: 'cardList',
      title: { en: 'Common Myths', sw: 'Hadithi za Kawaida' },
      cards: [
        {
          slug: 'epilepsy-contagious',
          icon: 'help-circle-outline',
          title: {
            en: 'Epilepsy is contagious',
            sw: ' Kifafa kinaambukiza',
          },
          description: {
            en: 'A common misconception that spreads fear and stigma.',
            sw: 'Dhana potofu inayosambaza hofu na unyanyapaa.',
          },
          sections: {
            whyItMatters: {
              title: { en: 'The Truth', sw: 'Ukweli' },
              content: {
                en: 'Epilepsy is not contagious. It is a neurological condition caused by abnormal brain activity.',
                sw: 'Kifafa hakinaambukizi. Ni hali ya neurolojia inayosababishwa na shughuli isiyo ya kawaida ya ubongo.',
              },
            },
            tips: {
              title: { en: 'How to Respond', sw: 'Jinsi ya Kujibu' },
              bullets: {
                en: [
                  'Provide calm reassurance to those having seizures.',
                  'Educate your community to reduce stigma.',
                  'Encourage proper medical consultation.',
                ],
                sw: [
                  'Toa faraja kwa wale wanaokumbwa na kifafa.',
                  'Elimisha jamii yako kupunguza unyanyapaa.',
                  'Himiza kushauriana na daktari ipasavyo.',
                ],
              },
            },
            relatedTopics: [
              {
                slug: 'stroke-myths',
                label: { en: 'Stroke Myths', sw: 'Hadithi za Kiharusi' },
              },
            ],
            reassurance: {
              en: 'Understanding the truth helps you support others safely.',
              sw: 'Kuelewa ukweli kunakusaidia kuwatunza wengine kwa usalama.',
            },
          },
        },
        {
          slug: 'stroke-myths',
          icon: 'help-circle-outline',
          title: {
            en: 'Stroke only affects the elderly',
            sw: 'Kiharusi kinawaathiri wazee tu',
          },
          description: {
            en: 'Younger adults can also be affected by strokes.',
            sw: 'Watu wazima wadogo pia wanaweza kuathiriwa na kiharusi.',
          },
          sections: {
            whyItMatters: {
              title: { en: 'The Truth', sw: 'Ukweli' },
              content: {
                en: 'Stroke can affect anyone, regardless of age. Early recognition and treatment are vital.',
                sw: 'Kiharusi kinaweza kuathiri mtu yeyote, bila kujali umri. Kutambua mapema na matibabu ni muhimu.',
              },
            },
            tips: {
              title: { en: 'Practical Tips', sw: 'Vidokezo vya Vitendo' },
              bullets: {
                en: [
                  'Learn the warning signs.',
                  'Encourage a healthy lifestyle.',
                  'Seek emergency help if needed.',
                ],
                sw: [
                  'Jifunze ishara za onyo.',
                  'Himiza mtindo wa maisha wenye afya.',
                  'Tafuta msaada wa dharura ikiwa ni lazima.',
                ],
              },
            },
            relatedTopics: [
              {
                slug: 'epilepsy-contagious',
                label: { en: 'Epilepsy Myths', sw: 'Hadithi za Kifafa' },
              },
            ],
            reassurance: {
              en: 'Everyone should know that strokes can happen at any age.',
              sw: 'Kila mtu anapaswa kujua kuwa kiharusi kinaweza kutokea kwa umri wowote.',
            },
          },
        },
      ],
    },
  ],
};
