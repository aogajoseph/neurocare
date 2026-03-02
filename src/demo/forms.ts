export const questionnaireForms = [
  {
    slug: 'community-needs',
    fields: [
      {
        id: 'county',
        label: 'County of Residence',
        type: 'select',
        options: ['Nairobi', 'Kiambu', 'Machakos', 'Kisumu', 'Other'],
      },
      {
        id: 'ageGroup',
        label: 'Age Group',
        type: 'select',
        options: ['0-12', '13-18', '19-35', '36-60', '60+'],
      },
      {
        id: 'condition',
        label: 'Primary Neurological Condition',
        type: 'select',
        options: ['Spina Bifida', 'Epilepsy', 'Stroke', 'Cerebral Plasy', 'Other'],
      },
      {
        id: 'mobility',
        label: 'Mobility Level',
        type: 'select',
        options: ['Independent', 'Assisted', 'Wheelchair', 'Bedridden'],
      },
      {
        id: 'assistiveDevices',
        label: 'Do you have access to Assistive Devices?',
        type: 'select',
        options: ['Yes', 'No'],
      },
      {
        id: 'biggestChallenge',
        label: 'What\'s your Current Biggest Challenge',
        type: 'multi-select',
        options: ['Transport', 'Medication cost', 'Therapy Access', 'Stigma', 'Education Access'],
      },
    ],
  },

  {
    slug: 'caregiver-capacity',
    fields: [
      {
        id: 'relationship',
        label: 'Your Relationship to Person with Condition',
        type: 'select',
        options: ['Parent', 'Sibling', 'Spouse', 'Guardian', 'Other'],
      },
      {
        id: 'hoursPerDay',
        label: 'Hours of Care Per Day',
        type: 'number',
      },
      {
        id: 'stressLevel',
        label: 'Emotional Stress Level (1-5)',
        type: 'rating',
      },
      {
        id: 'financialStrain',
        label: 'Financial Strain Level (1-5)',
        type: 'rating',
      },
      {
        id: 'supportGroup',
        label: 'Do you have access to Support Groups?',
        type: 'select',
        options: ['Yes', 'No'],
      },
      {
        id: 'trainingInterest',
        label: 'Would you attend Training?',
        type: 'select',
        options: ['Yes', 'No'],
      },
      {
        id: 'trainingNeeds',
        label: 'What areas do you need training in?',
        type: 'multi-select',
        options: ['First Aid', 'Physiotherapy Basics', 'Mental Health', 'Assistive Devices Use'],
      },
    ],
  },
]