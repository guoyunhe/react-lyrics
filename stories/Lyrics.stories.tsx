import React from 'react';
import { Meta, Story } from '@storybook/react';
import Lyrics, { LyricsProps } from '../src/Lyrics';
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

export const Full = () => <Lyrics lyrics="[]" />;
