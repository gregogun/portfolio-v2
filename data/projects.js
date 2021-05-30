import { Logo } from '@/components/svg/logo';
import { MagicMirrorLogo } from '@/components/svg/mmLogo';
import {
  chakra,
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
    proto:
      'https://www.figma.com/proto/miwkYYZhCHXaGtNZ2O13bb/MyMagicMirror---UI?page-id=210%3A1&node-id=205%3A116&viewport=194%2C368%2C0.16894406080245972&scaling=scale-down',
    repo: 'https://github.com/gregogun/magic-mirror-react',
    id: 1,
    feature: true
  },
  {
    logo: <Logo />,
    title: 'Portfolio V2',
    description:
      'This site! Building the second iteration of my personal portfolio in real time on Twitch and Youtube.',
    tools: [react, nextjs, storybook, figma],
    live: null,
    proto: null,
    repo: 'https://github.com/gregogun/portfolio-v2',
    id: 2,
    feature: true
  },
  {
    logo: <Logo />,
    title: 'Portfolio V1',
    description:
      'The first iteration of my personal portfolio built with React and Chakra UI.',
    tools: [react, chakra],
    live: null,
    prototype: null,
    repo: 'https://github.com/gregogun/portfolio-v1',
    id: 3,
    feature: false
  }
];
