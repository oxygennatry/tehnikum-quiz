import React from 'react';

export const AppVariant = ({  }) => {
  return (
    <ul className="level-variants">
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id="variant-1" />
      <label htmlFor="variant-1">1</label>
    </li>
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id="variant-2" />
      <label htmlFor="variant-2">2</label>
    </li>
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id="variant-3" />
      <label htmlFor="variant-3">3</label>
    </li>
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id="variant-4" />
      <label htmlFor="variant-4">4</label>
    </li>
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id="variant-5" />
      <label htmlFor="variant-5">5</label>
    </li>
  </ul>
  );
};