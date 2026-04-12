"use client";
import React from 'react';
import PropTypes from 'prop-types';

export const BlogLayout = ({ children, navigation }) => {
  return (
    <div className="psi-blog-bg">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-20 antialiased">
        {navigation && <div className="mb-8">{navigation}</div>}
        <article className="relative">
          {children}
        </article>
      </main>
    </div>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.node,
};