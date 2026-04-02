import React from 'react';
import './Input.css';

/**
 * Компонент поля ввода
 * @param props параметры для инпута
 * @returns {JSX.Element}
 * @constructor
 */
export function Input(props) {
  return (
    <div className="inputBox">
      <input className="input" {...props} />
    </div>
  );
}