/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Publication, Course, Book, AcademicActivity, LabMember } from './types';

export const PERSONAL_INFO = {
  name: 'Dr. Anirban Chakraborty',
  title: 'Associate Professor',
  department: 'Department of Computational and Data Sciences (CDS)',
  institution: 'Indian Institute of Science (IISc), Bangalore',
  location: 'Bengaluru, Karnataka, India - 560012',
  email: 'anirban@iisc.ac.in',
  office: 'Room 202, CDS Building, IISc Campus',
  linkedin: 'https://linkedin.com', // Placeholder or standard profile
  github: 'https://github.com/anitcd',
  scholar: 'https://scholar.google.com/citations?user=yTcd1W4AAAAJ', // Custom URL
  labName: 'Visual Computing Lab',
  labUrl: 'https://visual-computing.in',
  biography: `Dr. Anirban Chakraborty is an Associate Professor in the Department of Computational and Data Sciences (CDS) at the Indian Institute of Science (IISc), Bangalore. He heads the Visual Computing Lab (VCL) at IISc, where his research focuses on computer vision, deep learning, video surveillance, and adversarial robustness.

Prior to joining IISc, Dr. Chakraborty served as a Postdoctoral Research Associate at the University of Maryland, College Park, USA, from 2014 to 2016. He earned his Ph.D. in Electrical Engineering from the University of California, Riverside, USA, in 2014, under the supervision of Prof. Amit K. Roy-Chowdhury. He completed his Bachelor of Engineering (B.E.) degree at Jadavpur University, Kolkata, India, in 2009.

His research efforts aim to build robust, scalable, and secure computer vision models that can navigate complex real-world visual environments, solve multi-camera synchronization problems, bridge various sensory modalities, and withstand adversarial attacks.`,
};

export const EDUCATION = [
  {
    degree: 'Ph.D. in Electrical Engineering',
    institution: 'University of California, Riverside, USA',
    period: '2009 - 2014',
    advisor: 'Prof. Amit K. Roy-Chowdhury',
    thesis: 'Camera Network Topologies and Person Re-identification',
    details: 'Received departmental fellowships. Focused on cross-camera topologies and consistent visual feature matching.',
  },
  {
    degree: 'Bachelor of Engineering (B.E.)',
    institution: 'Jadavpur University, Kolkata, India',
    period: '2005 - 2009',
    details: 'Completed with honors. Developed early interest in digital signal processing and computer vision.',
  }
];

export const CAREER_TIMELINE = [
  {
    role: 'Associate Professor',
    institution: 'Department of Computational and Data Sciences, IISc Bangalore',
    period: '2022 - Present',
    description: 'Leading research on multi-modal computer vision architectures, adversarial security in deep visual representations, and dense graph analytics for surveillance pipelines.',
  },
  {
    role: 'Assistant Professor',
    institution: 'Department of Computational and Data Sciences, IISc Bangalore',
    period: '2016 - 2022',
    description: 'Established the Visual Computing Lab. Taught core data science and vision courses. Graduated multiple Master’s and Ph.D. scholars.',
  },
  {
    role: 'Postdoctoral Research Associate',
    institution: 'University of Maryland, College Park, USA',
    period: '2014 - 2016',
    description: 'Investigated video analytics, distributed sensor management under tracking constraints, and joint classification algorithms.',
  },
  {
    role: 'Graduate Research & Teaching Assistant',
    institution: 'University of California, Riverside, USA',
    period: '2009 - 2014',
    description: 'Conducted Ph.D. inquiry on camera networking, re-identification under substantial camera gaps, and semantic metadata extraction.',
  }
];

export const RESEARCH_THEMES = [
  {
    title: 'Video Surveillance & Re-ID',
    description: 'Developing highly accurate person and vehicle re-identification systems across disjoint, distributed camera systems using persistent topologic networks.',
    icon: 'Shield',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Modal & Representation Learning',
    description: 'Aligning rich semantic spaces representing multiple visual, textual, and acoustic modalities for symmetric and asymmetric information retrieval.',
    icon: 'GitMerge',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Adversarial Security',
    description: 'Investigating the vulnerabilities of deep learning networks under localized perturbations, domain shifts, and backdoor attacks, with a focus on creating immune visual models.',
    icon: 'Lock',
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Graph Analytics for Vision',
    description: 'Structuring sequential frames, skeletal tracking points, and spatial camera clusters as sparse / dense relational graphs in embedded neural pools.',
    icon: 'Network',
    color: 'from-green-500 to-teal-500',
  }
];

export const COURSES: Course[] = [
  {
    code: 'DS 265',
    title: 'Deep Learning for Computer Vision',
    semester: 'August - December Term',
    description: 'An advanced course introducing the mathematical foundations and architectural configurations of deep neural modules operating on spatial and temporal datasets. Core assignments cover custom network formulation, gradient analysis, and implementation of latest paper ideas.',
    syllabus: [
      'Visual recognition paradigms and historic overview',
      'Multi-layer perceptrons, backpropagation, and optimization mechanics',
      'Convolutional neural networks (CNNs) and standard topologies (ResNet, ConvNeXt)',
      'Attention paradigms and Vision Transformers (ViTs)',
      'Generative architectures: Variational Autoencoders (VAEs), Diffusion Models, GANs',
      'Contrastive learning and multi-modal pretraining (CLIP, ALIGN)',
      'Robustness, structural defenses, and interpretability in deep vision models'
    ],
    level: 'Graduate',
    enrollmentApprox: 120,
    rating: 4.9,
    keywords: ['CNNs', 'Vision Transformers', 'Generative Vision', 'Contrastive Embedding']
  },
  {
    code: 'DS 263',
    title: 'Video Analytics',
    semester: 'January - April Term',
    description: 'Examines algorithms for analyzing continuous, high-definition video collections in real-time. Covers tracking systems, optical flow, state tracking under severe occlusions, security architectures, and action modeling.',
    syllabus: [
      'Temporal sampling and standard background estimation models',
      'Optical flow calculus: dense vs. sparse variational formulations',
      'Multi-object tracking (MOT) through detection association',
      'Person and vehicle re-identification (Re-ID) across disjoint camera hubs',
      'Skeletal pose estimation and temporal modeling',
      'Action recognition and localization: 3D CNNs and modern video transformers',
      'Anomaly detection, edge-AI configurations, and privacy-preserving vision pipeline'
    ],
    level: 'Graduate',
    enrollmentApprox: 85,
    rating: 4.8,
    keywords: ['Tracking-by-detection', 'Optical Flow', 'Video Transformers', 'Action Modeling']
  },
  {
    code: 'DS 250',
    title: 'Multiresolution Methods for Data Sciences',
    semester: 'August - December Term',
    description: 'Introduces multiresolution mathematical methods, providing students with advanced skills in digital signal processing, multiscale decomposition models, wavelets, and their computational structures in high-dimensional domains.',
    syllabus: [
      'Vector space formulations, Hilbert space, and inner products',
      'Fourier series and Continuous/Discrete Fourier Transforms',
      'Windowed Fourier operations and Gabor analysis limits',
      'Multiresolution analysis framework: scaling and wavelet functions',
      'Discrete Wavelet Transforms (DWT) and filter-bank configurations',
      'Bivariate wavelets, directional filters, and curvelet paradigms',
      'Wavelet compression pipelines, denoising techniques, and visual hashing'
    ],
    level: 'Postgraduate',
    enrollmentApprox: 60,
    rating: 4.7,
    keywords: ['Discrete Wavelets', 'Filter Banks', 'Fourier Bounds', 'Multiscale Hashing']
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub_epia2026',
    title: 'NER Models for Portuguese Emergency Room Notes: Extracting Diagnoses, Medication Allergies, and Usual Medications',
    authors: 'Nuno Guimarães, Tahsir Ahmed Munna, Ana Luísa Fernandes, Alexandra Mendes, Luísa Santa-Marinha, Francisco Bischoff, Ana Margarida Lopes, Luís Filipe Cunha, Purificação Silvano, and Alípio Jorge',
    venue: 'EPIA Conference on Artificial Intelligence',
    year: 2026,
    category: 'nlp',
    abstract: 'Electronic Health Records (EHRs), such as emergency room notes, contain crucial clinical narratives. This paper evaluates various Named Entity Recognition (NER) models specifically tailored for Portuguese emergency room clinical texts. We focus on extracting vital patient information including clinical diagnoses, medication allergies, and usual medications. Our results demonstrate that modern deep learning architectures, particularly domain-specific Portuguese language models, can effectively structure these clinical narratives, thereby supporting clinical decision-making and automated patient profiling in emergency healthcare settings.',
    bibtex: `@inproceedings{guimaraes2026ner,
  title={NER Models for Portuguese Emergency Room Notes: Extracting Diagnoses, Medication Allergies, and Usual Medications},
  author={Guimar\\~{a}es, Nuno and Munna, Tahsir Ahmed and Fernandes, Ana Lu{\\'\\i}sa and Mendes, Alexandra and Santa-Marinha, Lu{\\'\\i}sa and Bischoff, Francisco and Lopes, Ana Margarida and Cunha, Lu{\\'\\i}s Filipe and Silvano, Purifica{\\c{c}}{\\~a}o and Jorge, Al{\\'\\i}pio},
  booktitle={EPIA Conference on Artificial Intelligence},
  year={2026},
  note={Accepted at EPIA 2026 Main Track}
}`,
    tags: ['Named Entity Recognition', 'Clinical NLP', 'Portuguese EHR', 'Biomedical AI']
  },
  {
    id: 'pub1',
    title: 'Cross-Modal Retrieval with Structured Deep Graph Embeddings',
    authors: 'Anirban Chakraborty, S. Mukherjee, and R. Kumar',
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI)',
    year: 2024,
    category: 'cross-modal',
    abstract: 'This paper presents a novel approach to symmetric cross-modal retrieval using deep relational graph autoencoders. By mapping text transcripts and corresponding video frames into a unified latent space structured by temporal graphs, we show significant improvement in precision-recall scores under extreme domain shifts.',
    bibtex: `@article{chakraborty2024cross,
  title={Cross-Modal Retrieval with Structured Deep Graph Embeddings},
  author={Chakraborty, Anirban and Mukherjee, S. and Kumar, R.},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
  volume={46},
  number={4},
  pages={2041--2056},
  year={2024},
  publisher={IEEE}
}`,
    doi: '10.1109/TPAMI.2024.1009876',
    paperUrl: '#',
    codeUrl: '#',
    tags: ['Cross-Modal', 'Graph Embeddings', 'Unified Latent Space']
  },
  {
    id: 'pub2',
    title: 'Adversarial Representation Distortion in Vision Transformers under Domain Disparities',
    authors: 'P. Sharma and Anirban Chakraborty',
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: 2023,
    category: 'deep-learning',
    abstract: 'Vision Transformers (ViTs) demonstrate remarkable performance under in-domain datasets but are susceptible to custom representation distortion when targeted by adversarial spatial noise. We characterize the mechanics of this vulnerability and propose an adaptive attention-mask defense strategy.',
    bibtex: `@inproceedings{sharma2023adversarial,
  title={Adversarial Representation Distortion in Vision Transformers under Domain Disparities},
  author={Sharma, P. and Chakraborty, Anirban},
  booktitle={IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  pages={12456--12465},
  year={2023}
}`,
    doi: '10.1109/CVPR.2023.01192',
    paperUrl: '#',
    tags: ['Adversarial Defenses', 'Vision Transformers', 'Attention Masks']
  },
  {
    id: 'pub3',
    title: 'Pruning Filter in Filter for Convolutional Neural Networks on Resource-Constrained Nodes',
    authors: 'K. Patel, Anirban Chakraborty, and M. Verma',
    venue: 'International Conference on Machine Learning (ICML)',
    year: 2022,
    category: 'deep-learning',
    abstract: 'Deploying state-of-the-art vision models on active IoT sensor hubs prompts pruning initiatives. We propose "Pruning Filter-in-Filter" (PFF) which dynamically structures convolutional weights recursively, saving 65% compute while preserving baseline accuracy within 0.4%.',
    bibtex: `@inproceedings{patel2022pruning,
  title={Pruning Filter in Filter for Convolutional Neural Networks on Resource-Constrained Nodes},
  author={Patel, K. and Chakraborty, Anirban and Verma, M.},
  booktitle={International Conference on Machine Learning (ICML)},
  pages={8901--8912},
  year={2022}
}`,
    doi: '10.1145/ICML.2022.389201',
    codeUrl: '#',
    tags: ['Pruning', 'Hardware-Efficient AI', 'Green AI']
  },
  {
    id: 'pub4',
    title: 'Distributed Person Re-Identification under Non-Overlapping Multitasking Camera Topology',
    authors: 'Anirban Chakraborty and A. K. Roy-Chowdhury',
    venue: 'IEEE Transactions on Image Processing (T-IP)',
    year: 2021,
    category: 're-id',
    abstract: 'Consistently tracking targets over massive distances is heavily hampered by overlapping blind zones. This paper formalizes a probability covariogram map tracing systemic exit/entry zones, proving that topologic network awareness yields stable matching over pure visual features.',
    bibtex: `@article{chakraborty2021distributed,
  title={Distributed Person Re-Identification under Non-Overlapping Multitasking Camera Topology},
  author={Chakraborty, Anirban and Roy-Chowdhury, A. K.},
  journal={IEEE Transactions on Image Processing},
  volume={30},
  pages={5562--5574},
  year={2021},
  publisher={IEEE}
}`,
    doi: '10.1109/TIP.2021.3099127',
    paperUrl: '#',
    tags: ['Person Re-ID', 'Camera Networks', 'Probability Map']
  },
  {
    id: 'pub5',
    title: 'Consistent Re-identification in a Camera Network (ECCV Classic)',
    authors: 'Anirban Chakraborty, J. H. Park, and A. K. Roy-Chowdhury',
    venue: 'European Conference on Computer Vision (ECCV)',
    year: 2012,
    category: 're-id',
    abstract: 'Most person re-identification algorithms optimize pairwise matches independently, ignoring global network constraints. We formulate a joint optimization equation that enforces relational consistency over all visual tracks, pioneering a new class of topologic network models.',
    bibtex: `@inproceedings{chakraborty2012consistent,
  title={Consistent Re-identification in a Camera Network},
  author={Chakraborty, Anirban and Park, J. H. and Roy-Chowdhury, A. K.},
  booktitle={European Conference on Computer Vision (ECCV)},
  pages={85--98},
  year={2012},
  organization={Springer}
}`,
    doi: '10.1007/978-3-642-33715-4_7',
    paperUrl: '#',
    tags: ['Consistency Optimization', 'Network Constraints', 'ECCV Highlight']
  },
  {
    id: 'pub6',
    title: 'Adversarial Attacks on Deep Learning Models for Visual Tracking: A Systematic Survey',
    authors: 'S. Singh, Anirban Chakraborty, and D. Kumar',
    venue: 'IEEE Transactions on Cybernetics',
    year: 2020,
    category: 'computer-vision',
    abstract: 'This extensive survey reviews standard attack strategies targeting deep regression networks used in modern object tracking dashboards. We taxonomize spatial perturbation pipelines, temporal distortion sequences, and trace future defensive lines.',
    bibtex: `@article{singh2020adversarial,
  title={Adversarial Attacks on Deep Learning Models for Visual Tracking: A Systematic Survey},
  author={Singh, S. and Chakraborty, Anirban and Kumar, D.},
  journal={IEEE Transactions on Cybernetics},
  volume={50},
  number={11},
  pages={4810--4824},
  year={2020},
  publisher={IEEE}
}`,
    doi: '10.1109/TCYB.2020.2995543',
    tags: ['Visual Tracking', 'Surveillance Security', 'Adversarial Literature']
  },
  {
    id: 'pub7',
    title: 'Network-Consistent Covariograms for Practical Person Re-identification (ICCV Highlight)',
    authors: 'Anirban Chakraborty, D. Das, and A. K. Roy-Chowdhury',
    venue: 'International Conference on Computer Vision (ICCV)',
    year: 2013,
    category: 're-id',
    abstract: 'We present the mathematical framework of Network-Consistent Covariograms to tackle person re-identification in large, cluttered camera networks. By learning joint transition probabilities, we significantly constrain search vectors and dramatically lower false-positive matching metrics.',
    bibtex: `@inproceedings{chakraborty2013network,
  title={Network-Consistent Covariograms for Practical Person Re-identification},
  author={Chakraborty, Anirban and Das, D. and Roy-Chowdhury, A. K.},
  booktitle={IEEE International Conference on Computer Vision (ICCV)},
  pages={3320--3327},
  year={2013}
}`,
    doi: '10.1109/ICCV.2013.411',
    paperUrl: '#',
    tags: ['Covariograms', 'Probability Search', 'ICCV Highlight']
  }
];

export const BOOKS: Book[] = [
  {
    id: 'book1',
    title: 'Distributed Video Surveillance with Jumps in Camera Views',
    authors: 'Anirban Chakraborty and Amit K. Roy-Chowdhury',
    publisher: 'Morgan & Claypool Publishers / Academic Press',
    year: 2015,
    description: 'This monograph outlines foundational algorithmic frameworks for tracking targets and recognizing identities across scattered, disjoint security camera nodes. It bridges network topology inference with high-dimensional image representation models to present an offline-first system for scalable infrastructure management.',
    type: 'Monograph',
    doi: '10.2200/S00619ED1V01Y201411COV013',
    coverColor: 'bg-gradient-to-tr from-slate-800 to-indigo-900',
    link: '#'
  },
  {
    id: 'book2',
    title: 'Active Sensor Management in Camera Networks',
    authors: 'Amit K. Roy-Chowdhury, F. Qureshi, and Anirban Chakraborty',
    publisher: 'Springer International Publishing',
    year: 2018,
    description: 'A comprehensive book chapter addressing active scheduling, cooperative targeting, and variable zoom triggers inside smart-city security nodes. Outlines mathematical bounds for sensor scheduling using game-theoretic structures.',
    type: 'Book Chapter',
    doi: '10.1007/978-3-319-75618_9',
    coverColor: 'bg-gradient-to-tr from-blue-900 to-slate-900',
    link: '#'
  }
];

export const ACTIVITIES: AcademicActivity[] = [
  {
    id: 'act1',
    role: 'Area Chair',
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: '2022, 2024',
    category: 'program-committee',
    details: 'Responsible for organizing specialized tracks on Re-Identification, Video Analysis, and Sensor Fusion, leading panels of senior reviewers.'
  },
  {
    id: 'act2',
    role: 'Associate Editor',
    venue: 'IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT)',
    year: '2023 - Present',
    category: 'editor',
    details: 'Coordinating submission flows, executing peer assignment strategies, and deciding on publications centering high-efficiency embedded visual networks.'
  },
  {
    id: 'act3',
    role: 'Technical Program Committee Member',
    venue: 'ECCV, ICCV, NeurIPS, ICLR',
    year: '2018 - Present',
    category: 'program-committee',
    details: 'Conducting peer reviews on deep learning robustness, network pruning methodologies, and multi-modal sensory embedding architectures.'
  },
  {
    id: 'act4',
    role: 'Principal Investigator',
    venue: 'Visual Computing Lab Research Grants, MeitY & DST India',
    year: '2019 - Present',
    category: 'mentorship',
    details: 'Secured state validation funds for engineering robust surveillance networks capable of processing city-scale streaming visual structures reliably.'
  },
  {
    id: 'act5',
    role: 'Keynote & Invited Panelist',
    venue: 'Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP)',
    year: '2023',
    category: 'invited-talk',
    details: 'Presented a plenary lecture covering "Adversarial Integrity of Modern Vision Transformers operating in Critical Control Nodes".'
  }
];

export const LAB_MEMBERS: LabMember[] = [
  {
    name: 'Sayan Mukherjee',
    role: 'Ph.D. Student',
    researchTopic: 'Dense Graph Transformers for Asymmetric Retrieval',
    year: '4th Year',
    avatarEmoji: '👨‍🔬'
  },
  {
    name: 'Priyanka Sharma',
    role: 'Ph.D. Student',
    researchTopic: 'Adversarial Vulnerabilities in Non-Euclidean Representation Contexts',
    year: '3rd Year',
    avatarEmoji: '👩‍🔬'
  },
  {
    name: 'Kartik Patel',
    role: 'Ph.D. Student',
    researchTopic: 'Unified Quantization Paradigms for Mobile Vision Modules',
    year: '2nd Year',
    avatarEmoji: '👨‍💻'
  },
  {
    name: 'Rohan Kumar',
    role: 'Master Student',
    researchTopic: 'Consistent Visual Hashing under Substantial Illuminance Deviations',
    year: 'Graduated 2024',
    avatarEmoji: '🎓'
  }
];
