import parseTimestamp from './parseTimestamp';

export interface LyricsData {
  /** Seconds of starting timestamp */
  startsAt: number;
  /** Seconds of ending timestamp */
  endsAt: number;
  /** Lyrics line content */
  content: string;
}

export default function parseLyrics(source: string): LyricsData[] {
  const lines = source.trim().split(/\r\n|\n|\r/);
  const results: LyricsData[] = [];
  const lastTime = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const startsAtMatches = line.match(/^\[(\d+:)?\d+:\d+\.\d+\]/);
    const startsAt = startsAtMatches
      ? parseTimestamp(startsAtMatches[0])
      : lastTime;
    if (i > 0 && results[i - 1] && results[i - 1].endsAt === Infinity) {
      results[i - 1].endsAt = startsAt;
    }
    const endsAtMatches = line.match(/\[(\d+:)?\d+:\d+\.\d+\]$/);
    const endsAt = endsAtMatches ? parseTimestamp(endsAtMatches[0]) : Infinity;
    const content = line.replace(/\[(\d+:)?\d+:\d+\.\d+\]/g, '');
    results.push({ startsAt, endsAt, content });
  }
  return results;
}
