'use client';
import { FAQAccordion } from '@/components/blog/ui/FAQAccordion';
import { FaqAbout } from '@/Data/Faqs/FaqPsiqfly';

const items = FaqAbout.map(f => ({ q: f.question, a: f.answer }));

export const FaqPsiqfly = () => (
  <FAQAccordion title="Preguntas frecuentes" items={items} />
);