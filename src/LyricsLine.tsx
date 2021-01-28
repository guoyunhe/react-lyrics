import React, { ReactChild, ReactElement } from 'react';
import './LyricsLine.css';

export interface LyricsLineProps {
  active?: boolean;
  /** Content */
  children: ReactChild;
}

export default function LyricsLine({
  active,
  children,
}: LyricsLineProps): ReactElement {
  return (
    <div className={`lyrics__line${active ? ' lyrics__line--active' : ''}`}>
      {children || <>&nbsp;</>}
    </div>
  );
}
