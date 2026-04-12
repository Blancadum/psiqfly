"use client";
import { useState } from 'react';

export const useAccordion = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => setIsOpen(prev => !prev);
  return { isOpen, toggle };
};