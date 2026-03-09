// src/demo/living.ts
export const livingData = {
  hero: {
    title: {
      en: 'Living with Neurological Conditions',
      sw: 'Kuishi na Hali za Neurolojia',
    },
    subtitle: {
      en: 'Practical guidance, rehabilitation tips and encouragement for everyday life.',
      sw: 'Mwongozo wa vitendo, ushauri wa urejeshaji na faraja kwa maisha ya kila siku.',
    },
    image: require('../../assets/images/living-hero.jpg'),
  },

  sections: [
    {
      id: 'rehab',
      type: 'cardList',
      title: {
        en: 'Rehabilitation & Daily Support',
        sw: 'Urejeshaji na Msaada wa Kila Siku',
      },
      cards: [
        /* ─────────────────────────────────────────────
           Physical Rehabilitation
        ───────────────────────────────────────────── */
        {
          slug: 'physical-rehabilitation',
          icon: 'fitness-outline',
          bannerImage: require('../../assets/images/physical-rehabilitation.jpg'),

          title: {
            en: 'Physical Rehabilitation',
            sw: 'Urejeshaji wa Mwili',
          },

          description: {
            en: 'Exercises and therapies that help improve strength, balance and movement over time.',
            sw: 'Mazoezi na tiba zinazosaidia kuboresha nguvu, usawa na mwendo kwa muda.',
          },

          sections: {
            whyItMatters: {
              title: {
                en: 'Why Physical Rehabilitation Matters',
                sw: 'Kwa Nini Urejeshaji wa Mwili ni Muhimu',
              },
              content: {
                en: 'Neurological conditions can weaken muscles, affect balance and limit mobility. Physical rehabilitation helps the body adapt, regain function where possible and prevent complications such as stiffness, pain or falls.',
                sw: 'Hali za neurolojia zinaweza kudhoofisha misuli, kuathiri usawa na kupunguza mwendo. Urejeshaji wa mwili husaidia mwili kuzoea, kurejesha uwezo pale inapowezekana na kuzuia matatizo kama kukakamaa, maumivu au kuanguka.',
              },
            },

            tips: {
              title: {
                en: 'Practical Rehabilitation Tips',
                sw: 'Vidokezo vya Urejeshaji wa Mwili',
              },
              bullets: {
                en: [
                  'Focus on small, consistent movements rather than intensity.',
                  'Follow exercises recommended by a physiotherapist and health workers.',
                  'Rest when tired — fatigue is part of the condition, not weakness.',
                  'Use assistive devices if they make movement safer and easier.',
                ],
                sw: [
                  'Lenga mwendo mdogo wa mara kwa mara badala ya nguvu nyingi.',
                  'Fuata mazoezi yaliyopendekezwa na wataalamu wa afya.',
                  'Pumzika unapochoka — uchovu ni sehemu ya hali, si udhaifu.',
                  'Tumia vifaa saidizi ikiwa vinaongeza usalama na urahisi wa mwendo.',
                ],
              },
            },

            challenges: {
              title: {
                en: 'Overcoming Common Challenges',
                sw: 'Kukabiliana na Changamoto za Kawaida',
              },
              content: {
                en: 'Pain, fear of falling or slow progress can be discouraging. Rehabilitation is rarely linear. What matters most is persistence, support and adapting goals to your current abilities.',
                sw: 'Maumivu, hofu ya kuanguka au maendeleo ya polepole yanaweza kukatisha tamaa. Urejeshaji si mstari mmoja. Kilicho muhimu ni kuendelea, kupata msaada na kurekebisha malengo kulingana na uwezo wako wa sasa.',
              },
            },

            relatedTopics: [
              { slug: 'speech-communication', label: { en: 'Speech & Communication', sw: 'Hotuba na Mawasiliano' } },
              { slug: 'cognitive-support', label: { en: 'Cognitive Support', sw: 'Msaada wa Kumbukumbu na Fikra' } },
            ],

            reassurance: {
              en: 'Your body is doing its best. Every effort, no matter how small, counts.',
              sw: 'Mwili wako unafanya juhudi zake zote. Kila hatua, hata ndogo, ina maana.',
            },
          },
        },

        /* ─────────────────────────────────────────────
           Speech & Communication
        ───────────────────────────────────────────── */
        {
          slug: 'speech-communication',
          icon: 'chatbubble-ellipses-outline',
          bannerImage: require('../../assets/images/speech-communication.jpg'),

          title: {
            en: 'Speech & Communication',
            sw: 'Hotuba na Mawasiliano',
          },

          description: {
            en: 'Support for speech, swallowing and alternative ways to communicate effectively.',
            sw: 'Msaada wa hotuba, kumeza na njia mbadala za mawasiliano.',
          },

          sections: {
            whyItMatters: {
              title: {
                en: 'Why Speech & Communication Matter',
                sw: 'Kwa Nini Hotuba na Mawasiliano ni Muhimu',
              },
              content: {
                en: 'Communication affects relationships, independence and dignity. Neurological conditions may change how speech, voice or understanding works, but meaningful communication is always possible.',
                sw: 'Mawasiliano huathiri mahusiano, uhuru na heshima. Hali za neurolojia zinaweza kubadilisha hotuba au uelewa, lakini mawasiliano yenye maana yanawezekana kila wakati.',
              },
            },

            tips: {
              title: {
                en: 'Helpful Communication Tips',
                sw: 'Vidokezo vya Mawasiliano',
              },
              bullets: {
                en: [
                  'Take your time — slow speech is still valid communication.',
                  'Use gestures, writing or pictures if speech is difficult.',
                  'Ask others to be patient and listen without rushing you.',
                  'Seek early help for swallowing difficulties.',
                ],
                sw: [
                  'Chukua muda wako — hotuba ya polepole bado ni mawasiliano.',
                  'Tumia ishara, maandishi au picha ikiwa hotuba ni ngumu.',
                  'Waombe wengine wawe na subira na wakusikilize bila haraka.',
                  'Tafuta msaada mapema kwa changamoto za kumeza.',
                ],
              },
            },

            challenges: {
              title: {
                en: 'Overcoming Communication Barriers',
                sw: 'Kuvuka Vikwazo vya Mawasiliano',
              },
              content: {
                en: 'Feeling misunderstood can be painful. With the right tools, therapy and support, communication can improve or adapt in ways that preserve connection and confidence.',
                sw: 'Kutoeleweka kunaweza kuumiza. Kwa zana sahihi, tiba na msaada, mawasiliano yanaweza kuboreshwa au kubadilishwa kwa njia zinazodumisha uhusiano na kujiamini.',
              },
            },

            relatedTopics: [
              { slug: 'physical-rehabilitation', label: { en: 'Physical Rehabilitation', sw: 'Urejeshaji wa Mwili' } },
              { slug: 'cognitive-support', label: { en: 'Cognitive Support', sw: 'Msaada wa Kumbukumbu na Fikra' } },
            ],

            reassurance: {
              en: 'Your voice matters — even when it sounds different.',
              sw: 'Sauti yako ni muhimu — hata ikiwa imebadilika.',
            },
          },
        },

        /* ─────────────────────────────────────────────
           Cognitive Support
        ───────────────────────────────────────────── */
        {
          slug: 'cognitive-support',
          icon: 'bulb-outline',
          bannerImage: require('../../assets/images/cognitive-support.jpg'),

          title: {
            en: 'Cognitive Support',
            sw: 'Msaada wa Kumbukumbu na Fikra',
          },

          description: {
            en: 'Strategies to manage memory, attention and problem-solving challenges.',
            sw: 'Mikakati ya kukabiliana na changamoto za kumbukumbu na umakini.',
          },

          sections: {
            whyItMatters: {
              title: {
                en: 'Why Cognitive Support Matters',
                sw: 'Kwa Nini Msaada wa Utambuzi ni Muhimu',
              },
              content: {
                en: 'Cognitive changes can affect daily life, decision-making and confidence. Support focuses on adapting the environment and routines — not changing who you are.',
                sw: 'Mabadiliko ya utambuzi yanaweza kuathiri maisha ya kila siku na kujiamini. Msaada hulenga kurekebisha mazingira na ratiba — si kubadilisha wewe.',
              },
            },

            tips: {
              title: {
                en: 'Practical Cognitive Strategies',
                sw: 'Mikakati ya Vitendo ya Utambuzi',
              },
              bullets: {
                en: [
                  'Use reminders, alarms or notes.',
                  'Break tasks into small, manageable steps.',
                  'Keep routines predictable.',
                  'Reduce distractions when focusing.',
                ],
                sw: [
                  'Tumia vikumbusho, alamu au maandishi.',
                  'Gawanya kazi katika hatua ndogo.',
                  'Dumisha ratiba zilizo wazi.',
                  'Punguza vishawishi unapohitaji umakini.',
                ],
              },
            },

            challenges: {
              title: {
                en: 'Coping with Cognitive Changes',
                sw: 'Kukabiliana na Mabadiliko ya Utambuzi',
              },
              content: {
                en: 'Cognitive challenges can be invisible but deeply frustrating. Support, understanding and self-compassion are just as important as any strategy.',
                sw: 'Changamoto za utambuzi zinaweza kutoonekana lakini kuumiza sana. Msaada, uelewa na kujihurumia ni muhimu kama mikakati yoyote.',
              },
            },

            relatedTopics: [
              { slug: 'physical-rehabilitation', label: { en: 'Physical Rehabilitation', sw: 'Urejeshaji wa Mwili' } },
              { slug: 'speech-communication', label: { en: 'Speech & Communication', sw: 'Hotuba na Mawasiliano' } },
            ],

            reassurance: {
              en: 'Needing support with thinking does not reduce your worth.',
              sw: 'Kuhitaji msaada wa kufikiri hakupunguzi thamani yako.',
            },
          },
        },
      ],
    },
  ],
};
