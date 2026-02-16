// src/demo/community-messages.ts

export type CommunityMessage = {
  id: string;
  spaceId: string;
  author: {
    id: string;
    name: string;
    role: 'caregiver' | 'moderator';
    profileImage: string;
  };
  content: {
    en: string;
    sw: string;
  };
  createdAt: string;
};

/*
|--------------------------------------------------------------------------
| Caregiver Guidance & Counselling – Demo Messages
|--------------------------------------------------------------------------
*/

export const communityMessages: CommunityMessage[] = [
  {
    id: 'cg-1',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator-anne',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Caregiver Guidance & Counselling. This is a safe space to share, reflect, and support one another.',
      sw: 'Karibu kwenye Mwongozo na Ushauri kwa Walezi. Hii ni nafasi salama ya kushirikiana, kutafakari, na kusaidiana.',
    },
    createdAt: '2026-01-01T08:00:00Z',
  },

  {
    id: 'cg-2',
    spaceId: 'caregiver-guidance',
    author: {
        id: 'caregiver-mercyline',
      name: 'Mercyline',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Some days feel heavier than others. Just being here today feels like a small win.',
      sw: 'Siku zingine huhisi kuwa nzito zaidi. Kuwa hapa leo peke yake ni ushindi mdogo kwangu.',
    },
    createdAt: '2026-08-01T08:12:00Z',
  },

  {
    id: 'cg-3',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'caregiver-winfred',
      name: 'Winfred',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'You’re not alone, Mercyline. I’ve learned to take things one hour at a time.',
      sw: 'Huko peke yako, Mercyline. Nimejifunza kuchukua mambo saa moja kwa wakati.',
    },
    createdAt: '2026-08-01T08:18:00Z',
  },

  {
    id: 'cg-4',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator-anne',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Thank you for sharing. Feeling overwhelmed is very common, and it’s okay to acknowledge it.',
      sw: 'Asanteni kwa kushirikiana. Kujihisi umelemewa ni jambo la kawaida, na ni sawa kukubali hisia hizo.',
    },
    createdAt: '2026-09-01T08:30:00Z',
  },

  {
    id: 'cg-5',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'caregiver-judith',
      name: 'Judith',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I sometimes step outside for a few minutes just to breathe. It helps a bit.',
      sw: 'Wakati mwingine hutoka nje kwa dakika chache kupumua tu. Hunisaidia kidogo.',
    },
    createdAt: '2026-10-01T08:42:00Z',
  },

  {
    id: 'cg-6',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'caregiver-joseph',
      name: 'Joseph',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Short walks in the garden have helped me when things feel overwhelming.',
      sw: 'Matembezi mafupi bustanini yamenisaidia ninapohisi kulemewa.',
    },
    createdAt: '2026-10-01T08:55:00Z',
  },

  {
    id: 'cg-7',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator-anne',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'These are wonderful coping strategies. Please remember to be kind to yourselves.',
      sw: 'Hizi ni njia nzuri sana za kujikabili. Tafadhali kumbukeni kujionea huruma.',
    },
    createdAt: '2026-10-01T09:05:00Z',
  },

  /*
  |--------------------------------------------------------------------------
  | Understanding Neurological Care – Demo Messages
  |--------------------------------------------------------------------------
  */

  {
    id: 'unc-1',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Understanding Neurological Care. This space focuses on learning, clarity and shared experiences around neurological conditions.',
      sw: 'Karibu kwenye Kuelewa Huduma ya Neurologia. Nafasi hii inalenga kujifunza, ufafanuzi na uzoefu wa pamoja kuhusu hali za neurologia.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },

  {
    id: 'unc-2',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'caregiver-lucy',
      name: 'Lucy',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Can someone explain the difference between a neurologist and a neurosurgeon?',
      sw: 'Je, kuna mtu anaweza kueleza tofauti kati ya daktari wa neurologia na daktari wa upasuaji wa neva?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },

  {
    id: 'unc-3',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Great question, Lucy. A neurologist manages brain and nerve conditions medically, while a neurosurgeon performs surgical procedures involving the nervous system.',
      sw: 'Swali zuri, Lucy. Daktari wa neurologia hushughulikia hali za ubongo na neva kwa matibabu, wakati daktari wa upasuaji wa neva hufanya upasuaji wa mfumo wa neva.',
    },
    createdAt: '2026-02-11T10:22:00Z',
  },

  {
    id: 'unc-4',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'caregiver-daniel',
      name: 'Daniel',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'My father was diagnosed with Parkinson’s. Is tremor always present?',
      sw: 'Baba yangu aligunduliwa na Parkinson. Je, mtetemeko huwa upo kila wakati?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },

  {
    id: 'unc-5',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Not always, Daniel. Parkinson’s can present differently. Some people experience rigidity or slowed movement without a noticeable tremor.',
      sw: 'Sio kila wakati, Daniel. Parkinson hujitokeza kwa namna tofauti. Wengine hupata ugumu wa misuli au mwendo wa polepole bila mtetemeko unaoonekana.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },

  {
    id: 'unc-6',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'caregiver-amina',
      name: 'Amina',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Are seizures always a sign of epilepsy?',
      sw: 'Je, degedege huwa ishara ya kifafa kila wakati?',
    },
    createdAt: '2026-02-14T11:05:00Z',
  },

  {
    id: 'unc-7',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'No, Amina. Seizures can occur for many reasons such as fever, head injury, or metabolic disturbances. A proper evaluation is important.',
      sw: 'Hapana, Amina. Degedege zinaweza kutokea kwa sababu nyingi kama homa, jeraha la kichwa, au matatizo ya kimetaboliki. Tathmini sahihi ni muhimu.',
    },
    createdAt: '2026-02-14T11:18:00Z',
  },

  /*
  |--------------------------------------------------------------------------
  | Caregiving Basics – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'cb-1',
    spaceId: 'caregiving-basics',
    author: {
      id: 'moderator-george',
      name: 'Dr. George Kisiangani',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Caregiving Basics. This space focuses on practical daily care, safety, routines and simple strategies to make caregiving more manageable.',
      sw: 'Karibu kwenye Misingi ya Ulezi. Nafasi hii inalenga ulezi wa kila siku, usalama, ratiba na mbinu rahisi za kurahisisha ulezi.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },
  
  {
    id: 'cb-2',
    spaceId: 'caregiving-basics',
    author: {
      id: 'caregiver-Lorna',
      name: 'Lorna',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Does anyone have tips for reminding someone to take medication without causing frustration?',
      sw: 'Je, kuna mtu ana vidokezo vya kumkumbusha mtu kutumia dawa bila kusababisha kukasirika?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },
  
  {
    id: 'cb-3',
    spaceId: 'caregiving-basics',
    author: {
      id: 'moderator-george',
      name: 'Dr. George Kisiangani',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Great question, Lorna. Gentle reminders, linking medication to daily routines and using pill organizers can help reduce tension.',
      sw: 'Swali zuri, Lorna. Vikumbusho vya upole, kuunganisha dawa na ratiba za kila siku na kutumia visanduku vya dawa vinaweza kusaidia kupunguza msongo.',
    },
    createdAt: '2026-02-12T10:22:00Z',
  },
  
  {
    id: 'cb-4',
    spaceId: 'caregiving-basics',
    author: {
      id: 'caregiver-diana',
      name: 'Diana Kwamboka',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'My mother resists bathing some days. Any advice on handling this calmly?',
      sw: 'Mama yangu hukataa kuoga siku zingine. Ushauri wa kushughulikia hali hii kwa utulivu?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },
  
  {
    id: 'cb-5',
    spaceId: 'caregiving-basics',
    author: {
      id: 'moderator-george',
      name: 'Dr. George Kisiangani',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'That’s a common challenge, Diana. Choosing a different time of day, keeping the environment warm, and offering reassurance can sometimes help.',
      sw: 'Hilo ni changamoto ya kawaida, Diana. Kuchagua muda mwingine wa siku, kuhakikisha mazingira ni ya joto, na kutoa uhakikisho kunaweza kusaidia.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },
  
  {
    id: 'cb-6',
    spaceId: 'caregiving-basics',
    author: {
      id: 'caregiver-caroline',
      name: 'Caro',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'How do you manage caregiver fatigue when rest isn’t always possible?',
      sw: 'Mnashughulikiaje uchovu wa ulezi wakati mapumziko hayawezekani kila wakati?',
    },
    createdAt: '2026-02-15T11:05:00Z',
  },
  
  {
    id: 'cb-7',
    spaceId: 'caregiving-basics',
    author: {
      id: 'moderator-george',
      name: 'Dr. George Kisiangani',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Small breaks matter, Caro. Even short moments to breathe, hydrate, or step outside can help reset your energy.',
      sw: 'Mapumziko mafupi yana umuhimu, Caro. Hata dakika chache za kupumua, kunywa maji, au kutoka nje zinaweza kusaidia kurejesha nguvu.',
    },
    createdAt: '2026-02-15T11:18:00Z',
  },

  /*
  |--------------------------------------------------------------------------
  | Caregiver Peer Support – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'pc-1',
    spaceId: 'caregiver-peer-support',
    author: {
      id: 'moderator-christabel',
      name: 'Ms. Christabel Naimoi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to the Caregivers’ Peer Circle 💛 This is a space to connect, share experiences and support one another through the ups and downs of caregiving.',
      sw: 'Karibu kwenye Mduara wa Walezi 💛 Hii ni nafasi ya kuungana, kushirikiana uzoefu na kusaidiana katika changamoto na mafanikio ya ulezi.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },
  
  {
    id: 'pc-2',
    spaceId: 'caregiver-peer-support',
    author: {
      id: 'caregiver-faith',
      name: 'Faith',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Some days reminding my dad about medication turns into tension. Anyone else struggle with this?',
      sw: 'Siku zingine kumkumbusha baba yangu kutumia dawa hugeuka kuwa mvutano. Kuna mwingine anayepitia hali kama hii?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },
  
  {
    id: 'pc-3',
    spaceId: 'caregiver-peer-support',
    author: {
      id: 'moderator-christabel',
      name: 'Ms. Christabel Naimoi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'You’re definitely not alone, Faith. Many caregivers experience this. Sometimes changing the tone, timing or linking meds to a routine can ease the friction.',
      sw: 'Hauko peke yako, Faith. Walezi wengi hupitia hali kama hii. Wakati mwingine kubadilisha namna ya kukumbusha, muda au kuunganisha dawa na ratiba kunaweza kusaidia.',
    },
    createdAt: '2026-02-12T10:22:00Z',
  },
  
  {
    id: 'pc-4',
    spaceId: 'caregiver-peer-support',
    author: {
      id: 'caregiver-nabila',
      name: 'Nabila Ahmed',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Bath time has become stressful lately. My mum resists and I end up feeling guilty and exhausted.',
      sw: 'Muda wa kuoga umekuwa wa msongo hivi karibuni. Mama yangu hukataa na mimi hubaki na hatia na uchovu.',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },
  
  {
    id: 'pc-5',
    spaceId: 'caregiver-peer-support',
    author: {
      id: 'moderator-christabel',
      name: 'Ms. Christabel Naimoi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'That sounds really tough, Nabila. Please be gentle with yourself. Many caregivers face similar moments — you’re doing the best you can.',
      sw: 'Hilo linaonekana kuwa gumu sana, Nabila. Tafadhali jione huruma. Walezi wengi hupitia hali kama hii — unafanya kadri ya uwezo wako.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },
  
  {
    id: 'pc-6',
    spaceId: 'caregiver-peer-support',
    author: {
      id: 'caregiver-mwanasiti',
      name: 'Mwanasiti',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'How do you cope when you’re tired but still have to keep going?',
      sw: 'Mnajikabilije wakati mmechoka lakini bado mnalazimika kuendelea?',
    },
    createdAt: '2026-02-15T11:05:00Z',
  },
  
  {
    id: 'pc-7',
    spaceId: 'caregiver-peer-support',
    author: {
      id: 'moderator-christabel',
      name: 'Ms. Christabel Naimoi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Such an honest question, Mwanasiti 💛 Even small pauses — a few deep breaths, a sip of water, a moment outside — can make a difference.',
      sw: 'Swali la kweli sana, Mwanasiti 💛 Hata mapumziko mafupi — pumzi chache za kina, kunywa maji, au dakika nje — yanaweza kusaidia.',
    },
    createdAt: '2026-02-15T11:18:00Z',
  },  

  /*
  |--------------------------------------------------------------------------
  | Care Resources & Services – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'cr-1',
    spaceId: 'care-resources',
    author: {
      id: 'moderator-olivia',
      name: 'Dr. Olivia Otieno',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Care Resources & Services. This space helps caregivers discover and share information about clinics, therapists, support organizations and community services.',
      sw: 'Karibu kwenye Rasilimali na Huduma za Ulezi. Nafasi hii inasaidia walezi kugundua na kushirikiana taarifa kuhusu kliniki, wataalamu, mashirika na huduma za jamii.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },
  
  {
    id: 'cr-2',
    spaceId: 'care-resources',
    author: {
      id: 'caregiver-listar',
      name: 'Lister',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Can anyone recommend a clinic or specialist experienced with long-term neurological care?',
      sw: 'Kuna mtu anaweza kupendekeza kliniki au mtaalamu mwenye uzoefu na huduma ya muda mrefu ya magonjwa ya neva?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },
  
  {
    id: 'cr-3',
    spaceId: 'care-resources',
    author: {
      id: 'moderator-olivia',
      name: 'Dr. Olivia Otieno',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Great question, Lister. When sharing recommendations, please include location, type of service and what made the experience helpful.',
      sw: 'Swali zuri, Lister. Tafadhali unaposhiriki mapendekezo, taja eneo, aina ya huduma na kilichosaidia kwenye uzoefu wako.',
    },
    createdAt: '2026-02-12T10:22:00Z',
  },
  
  {
    id: 'cr-4',
    spaceId: 'care-resources',
    author: {
      id: 'caregiver-antonina',
      name: 'Antonina',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Looking for affordable home-based physiotherapy services. Any leads?',
      sw: 'Natafuta huduma nafuu za tiba ya viungo nyumbani. Kuna mapendekezo?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },
  
  {
    id: 'cr-5',
    spaceId: 'care-resources',
    author: {
      id: 'moderator-olivia',
      name: 'Dr. Olivia Otieno',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Thanks for asking, Antonina. Community members may share providers or organizations. Please remember to avoid posting private contact details publicly.',
      sw: 'Asante kwa swali, Antonina. Wanajamii wanaweza kushiriki watoa huduma au mashirika. Tafadhali epuka kuchapisha mawasiliano binafsi hadharani.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },
  
  {
    id: 'cr-6',
    spaceId: 'care-resources',
    author: {
      id: 'caregiver-christine',
      name: 'Christine',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Are there any NGOs offering caregiver training or respite support?',
      sw: 'Je, kuna mashirika yanayotoa mafunzo kwa walezi au msaada wa mapumziko?',
    },
    createdAt: '2026-02-15T11:05:00Z',
  },
  
  {
    id: 'cr-7',
    spaceId: 'care-resources',
    author: {
      id: 'moderator-olivia',
      name: 'Dr. Olivia Otieno',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Helpful question, Christine. Members are welcome to share verified programs, organizations or experiences accessing caregiver support services.',
      sw: 'Swali muhimu, Christine. Wanajamii wanakaribishwa kushiriki programu, mashirika au uzoefu wa kupata huduma za msaada kwa walezi.',
    },
    createdAt: '2026-02-15T11:18:00Z',
  },

  /*
  |--------------------------------------------------------------------------
  | Assistive Tools & Daily Living Tips – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'at-1',
    spaceId: 'assistive-tools',
    author: {
      id: 'moderator-jackson',
      name: 'Jackson Kibagendi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Assistive Tools & Daily Living Tips 💡 This space is for sharing devices, tools and practical strategies that make daily caregiving safer, easier and more manageable.',
      sw: 'Karibu kwenye Vifaa Saidizi na Vidokezo vya Maisha ya Kila Siku 💡 Hii ni nafasi ya kushirikiana vifaa, zana na mbinu rahisi zinazorahisisha ulezi wa kila siku na kuongeza usalama na urahisi.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },
  
  {
    id: 'at-2',
    spaceId: 'assistive-tools',
    author: {
      id: 'caregiver-noordin',
      name: 'Noordin',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Does anyone have recommendations for mobility aids that are safe for elderly care at home?',
      sw: 'Kuna mtu anaweza kupendekeza vifaa vya usaidizi wa uhamaji vinavyosalama kwa walezi wa wazee nyumbani?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },
  
  {
    id: 'at-3',
    spaceId: 'assistive-tools',
    author: {
      id: 'moderator-jackson',
      name: 'Jackson Kibagendi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Great question, Noordin. When recommending tools, please mention the type of device, ease of use and any safety tips that worked for you.',
      sw: 'Swali zuri, Noordin. Unapopendekeza vifaa, tafadhali taja aina ya kifaa, urahisi wa matumizi na vidokezo vya usalama vilivyokusaidia.',
    },
    createdAt: '2026-02-12T10:22:00Z',
  },
  
  {
    id: 'at-4',
    spaceId: 'assistive-tools',
    author: {
      id: 'caregiver-felistus',
      name: 'Felistus',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I’m looking for affordable grab bars and bath aids for home use. Any suggestions?',
      sw: 'Natafuta mikono ya kushika na vifaa vya kuoga nyumbani kwa bei nafuu. Kuna mapendekezo?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },
  
  {
    id: 'at-5',
    spaceId: 'assistive-tools',
    author: {
      id: 'moderator-jackson',
      name: 'Jackson Kibagendi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Thanks for asking, Felistus. Community members can share what has worked for them, but please avoid posting private vendor contacts publicly.',
      sw: 'Asante kwa kuuliza, Felistus. Wanajamii wanaweza kushirikiana kile kilichowasaidia, lakini tafadhali epuka kuchapisha mawasiliano binafsi ya wauzaji hadharani.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },
  
  {
    id: 'at-6',
    spaceId: 'assistive-tools',
    author: {
      id: 'caregiver-jane',
      name: 'Jane',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Does anyone use adaptive utensils or plates for feeding? I’m looking for tips to make mealtime easier.',
      sw: 'Kuna mtu anayetumia vyombo vya chakula vilivyorekebishwa? Natafuta vidokezo vya kurahisisha muda wa chakula.',
    },
    createdAt: '2026-02-15T11:05:00Z',
  },
  
  {
    id: 'at-7',
    spaceId: 'assistive-tools',
    author: {
      id: 'moderator-jackson',
      name: 'Jackson Kibagendi',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Helpful question, Jane. Adaptive utensils, non-slip mats, and simple plate guards can make a big difference during meals. Share what has worked for you!',
      sw: 'Swali zuri, Jane. Vyombo vilivyorekebishwa, zulia lisiloelea, na kinga rahisi za sahani vinaweza kurahisisha muda wa chakula. Shiriki kile kilichokusaidia!',
    },
    createdAt: '2026-02-15T11:18:00Z',
  },

  /*
  |--------------------------------------------------------------------------
  | Ask a Health Professional – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'ahp-1',
    spaceId: 'ask-health-pro',
    author: {
      id: 'moderator-geoffrey',
      name: 'Dr. Geoffrey Mong\'are',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Ask a Health Professional 💡 This is a space to ask questions, get guidance and receive reliable health advice from qualified experts on caregiving and neurological wellness.',
      sw: 'Karibu kwenye Uliza Kwa Mtaalamu wa Afya 💡 Hii ni nafasi ya kuuliza maswali, kupata mwongozo na ushauri wa kuaminika kutoka kwa wataalamu waliyoidhinishwa kuhusu ulezi na ustawi wa kinyurolojia.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },
  
  {
    id: 'ahp-2',
    spaceId: 'ask-health-pro',
    author: {
      id: 'caregiver-simon',
      name: 'Simon',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Dr. Mong’are, what are safe ways to manage my father’s tremors at home?',
      sw: 'Dkt. Mong’are, ni njia zipi salama za kudhibiti mtetemeko wa baba yangu nyumbani?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },
  
  {
    id: 'ahp-3',
    spaceId: 'ask-health-pro',
    author: {
      id: 'moderator-geoffrey',
      name: 'Dr. Geoffrey Mong\'are',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Good question, Simon. Tremor management can include medication adherence, gentle exercises, using weighted utensils, and minimizing stress. Always consult your healthcare provider before changing routines.',
      sw: 'Swali nzuri, Simon. Kudhibiti mtetemeko kunaweza kujumuisha kuchukua dawa ipasavyo, mazoezi mepesi, kutumia vyombo vyenye uzito, na kupunguza msongo. Kila wakati wasiliana na mtoa huduma wa afya kabla ya kubadilisha ratiba.',
    },
    createdAt: '2026-02-12T10:22:00Z',
  },
  
  {
    id: 'ahp-4',
    spaceId: 'ask-health-pro',
    author: {
      id: 'caregiver-janet',
      name: 'Janet',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'My mother has frequent headaches and confusion. Could this be related to her medication?',
      sw: 'Mama yangu ana maumivu ya kichwa mara kwa mara na mkanganyiko. Je, hili linaweza kuwa kutokana na dawa yake?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },
  
  {
    id: 'ahp-5',
    spaceId: 'ask-health-pro',
    author: {
      id: 'moderator-geoffrey',
      name: 'Dr. Geoffrey Mong\'are',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Janet, some medications can cause headaches or confusion. Keep a symptom diary and discuss it with her doctor before making any changes.',
      sw: 'Janet, baadhi ya dawa zinaweza kusababisha maumivu ya kichwa au mkanganyiko. Andika dalili zake katika daftari na jadili na daktari wake kabla ya kufanya mabadiliko yoyote.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },
  
  {
    id: 'ahp-6',
    spaceId: 'ask-health-pro',
    author: {
      id: 'caregiver-ruth',
      name: 'Ruth',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'How can I safely help my father with mobility without causing him discomfort?',
      sw: 'Ninaweza kumsaidia baba yangu kuhamia salama bila kumletea usumbufu vipi?',
    },
    createdAt: '2026-02-15T11:05:00Z',
  },
  
  {
    id: 'ahp-7',
    spaceId: 'ask-health-pro',
    author: {
      id: 'moderator-geoffrey',
      name: 'Dr. Geoffrey Mong\'are',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Ruth, use proper lifting techniques, support devices like walkers, and ensure he wears non-slip shoes. Encourage slow, steady movements and frequent rests.',
      sw: 'Ruth, tumia mbinu sahihi za kuinua, vifaa vya kusaidia kama vile waika, na hakikisha anavaa viatu visivyoelea. Himiza mwendo polepole na wa thabiti pamoja na mapumziko mara kwa mara.',
    },
    createdAt: '2026-02-15T11:18:00Z',
  },
  
  {
    id: 'ahp-8',
    spaceId: 'ask-health-pro',
    author: {
      id: 'caregiver-esther',
      name: 'Esther',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'My brother gets very anxious before appointments. Any tips to calm him down?',
      sw: 'Kaka yangu anakuwa na wasiwasi sana kabla ya miadi. Kuna vidokezo vya kumtuliza?',
    },
    createdAt: '2026-02-16T09:30:00Z',
  },
  
  {
    id: 'ahp-9',
    spaceId: 'ask-health-pro',
    author: {
      id: 'moderator-geoffrey',
      name: 'Dr. Geoffrey Mong\'are',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Esther, practice deep breathing, gentle conversation, and familiar routines before appointments. Positive reinforcement and reassurance can reduce anxiety.',
      sw: 'Esther, fanya pumzi za kina, mazungumzo mepesi, na ratiba za kawaida kabla ya miadi. Kuhimiza na kutoa uhakikisho kunaweza kupunguza wasiwasi.',
    },
    createdAt: '2026-02-16T09:45:00Z',
  },
  
  {
    id: 'ahp-10',
    spaceId: 'ask-health-pro',
    author: {
      id: 'caregiver-mitchell',
      name: 'Mitchell',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Is it normal for my mother to have sudden mood swings after taking her new medication?',
      sw: 'Je, ni kawaida kwa mama yangu kuwa na mabadiliko ya ghafla ya hisia baada ya kutumia dawa mpya?',
    },
    createdAt: '2026-02-16T11:00:00Z',
  },
  
  {
    id: 'ahp-11',
    spaceId: 'ask-health-pro',
    author: {
      id: 'moderator-geoffrey',
      name: 'Dr. Geoffrey Mong\'are',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Mitchell, some medications can cause mood changes. Track symptoms, note timing, and discuss with her doctor to adjust treatment safely.',
      sw: 'Mitchell, baadhi ya dawa zinaweza kusababisha mabadiliko ya hisia. Rekodi dalili, angalia muda wake, na jadili na daktari wake ili kurekebisha matibabu kwa usalama.',
    },
    createdAt: '2026-02-16T11:15:00Z',
  },
  
  /*
  |--------------------------------------------------------------------------
  | Ask a Health Professional – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'cfc-1',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'moderator-phoebe',
      name: 'Dr. Phoebe Achieng',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Caring for the Caregiver 💛 This space is dedicated to supporting your wellbeing, stress management, and self-care while you care for others.',
      sw: 'Karibu kwenye Kujali Mlezi 💛 Nafasi hii imejitolea kusaidia ustawi wako, usimamizi wa msongo, na kujitunza wakati unasaidia wengine.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },
  
  {
    id: 'cfc-2',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'caregiver-wilikister',
      name: 'Wilikister',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Lately I feel exhausted and guilty when I can’t keep up with my caregiving duties. How can I cope?',
      sw: 'Hivi karibuni nimekuwa nimechoka na kujiona na hatia nikishindwa kufuata wajibu wangu wa ulezi. Ninawezaje kushughulikia hili?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },
  
  {
    id: 'cfc-3',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'moderator-phoebe',
      name: 'Dr. Phoebe Achieng',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Wilikister, it’s normal to feel this way. Take small breaks, prioritize tasks, and practice self-compassion. Remember, caring for yourself helps you care for others better.',
      sw: 'Wilikister, ni kawaida kuhisi hivi. Pumzika kidogo, weka vipaumbele vya kazi, na jifunze kujitunza kwa huruma. Kumbuka, kujali wewe mwenyewe kunasaidia zaidi katika kulea wengine.',
    },
    createdAt: '2026-02-12T10:22:00Z',
  },
  
  {
    id: 'cfc-4',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'caregiver-concepta',
      name: 'Concepta',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I often feel anxious before doctor appointments for my patients. Any tips for staying calm?',
      sw: 'Mara nyingi ninahisi wasiwasi kabla ya miadi ya daktari kwa wagonjwa wangu. Kuna vidokezo vya kutulia?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },
  
  {
    id: 'cfc-5',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'moderator-phoebe',
      name: 'Dr. Phoebe Achieng',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Concepta, practice deep breathing, prepare ahead, and have a support person if possible. Familiar routines and positive self-talk can reduce anxiety.',
      sw: 'Concepta, fanya pumzi za kina, jiandae mapema, na kuwa na mtu wa kusaidia ikiwa inawezekana. Ratiba za kawaida na mazungumzo chanya na mwenyewe yanaweza kupunguza wasiwasi.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },
  
  {
    id: 'cfc-6',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'caregiver-moureen',
      name: 'Moureen',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'How can I manage my stress when multiple caregiving responsibilities overlap?',
      sw: 'Ninawezaje kudhibiti msongo wakati majukumu mbalimbali ya ulezi yanapokutana?',
    },
    createdAt: '2026-02-15T11:05:00Z',
  },
  
  {
    id: 'cfc-7',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'moderator-phoebe',
      name: 'Dr. Phoebe Achieng',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Moureen, break tasks into smaller steps, ask for help when needed, and practice mindfulness or short relaxation exercises. This helps reduce overwhelm.',
      sw: 'Moureen, gawanya majukumu kuwa hatua ndogo, omba msaada unapohitaji, na fanya mazoezi mafupi ya kutulia au kufuatilia akili. Hii husaidia kupunguza mzigo.',
    },
    createdAt: '2026-02-15T11:18:00Z',
  },
  
  {
    id: 'cfc-8',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'caregiver-lilian',
      name: 'Lilian',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I feel guilty taking time for myself while my loved one needs constant care. How can I overcome this?',
      sw: 'Ninaona hatia kuchukua muda kwa ajili yangu wakati mpendwa wangu anahitaji huduma ya mara kwa mara. Ninawezaje kushinda hili?',
    },
    createdAt: '2026-02-16T09:30:00Z',
  },
  
  {
    id: 'cfc-9',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'moderator-phoebe',
      name: 'Dr. Phoebe Achieng',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Lilian, self-care is not selfish. Set boundaries, schedule personal time, and remind yourself that taking breaks improves the quality of care you provide.',
      sw: 'Lilian, kujitunza si ubinafsi. Weka mipaka, panga muda wako binafsi, na jikumbushe kuwa kupumzika kunaboresha ubora wa huduma unayotoa.',
    },
    createdAt: '2026-02-16T09:45:00Z',
  },
  
  {
    id: 'cfc-10',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'caregiver-joseph',
      name: 'Joseph',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Sometimes I feel isolated and unsupported while caring for my family. What can I do to feel more connected?',
      sw: 'Mara nyingine ninajiona peke yangu na sina msaada wakati nikiwalea familia yangu. Nifanye nini kujiona nikiwa na uhusiano zaidi?',
    },
    createdAt: '2026-02-16T11:00:00Z',
  },
  
  {
    id: 'cfc-11',
    spaceId: 'caring-for-caregiver',
    author: {
      id: 'moderator-phoebe',
      name: 'Dr. Phoebe Achieng',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Joseph, connect with caregiver support groups, reach out to friends or family, and schedule small social breaks. Sharing your experiences can reduce isolation and increase support.',
      sw: 'Joseph, ungana na makundi ya msaada kwa walezi, wasiliana na marafiki au familia, na panga mapumziko madogo ya kijamii. Kushirikiana uzoefu wako kunaweza kupunguza upweke na kuongeza msaada.',
    },
    createdAt: '2026-02-16T11:15:00Z',
  },

  /*
  |--------------------------------------------------------------------------
  | PWD Peer Circle – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'pwd-1',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'moderator-winny',
      name: "Dr. Winny Ochieng'",
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to PWD Peer Circle 💛 This space is here to support you in navigating daily challenges, emotions, treatment experiences, and self-advocacy. You are not alone here.',
      sw: 'Karibu kwenye PWD Peer Circle 💛 Nafasi hii ipo kukuunga mkono unapokabiliana na changamoto za kila siku, hisia, uzoefu wa matibabu, na kujitetea. Hauko peke yako hapa.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },
  
  {
    id: 'pwd-2',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'pwd-yollo',
      name: 'Yollo',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Lately I feel frustrated with my body. Some days I have energy, other days I can barely function. How do you cope with this unpredictability?',
      sw: 'Hivi karibuni ninahisi kukasirishwa na mwili wangu. Siku zingine nina nguvu, zingine siwezi hata kufanya mambo ya kawaida. Mnashughulikiaje hali hii isiyotabirika?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },
  
  {
    id: 'pwd-3',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'moderator-winny',
      name: "Dr. Winny Ochieng'",
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Yollo, what you’re describing is very common. Try pacing your activities, celebrating small wins, and being gentle with yourself on low-energy days. Your worth is not defined by productivity.',
      sw: 'Yollo, unachosema ni cha kawaida sana. Jaribu kupanga shughuli zako kwa utaratibu, kusherehekea mafanikio madogo, na kujihurumia siku zenye nguvu ndogo. Thamani yako haipimwi kwa uzalishaji.',
    },
    createdAt: '2026-02-12T10:22:00Z',
  },
  
  {
    id: 'pwd-4',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'pwd-dave',
      name: 'Dave',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I get anxious before medical appointments. I worry about what they’ll find or say. Any advice for managing that fear?',
      sw: 'Ninahisi wasiwasi kabla ya miadi ya hospitali. Huwa naogopa watapata au watasema nini. Kuna ushauri wa kudhibiti hofu hiyo?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },
  
  {
    id: 'pwd-5',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'moderator-winny',
      name: "Dr. Winny Ochieng'",
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Dave, consider writing down your concerns beforehand, practicing slow breathing, and bringing someone you trust if possible. Remember, appointments are meant to support you, not judge you.',
      sw: 'Dave, jaribu kuandika maswali yako mapema, fanya pumzi za polepole, na nenda na mtu unayemwamini ikiwezekana. Kumbuka, miadi ipo kukusaidia, si kukuhukumu.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },
  
  {
    id: 'pwd-6',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'pwd-calvins',
      name: 'Calvins',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'How do you deal with people who say “but you don’t look sick”? It makes me feel invisible.',
      sw: 'Mnashughulikiaje watu wanaosema “huonekani mgonjwa”? Hunifanya nijihisi kama sionekani.',
    },
    createdAt: '2026-02-15T11:05:00Z',
  },
  
  {
    id: 'pwd-7',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'moderator-winny',
      name: "Dr. Winny Ochieng'",
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Calvins, that experience can be deeply invalidating. You’re allowed to set boundaries, educate when you have the energy, or simply not explain. Your condition is real regardless of visibility.',
      sw: 'Calvins, hali hiyo inaweza kuumiza sana. Una haki ya kuweka mipaka, kueleza ukiwa na nguvu, au hata kutoeleza. Hali yako ni halisi hata kama haionekani.',
    },
    createdAt: '2026-02-15T11:18:00Z',
  },
  
  {
    id: 'pwd-8',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'pwd-joy',
      name: 'Joy',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Some days I feel emotionally drained from managing symptoms. Is this normal?',
      sw: 'Siku zingine ninahisi nimechoka kihisia kwa sababu ya kudhibiti dalili. Je, hii ni kawaida?',
    },
    createdAt: '2026-02-16T09:30:00Z',
  },
  
  {
    id: 'pwd-9',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'moderator-winny',
      name: "Dr. Winny Ochieng'",
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Joy, yes — it’s completely normal. Living with a condition requires constant adjustment. Rest, emotional support, and self-kindness are essential parts of care.',
      sw: 'Joy, ndio — ni kawaida kabisa. Kuishi na hali ya kiafya kunahitaji kujirekebisha kila mara. Kupumzika, msaada wa kihisia, na kujijali ni sehemu muhimu ya huduma.',
    },
    createdAt: '2026-02-16T09:45:00Z',
  },
  
  {
    id: 'pwd-10',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'pwd-mercy',
      name: 'Mercy',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I sometimes feel alone in this journey, even around family. How can I feel less isolated?',
      sw: 'Wakati mwingine ninajihisi peke yangu katika safari hii hata nikiwa na familia. Ninawezaje kupunguza upweke?',
    },
    createdAt: '2026-02-16T11:00:00Z',
  },
  
  {
    id: 'pwd-11',
    spaceId: 'pwd-peer-circle',
    author: {
      id: 'moderator-winny',
      name: "Dr. Winny Ochieng'",
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Mercy, connecting with peer communities, support groups, or safe spaces like this can help. Sharing your experience often reminds you that others truly understand.',
      sw: 'Mercy, kuungana na jamii za wenzao, makundi ya msaada, au nafasi salama kama hii kunaweza kusaidia. Kushiriki uzoefu wako hukumbusha kuwa wengine wanaelewa kwa kweli.',
    },
    createdAt: '2026-02-16T11:15:00Z',
  },
  
  /*
  |--------------------------------------------------------------------------
  | Living Well & Wellness – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'lww-1',
    spaceId: 'living-well',
    author: {
      id: 'moderator-victor',
      name: 'Dr. Victor Menya',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Living Well & Wellness 🌿 This space focuses on healthy routines, emotional balance, lifestyle adjustments, and small habits that improve quality of life.',
      sw: 'Karibu kwenye Living Well & Wellness 🌿 Nafasi hii inalenga mazoea yenye afya, usawa wa kihisia, mabadiliko ya mtindo wa maisha, na tabia ndogo zinazoboresha ubora wa maisha.',
    },
    createdAt: '2026-02-10T08:30:00Z',
  },
  
  {
    id: 'lww-2',
    spaceId: 'living-well',
    author: {
      id: 'member-francis',
      name: 'Francis',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I struggle with maintaining a consistent sleep routine. My symptoms worsen when I don’t rest well. Any tips?',
      sw: 'Ninapata shida kudumisha ratiba ya usingizi. Dalili zangu huongezeka nisipopumzika vizuri. Kuna vidokezo?',
    },
    createdAt: '2026-02-11T06:45:00Z',
  },
  
  {
    id: 'lww-3',
    spaceId: 'living-well',
    author: {
      id: 'moderator-victor',
      name: 'Dr. Victor Menya',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Francis, try setting a fixed bedtime, reducing screen time before sleep, and creating a calming pre-sleep ritual. Consistency matters more than perfection.',
      sw: 'Francis, jaribu kuweka muda maalum wa kulala, kupunguza matumizi ya simu kabla ya usingizi, na kuwa na utaratibu wa kutulia kabla ya kulala. Uthabiti ni muhimu kuliko ukamilifu.',
    },
    createdAt: '2026-02-11T07:10:00Z',
  },
  
  {
    id: 'lww-4',
    spaceId: 'living-well',
    author: {
      id: 'member-cornelius',
      name: 'Cornelius',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'How do you stay motivated to exercise when fatigue keeps holding you back?',
      sw: 'Mnabaki vipi na motisha ya kufanya mazoezi wakati uchovu unawarudisha nyuma?',
    },
    createdAt: '2026-02-12T10:05:00Z',
  },
  
  {
    id: 'lww-5',
    spaceId: 'living-well',
    author: {
      id: 'moderator-victor',
      name: 'Dr. Victor Menya',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Cornelius, think “gentle movement” instead of intense workouts. Short walks, stretching, or light activity can be beneficial without overwhelming your body.',
      sw: 'Cornelius, fikiria “mwendo wa taratibu” badala ya mazoezi makali. Kutembea kidogo, kunyoosha misuli, au shughuli nyepesi zinaweza kusaidia bila kuuchosha mwili.',
    },
    createdAt: '2026-02-12T10:25:00Z',
  },
  
  {
    id: 'lww-6',
    spaceId: 'living-well',
    author: {
      id: 'member-agatha',
      name: 'Agatha',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I’ve been trying mindfulness but my mind keeps racing. Am I doing it wrong?',
      sw: 'Nimejaribu mindfulness lakini mawazo yangu yanakimbia sana. Je, nafanya vibaya?',
    },
    createdAt: '2026-02-13T14:20:00Z',
  },
  
  {
    id: 'lww-7',
    spaceId: 'living-well',
    author: {
      id: 'moderator-victor',
      name: 'Dr. Victor Menya',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Agatha, not at all. A wandering mind is normal. Mindfulness is about gently returning attention, not forcing stillness.',
      sw: 'Agatha, hapana kabisa. Mawazo kutangatanga ni kawaida. Mindfulness ni kurudisha umakini kwa upole, si kulazimisha utulivu.',
    },
    createdAt: '2026-02-13T14:35:00Z',
  },
  
  {
    id: 'lww-8',
    spaceId: 'living-well',
    author: {
      id: 'member-moses',
      name: 'Moses',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Nutrition feels overwhelming. There’s too much advice online. Where should I start?',
      sw: 'Lishe inanichanganya. Kuna ushauri mwingi sana mtandaoni. Nianzie wapi?',
    },
    createdAt: '2026-02-15T09:10:00Z',
  },
  
  {
    id: 'lww-9',
    spaceId: 'living-well',
    author: {
      id: 'moderator-victor',
      name: 'Dr. Victor Menya',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Moses, start simple: regular meals, hydration, and balanced portions. Sustainable habits are more valuable than drastic changes.',
      sw: 'Moses, anza kwa urahisi: milo ya kawaida, maji ya kutosha, na chakula chenye uwiano. Mazoea endelevu ni bora kuliko mabadiliko makubwa.',
    },
    createdAt: '2026-02-15T09:28:00Z',
  },
  
  {
    id: 'lww-10',
    spaceId: 'living-well',
    author: {
      id: 'member-nancy',
      name: 'Nancy',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'What are small daily habits that genuinely improve wellbeing?',
      sw: 'Ni mazoea gani madogo ya kila siku yanayoweza kuboresha ustawi?',
    },
    createdAt: '2026-02-16T12:00:00Z',
  },
  
  {
    id: 'lww-11',
    spaceId: 'living-well',
    author: {
      id: 'moderator-victor',
      name: 'Dr. Victor Menya',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Nancy, examples include: consistent sleep, gentle movement, moments of rest, social connection, and self-kindness. Small steps build lasting change.',
      sw: 'Nancy, mifano ni: usingizi wa utaratibu, mwendo wa taratibu, muda wa kupumzika, mawasiliano ya kijamii, na kujijali. Hatua ndogo huleta mabadiliko ya kudumu.',
    },
    createdAt: '2026-02-16T12:18:00Z',
  },

  /*
  |--------------------------------------------------------------------------
  | Symptoms & Daily Life – Demo Messages
  |--------------------------------------------------------------------------
  */
  {
    id: 'sdl-1',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'moderator-erastus',
      name: 'Dr. Erastus Seda',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Symptoms & Daily Life 🌱 This space is for sharing real experiences, coping strategies, and everyday adjustments related to symptoms and functioning.',
      sw: 'Karibu kwenye Symptoms & Daily Life 🌱 Nafasi hii ni ya kushiriki uzoefu halisi, mbinu za kukabiliana, na marekebisho ya kila siku yanayohusiana na dalili na maisha ya kawaida.',
    },
    createdAt: '2026-02-10T09:10:00Z',
  },
  
  {
    id: 'sdl-2',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'member-allan',
      name: 'Allan',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Some days my symptoms are unpredictable. It’s hard to plan work or social activities. How do others manage this?',
      sw: 'Siku nyingine dalili zangu hubadilika bila kutarajiwa. Ni vigumu kupanga kazi au shughuli za kijamii. Wengine wanakabiliana vipi na hili?',
    },
    createdAt: '2026-02-11T08:25:00Z',
  },
  
  {
    id: 'sdl-3',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'moderator-erastus',
      name: 'Dr. Erastus Seda',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Allan, flexibility is key. Consider “buffer time,” lighter schedules, and communicating boundaries. Planning with room for adjustment can reduce stress.',
      sw: 'Allan, kubadilika ni muhimu. Fikiria muda wa ziada, ratiba nyepesi, na kuwasiliana mipaka yako. Kupanga kwa nafasi ya marekebisho hupunguza msongo.',
    },
    createdAt: '2026-02-11T08:50:00Z',
  },
  
  {
    id: 'sdl-4',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'member-joyce',
      name: 'Joyce',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Fatigue affects my productivity and mood. I feel guilty resting. Any advice?',
      sw: 'Uchovu huathiri kazi yangu na hisia zangu. Najihisi na hatia nikipumzika. Ushauri wowote?',
    },
    createdAt: '2026-02-12T11:40:00Z',
  },
  
  {
    id: 'sdl-5',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'moderator-erastus',
      name: 'Dr. Erastus Seda',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Joyce, rest is a medical necessity, not a weakness. Try pacing activities and recognizing early signs of exhaustion.',
      sw: 'Joyce, kupumzika ni hitaji la kiafya, si udhaifu. Jaribu kupanga shughuli kwa hatua na kutambua dalili za uchovu mapema.',
    },
    createdAt: '2026-02-12T12:05:00Z',
  },
  
  {
    id: 'sdl-6',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'member-eunice',
      name: 'Eunice',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'My symptoms are invisible, but people assume I’m fine. It’s frustrating.',
      sw: 'Dalili zangu hazionekani, lakini watu hudhani niko sawa. Inakatisha tamaa.',
    },
    createdAt: '2026-02-13T07:30:00Z',
  },
  
  {
    id: 'sdl-7',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'moderator-erastus',
      name: 'Dr. Erastus Seda',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Eunice, that’s a common challenge. Educating close contacts and advocating for your needs can help reduce misunderstanding.',
      sw: 'Eunice, hilo ni changamoto ya kawaida. Kuelimisha watu wa karibu na kutetea mahitaji yako kunaweza kusaidia.',
    },
    createdAt: '2026-02-13T07:55:00Z',
  },
  
  {
    id: 'sdl-8',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'member-lavender',
      name: 'Lavender',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Stress seems to worsen my symptoms. How can I break that cycle?',
      sw: 'Msongo huonekana kuongeza dalili zangu. Ninawezaje kuvunja mzunguko huo?',
    },
    createdAt: '2026-02-15T10:15:00Z',
  },
  
  {
    id: 'sdl-9',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'moderator-erastus',
      name: 'Dr. Erastus Seda',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Lavender, explore stress-reduction techniques like breathing exercises, structured routines, and gentle relaxation practices.',
      sw: 'Lavender, jaribu mbinu za kupunguza msongo kama mazoezi ya pumzi, ratiba thabiti, na mbinu za kutulia.',
    },
    createdAt: '2026-02-15T10:35:00Z',
  },
  
  {
    id: 'sdl-10',
    spaceId: 'symptoms-daily-life',
    author: {
      id: 'member-immaculate',
      name: 'Immaculate',
      role: 'pwd',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'What small adjustments have helped others function better day-to-day?',
      sw: 'Ni marekebisho gani madogo yamewasaidia wengine kuishi vizuri kila siku?',
    },
    createdAt: '2026-02-16T09:50:00Z',
  },
  
];
