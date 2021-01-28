import React, { ReactChild, ReactElement } from 'react';

export interface LyricsFragmentProps {
  active?: boolean;
  /** Content */
  children: ReactChild;
}

export default function LyricsFragment({
  active,
  children,
}: LyricsFragmentProps): ReactElement {
  return (
    <span
      className={`lyrics__fragment${active ? ' lyrics__fragment--active' : ''}`}
    >
      {children}
    </span>
  );
}
