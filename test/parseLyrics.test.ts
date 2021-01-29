import parseLyrics from '../src/parseLyrics';

describe('parseLyrics()', () => {
  it('parses basic lyrics', () => {
    const source =
      '[00:01.11]Arise ye workers from your slumbers\n[00:02.33]Arise ye prisoners of want';
    expect(parseLyrics(source)).toEqual([
      {
        startsAt: 1.11,
        endsAt: 2.33,
        content: 'Arise ye workers from your slumbers',
      },
      {
        startsAt: 2.33,
        endsAt: Infinity,
        content: 'Arise ye prisoners of want',
      },
    ]);
  });
});
