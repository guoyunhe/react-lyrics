import React, {
  HTMLAttributes,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import LyricsLine from './LyricsLine';
import parseLyrics from './parseLyrics';

export interface LyricsProps extends HTMLAttributes<HTMLDivElement> {
  /** Lyrics text with timestamps  */
  lyrics: string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export default function Lyrics({ lyrics }: LyricsProps): ReactElement {
  const parsed = useMemo(() => parseLyrics(lyrics), [lyrics]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      {parsed.map((line, index) => (
        <LyricsLine
          key={index}
          active={line.startsAt < time && line.endsAt > time}
        >
          {line.content}
        </LyricsLine>
      ))}
    </div>
  );
}
