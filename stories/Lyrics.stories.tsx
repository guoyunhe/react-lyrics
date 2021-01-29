import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Lyrics, { LyricsProps } from '../src/Lyrics';
import '../src/index.css';
import internationale_chinese_txt from 'raw-loader!./internationale-chinese.txt';
import internationale_chinese_ogg from 'url-loader!./internationale-chinese.ogg';

const meta: Meta = {
  title: 'Lyrics',
  component: Lyrics,
  argTypes: {
    lyrics: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LyricsProps> = (args) => <Lyrics {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  lyrics: internationale_chinese_txt,
};

export const Full = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [time, setTime] = useState(0);

  return (
    <div>
      <audio
        ref={audioRef}
        src={internationale_chinese_ogg}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        controls
      />
      <Lyrics
        lyrics={internationale_chinese_txt}
        time={time}
        onTimeChange={(t) => {
          if (audioRef.current) {
            audioRef.current.currentTime = t;
          }
        }}
      />
    </div>
  );
};
