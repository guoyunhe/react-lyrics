import React, { HTMLAttributes, ReactElement, useMemo } from 'react';
import LyricsLine from './LyricsLine';
import parseLyrics from './parseLyrics';

export interface LyricsProps extends HTMLAttributes<HTMLDivElement> {
  /** Lyrics text with timestamps */
  lyrics: string;
  /** Media playback status */
  status?: 'waiting' | 'playing' | 'paused' | 'ended';
  /** Media progress time in seconds */
  time: number;
  /** Set media progress time in seconds */
  onTimeChange?: (time: number) => void;
}

/**
 * Lyrics player of React.
 */
export default function Lyrics({
  lyrics,
  status = 'waiting',
  time,
}: LyricsProps): ReactElement {
  const parsed = useMemo(() => parseLyrics(lyrics), [lyrics]);

  return (
    <div className={`lyrics lyrics--${status}`}>
      <div className={`lyrics__inner`}>
        {parsed.map((line, index) => (
          <LyricsLine
            key={index}
            active={line.startsAt < time && line.endsAt > time}
          >
            {line.content}
          </LyricsLine>
        ))}
      </div>
    </div>
  );
}
