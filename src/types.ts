/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: 'computer-vision' | 'deep-learning' | 're-id' | 'cross-modal' | 'nlp' | 'other';
  abstract: string;
  bibtex: string;
  doi?: string;
  paperUrl?: string;
  codeUrl?: string;
  tags: string[];
}

export interface Course {
  code: string;
  title: string;
  semester: string;
  description: string;
  syllabus: string[];
  level: 'Graduate' | 'Postgraduate' | 'Undergraduate';
  enrollmentApprox: number;
  rating: number; // e.g. 4.8
  keywords: string[];
}

export interface Book {
  id: string;
  title: string;
  authors: string;
  publisher: string;
  year: number;
  description: string;
  type: 'Book' | 'Book Chapter' | 'Monograph';
  link?: string;
  doi?: string;
  coverColor: string; // Tailwind gradient/color class for placeholder
}

export interface AcademicActivity {
  id: string;
  role: string;
  venue: string;
  year: string;
  category: 'editor' | 'program-committee' | 'reviewer' | 'invited-talk' | 'mentorship';
  details?: string;
}

export interface LabMember {
  name: string;
  role: 'Ph.D. Student' | 'Master Student' | 'Postdoc' | 'Alumni';
  researchTopic: string;
  year: string;
  avatarEmoji: string;
}
