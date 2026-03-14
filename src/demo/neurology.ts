// Demo content for Neurology page with English and Swahili translations
import { VIDEOS } from '@/assets/videos';

export const neurologyData = {
  hero: {
    title: { en: "Understanding Neurology", sw: "Kuelewa Neurologia" },
    subtitle: {
      en: "A guide to understanding the brain and the nervous system.",
      sw: "Mwongozo wa kuelewa ubongo na muundo wa neva.",
    },
    image: require('../../assets/images/neurology-hero.png'),
  },
  sections: [
    {
      id: 'intro',
      type: 'text',
      title: { en: 'What is Neurology?', sw: 'Neurologia ni Nini?' },
      content: {
        en: 'Neurology is the branch of medicine that focuses on the brain, spinal cord, nerves and muscles. These systems control how we move, think, feel, speak and interact with the world.',
        sw: 'Neurologia ni tawi la tiba linalojikita kwenye ubongo, uti wa mgongo, neva na misuli. Mifumo hii inasimamia jinsi tunavyosogea, kufikiria, kuhisi, kuzungumza na kuingiliana na dunia.',
      },
    },
    {
      id: 'conditions',
      type: 'cardList',
      title: { en: 'Popular Neurological Conditions', sw: 'Hali Maarufu za Neurologia' },
      cards: [
        {
          slug: 'stroke',
          title: { en: 'Stroke', sw: 'Kiharusi' },
          description: {
            en: 'Sudden interruption of blood flow to the brain.',
            sw: 'Kukatizwa kwa ghafla kwa mtiririko wa damu kwenda kwenye ubongo.',
          },
          image: require('../../assets/images/stroke.png'),
        },
        {
          slug: 'epilepsy',
          title: { en: 'Epilepsy', sw: 'Kiharusi cha Ubongo' },
          description: {
            en: 'A disorder causing recurrent seizures.',
            sw: 'Hali inayosababisha kifafa kinachojirudia.',
          },
          image: require('../../assets/images/epilepsy.jpg'),
        },
        {
          slug: 'parkinsons',
          title: { en: 'Parkinson’s Disease', sw: 'Ugonjwa wa Parkinson' },
          description: {
            en: 'Affects movement, causing tremors and stiffness.',
            sw: 'Unaathiri mwendo, ukisababisha kutetemeka na ukimya wa misuli.',
          },
          image: require('../../assets/images/parkinsons.jpg'),
        },
        {
          slug: 'migraine',
          title: { en: 'Migraine', sw: 'Kichwa Kuuma' },
          description: {
            en: 'Intense, recurring headaches with nausea and sensitivity.',
            sw: 'Maumivu makali ya kichwa yanayojirudia pamoja na kichefuchefu na hisia za mwangaza.',
          },
          image: require('../../assets/images/migraine.png'),
        },
        {
          slug: 'dementia',
          title: { en: 'Dementia', sw: 'Ukosefu wa Akili' },
          description: {
            en: 'Conditions affecting memory and daily thinking.',
            sw: 'Hali zinazohusisha kumbukumbu, na ufahamu wa kila siku.',
          },
          image: require('../../assets/images/dementia.jpg'),
        },
      ],
    },
    {
      id: 'neurologists',
      type: 'text',
      title: { en: 'What Neurologists Do', sw: 'Kazi za Wataalamu wa Neurologia' },
      content: {
        en: 'Neurologists diagnose and manage conditions such as stroke, epilepsy, dementia, Parkinson’s disease, multiple sclerosis, migraines and nerve disorders. Treatment often involves medication, rehabilitation and long-term care planning.',
        sw: 'Wataalamu wa neurologia hugundua na kusimamia hali kama kiharusi, kifafa, ukosefu wa akili, ugonjwa wa Parkinson, sklerosi nyingi, maumivu ya kichwa na matatizo ya neva. Matibabu mara nyingi huhusisha dawa, urejeshaji na mipango ya huduma ya muda mrefu.',
      },
    },
    {
      id: 'livingWith',
      type: 'video',
      title: { en: 'Living Well with Neurological Conditions', sw: 'Kuishi na Hali za Neurologia' },
      videoUrl: VIDEOS.livingWell,
      description: {
        en: 'Many people live full and meaningful lives with neurological conditions. Support from healthcare providers, caregivers and access to accurate information plays a vital role in improving quality of life.',
        sw: 'Watu wengi wanaishi maisha kamili na yenye maana pamoja na hali za neurologia. Msaada kutoka kwa watoa huduma za afya, walezi na upatikanaji wa taarifa sahihi unachangia kuboresha ubora wa maisha.',
      },
    },
    {
      id: 'resources',
      type: 'links',
      title: { en: 'External Resources', sw: 'Rasilimali za Nje' },
      links: [
        {
          label: { en: 'Neurology - World Health Organization', sw: 'Neurologia - Shirika la Afya Duniani' },
          url: 'https://www.who.int/health-topics/neurology',
        },
        {
          label: { en: 'National Institute of Neurological Disorders', sw: 'Taasisi ya Kitaifa ya Magonjwa ya Neurologia' },
          url: 'https://www.ninds.nih.gov/',
        },
      ],
    },
  ],
};
