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
  }
  
  
];
