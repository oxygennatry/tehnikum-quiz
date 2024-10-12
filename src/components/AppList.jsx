import React from 'react';

export const AppList = ({  }) => {
  return (
    <ul className="variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant-1" id="variant-1" />
                <label htmlFor="variant-1">Phyton</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-2" id="variant-2" />
                <label htmlFor="variant-2">DataAnalitic</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-3" id="variant-3" />
                <label htmlFor="variant-3">FrontEnd</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-4" id="variant-4" />
                <label htmlFor="variant-4">WebDesigner</label>
              </li>
            </ul>
  );
};