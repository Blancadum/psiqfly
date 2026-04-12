import React from 'react';
import PropTypes from 'prop-types';

export const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 pt-14 md:pt-16">
      {children}
    </div>
  );
};

HomeLayout.propTypes = { children: PropTypes.node.isRequired };
