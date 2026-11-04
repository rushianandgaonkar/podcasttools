export interface FAQItem {
  question: string;
  answer: string;
}

export type ToolFaqsRecord = Record<string, FAQItem[]>;

