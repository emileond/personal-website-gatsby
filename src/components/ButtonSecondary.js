import React from 'react';
import { Link } from 'gatsby'

const ButtonSecondary = ({ buttonText }) => {
  return (
    <>
      <button className="button button-secondary">
        {buttonText}
      </button>;
    </>
  )
};

export default ButtonSecondary;