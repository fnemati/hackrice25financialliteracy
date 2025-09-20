export interface ModuleDetail {
  id: number;
  title: string;
  introduction: string;
  sections: ModuleSection[];
}

// Discriminated union for sections
export type ModuleSection = 
  | TextSection
  | VideoSection
  | QuizSection;

export interface BaseSection {
  type: 'text' | 'video' | 'quiz';
  duration: number; // in minutes
}

export interface TextSection extends BaseSection {
  type: 'text';
  textContent?: string; // optional HTML
}

export interface VideoSection extends BaseSection {
  type: 'video';
  videoContent?: string; // optional HTML
}

export interface QuizSection extends BaseSection {
  type: 'quiz';
  quizContent?: QuizContent; // optional quiz structure
}

export interface QuizContent {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  choices: string[];
  answer: number; // index of correct choice
}