'use client';
import React from 'react';
import { FaqItem } from "@/components/Faqs/FaqItem";

export const FAQAccordion = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-12 border-t pt-10">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">{title}</h2>
      <div>
        {items.map((item, i) => (
          <FaqItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  );
};