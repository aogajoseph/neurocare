// src/demo/caregiver.ts
export const caregiverData = {
  hero: {
    title: {
      en: 'Caregiver Guide',
      sw: 'Mwongozo wa Mlezi',
    },
    subtitle: {
      en: 'Supporting your life and the one you care for.',
      sw: 'Kusaidia maisha yako na yale ya unayemlea.',
    },
    image: require('../../assets/images/caregiver-guide.jpg'),
  },

  sections: [
    {
      id: 'caregiver',
      type: 'cardList',
      title: {
        en: 'Caregiver Topics',
        sw: 'Mada za Mlezi',
      },
      cards: [
        {
          slug: 'personal-care',
          icon: 'heart-outline',
          bannerImage: require('../../assets/images/personal-care.jpg'),
          title: {
            en: 'Personal Care',
            sw: 'Huduma Binafsi',
          },
          description: {
            en: 'Tips to strengthen your own life and wellbeing.',
            sw: 'Vidokezo vya kuimarisha maisha yako na ustawi wako.',
          },
          sections: {
            whyItMatters: {
              title: {
                en: 'Why Personal Care Matters',
                sw: 'Kwa Nini Huduma Binafsi ni Muhimu',
              },
              content: {
                en: 'Caring for yourself is essential to stay physically, emotionally, and mentally strong so you can provide care to others without burning out.',
                sw: 'Kujitunza ni muhimu ili kubaki hodari kimwili, kihisia na kisaikolojia ili uweze kutoa huduma kwa wengine bila kuchoka.',
              },
            },

            tips: {
              title: {
                en: 'Self-Care Tips',
                sw: 'Vidokezo vya Kujitunza',
              },
              bullets: {
                en: [
                  'Take short breaks during caregiving tasks.',
                  'Maintain a balanced diet and hydration.',
                  'Sleep sufficiently and rest when possible.',
                  'Engage in activities that bring you joy.',
                  'Seek support from friends, family, or support groups.',
                ],
                sw: [
                  'Pumzika kidogo wakati wa kazi za kulea.',
                  'Hakikisha unakula vizuri na kunywa maji vya kutosha.',
                  'Lala vya kutosha na pumzika pale inapowezekana.',
                  'Fanya shughuli zinazokuletea furaha.',
                  'Tafuta msaada kutoka kwa marafiki, familia, au makundi ya msaada.',
                ],
              },
            },

            challenges: {
              title: {
                en: 'Common Challenges',
                sw: 'Changamoto za Kawaida',
              },
              content: {
                en: 'Feelings of guilt, exhaustion, or isolation are normal. Recognizing them and asking for help is a sign of strength.',
                sw: 'Hisia za hatia, uchovu, au upweke ni kawaida. Kutambua hizi na kuomba msaada ni ishara ya nguvu.',
              },
            },

            relatedTopics: [
              {
                slug: 'caregiving',
                label: { en: 'Caregiving', sw: 'Ulezi' },
              },
            ],

            reassurance: {
              en: 'Remember: your well-being is just as important as the one you care for.',
              sw: 'Kumbuka: ustawi wako ni muhimu kama ule wa unayemlea.',
            },
          },
        },

        {
          slug: 'caregiving',
          icon: 'people-outline',
          bannerImage: require('../../assets/images/caregiving.png'),
          title: {
            en: 'Caregiving',
            sw: 'Ulezi',
          },
          description: {
            en: 'Practical guidance for daily caregiving tasks.',
            sw: 'Mwongozo wa vitendo kwa huduma za kila siku.',
          },
          sections: {
            whyItMatters: {
              title: {
                en: 'Why Caregiving Matters',
                sw: 'Kwa Nini Ulezi ni Muhimu',
              },
              content: {
                en: 'Providing consistent, thoughtful care improves quality of life for the person you care for and helps maintain their independence where possible.',
                sw: 'Kutoa huduma ya mara kwa mara na yenye mawazo hupanua ubora wa maisha kwa unayemlea na kusaidia kudumisha uhuru wao pale inapowezekana.',
              },
            },

            tips: {
              title: {
                en: 'Daily Care Tips',
                sw: 'Vidokezo vya Huduma ya Kila Siku',
              },
              bullets: {
                en: [
                  'Follow medication and therapy routines carefully.',
                  'Assist with mobility and transfers safely.',
                  'Maintain hygiene and nutrition consistently.',
                  'Communicate clearly and compassionately.',
                  'Use tools and resources to reduce strain.',
                ],
                sw: [
                  'Fuatilia kwa makini dawa na ratiba za tiba.',
                  'Saidia kwa usalama katika mwendo na uhamisho.',
                  'Hakikisha usafi na lishe kwa uthabiti.',
                  'Wasiliana kwa uwazi na kwa huruma.',
                  'Tumia zana na rasilimali kupunguza mzigo.',
                ],
              },
            },

            challenges: {
              title: {
                en: 'Caregiving Challenges',
                sw: 'Changamoto za Ulezi',
              },
              content: {
                en: 'Fatigue, unexpected health events, and balancing multiple responsibilities are common. Planning, patience, and asking for help are key.',
                sw: 'Uchovu, matukio yasiyotegemewa ya kiafya, na kusawazisha majukumu mengi ni kawaida. Kupanga, uvumilivu, na kuomba msaada ni muhimu.',
              },
            },

            relatedTopics: [
              {
                slug: 'personal-care',
                label: { en: 'Personal Care', sw: 'Huduma Binafsi' },
              },
            ],

            reassurance: {
              en: 'Every day you provide care makes a difference — your effort matters.',
              sw: 'Kila siku unayotoa huduma ina maana — jitihada zako zina thamani.',
            },
          },
        },
      ],
    },
  ],
};
