
import { Heart, Brain, Stethoscope, Baby, Ambulance, Bone } from 'lucide-react';

export const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Specialized care for heart conditions with advanced diagnostic and treatment options.',
    icon: Heart,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    services: [
      'Echocardiography',
      'Electrocardiogram (ECG)',
      'Cardiac Catheterization',
      'Coronary Angioplasty',
      'Pacemaker Implantation',
      'Heart Failure Management'
    ],
    technology: 'State-of-the-art cardiac imaging, 3D echocardiography, and advanced catheterization lab.',
    patientInfo: 'Patients should bring all previous cardiac records and a list of current medications for their appointment.'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Expert treatment for disorders of the nervous system, brain and spinal cord.',
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
    services: [
      'Neurological Examinations',
      'Electroencephalogram (EEG)',
      'Electromyography (EMG)',
      'Stroke Management',
      'Epilepsy Treatment',
      'Headache & Migraine Management'
    ],
    technology: 'Advanced neuroimaging, EEG monitoring, and neurodiagnostic equipment.',
    patientInfo: 'For neurological evaluations, please avoid caffeine for 24 hours before your appointment if possible.'
  },
  {
    id: 'internal-medicine',
    name: 'Internal Medicine',
    description: 'Comprehensive care for adults focusing on prevention, diagnosis and treatment.',
    icon: Stethoscope,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    services: [
      'Preventive Healthcare',
      'Chronic Disease Management',
      'Geriatric Care',
      'Diagnostic Services',
      'Immunizations',
      'Health Screenings'
    ],
    technology: 'Comprehensive diagnostic testing and integrated electronic medical records.',
    patientInfo: 'Annual check-ups are recommended for all adults. Please bring your immunization records.'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Specialized healthcare for infants, children and adolescents.',
    icon: Baby,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    services: [
      'Well-Child Check-ups',
      'Immunizations',
      'Growth & Development Monitoring',
      'Pediatric Consultations',
      'Adolescent Medicine',
      'Pediatric Emergencies'
    ],
    technology: 'Child-friendly examination rooms and specialized pediatric equipment.',
    patientInfo: 'Please bring your child\'s immunization records and growth charts to appointments.'
  },
  {
    id: 'emergency',
    name: 'Emergency',
    description: '24/7 emergency care for life-threatening conditions with rapid response teams.',
    icon: Ambulance,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    services: [
      'Trauma Care',
      'Critical Care',
      'Emergency Surgery',
      'Cardiac Emergencies',
      'Stroke Management',
      'Pediatric Emergencies'
    ],
    technology: 'Fully equipped trauma bays, advanced life support equipment, and rapid diagnostic imaging.',
    patientInfo: 'Our emergency department is open 24/7. For life-threatening emergencies, call 911.'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Specialized care for bones, joints, ligaments, tendons, and muscles.',
    icon: Bone,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
    services: [
      'Joint Replacement',
      'Fracture Care',
      'Sports Medicine',
      'Spine Surgery',
      'Arthroscopy',
      'Physical Rehabilitation'
    ],
    technology: 'Advanced imaging, minimally invasive surgical techniques, and rehabilitation facilities.',
    patientInfo: 'Please wear comfortable clothing to orthopedic appointments for easier examination.'
  }
];
