import React from 'react';
import { TShieldIcon } from '../icons/TShieldIcon/index.js';
import './Badge.css';

/**
 * Компонент для отображения бейджика кэшбэка
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function Badge({ children }) {
  return (
    <div className="cashback">
      <TShieldIcon width={10} height={10} />
      <span className="cashbackAmount">{children}</span>
    </div>
  );
}