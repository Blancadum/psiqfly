'use client';
import { useState } from 'react';
import Link from 'next/link';

export function NavDropdown({ label, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="psi-nav-dropdown">
      <button
        onClick={() => setOpen(o => !o)}
        className="psi-nav-dropdown-btn"
        aria-expanded={open}
      >
        <span>{label}</span>
        <span className={`psi-nav-dropdown-chevron${open ? ' rotate-180' : ''}`}>▾</span>
      </button>

      {open && (
        <div className="psi-nav-dropdown-panel">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              rel="nofollow"
              className="psi-nav-dropdown-item"
            >
              {item.emoji && <span className="psi-nav-dropdown-emoji">{item.emoji}</span>}
              <span className="psi-nav-dropdown-label">{item.label}</span>
              <span className="psi-nav-dropdown-arrow">→</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
