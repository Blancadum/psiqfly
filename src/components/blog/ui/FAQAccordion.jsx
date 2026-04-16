'use client';
import React from 'react';
import { FaqItem } from "@/components/Faqs/FaqItem";

export const FAQAccordion = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="psi-faq-section">
      <h2 className="psi-faq-section-title">{title}</h2>
      <div>
        {items.map((item, i) => (
          <FaqItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  );
};