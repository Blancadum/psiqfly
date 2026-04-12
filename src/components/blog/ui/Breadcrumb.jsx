"use client";
import React from 'react';
import Link from 'next/link';

export const Breadcrumb = ({ items }) => (
  <nav className="psi-breadcrumb">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {/* Separador visual */}
        {i > 0 && <span className="psi-breadcrumb-separator">›</span>}
        
        {item.to ? (
          <Link href={item.to} className="psi-breadcrumb-link">
            {item.label}
          </Link>
        ) : (
          <span className="psi-breadcrumb-current">
            {item.label} 
          </span>
        )}
      </React.Fragment>
    ))}
  </nav>
);