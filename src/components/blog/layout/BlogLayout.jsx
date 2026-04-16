"use client";
import React from 'react';
import PropTypes from 'prop-types';

export const BlogLayout = ({ children, navigation }) => {
  return (
    <div className="psi-blog-bg">
      <main className="psi-blog-container">
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