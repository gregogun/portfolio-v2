import { Logo } from '@/components/custom/logo';
import { MagicMirrorLogo } from '@/components/custom/mmLogo';
import {
  electron,
  figma,
  nextjs,
  nodejs,
  react,
  socketIO,
  storybook
} from './tools';

export default [
  {
    logo: <MagicMirrorLogo />,
    title: 'Magic Mirror (React)',
    description:
      'An IoT project inspired by the original Magic Mirror by Michael Teeuw.',
    tools: [react, electron, nodejs, socketIO],
    live: null,
    repo: 'https://github.com/gregogun/magic-mirror-react',
    id: 1
  },
  {
    logo: <Logo />,
    title: 'Portfolio V2',
    description:
      'This site! Building the 2nd iteration of my personal portfolio in real time on Twitch and Youtube.',
    tools: [react, nextjs, storybook, figma],
    live: null,
    repo: 'https://github.com/gregogun/magic-mirror-react',
    id: 2
  }
];
