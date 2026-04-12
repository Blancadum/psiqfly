'use client';
import React from 'react';
import PropTypes from "prop-types";
import { FaqItem } from "@/components/Faqs/FaqItem";

export const FaqAccordionClient = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section id="preguntas-frecuentes" className="mt-16 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white border-b pb-2">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <FaqItem 
            key={i} 
            q={item.q || item.question} 
            a={item.a || item.answer} 
          />
        ))}
      </div>
    </section>
  );
};

FaqAccordionClient.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};