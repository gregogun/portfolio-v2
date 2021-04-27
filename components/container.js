import {
  Center,
  Flex,
  Heading,
  ListItem,
  Box,
  Text,
  IconButton,
  Link,
  Button
} from '@chakra-ui/react';
import '@fontsource/sora/400.css';
import '@fontsource/sora/700.css';
import Head from 'next/head';
import NextLink from 'next/link';
import { Logo } from '../components/assets/logo';
import { useColorMode } from '@chakra-ui/color-mode';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Container = ({ children }) => {
  const meta = {
    title: 'Greg Ogun - Front-end developer',
    description:
      'Self-taught developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
    image: 'https://gregogun.com/static/images/banner.png',
    type: 'website'
  };

  return (
    <Box>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        as="a"
        href="#skip"
        position="absolute"
        transform="translateX(-100%)"
        transition="transform 0.3s"
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip to Content
      </Button>
      <Navbar />
      <Box id="skip" as="main" w="100vw" h="100vh">
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p="4" justify="space-between">
      <Logo />
      <Flex align="center">
        <Flex as="ul">
          <Item href="/">Home</Item>
          <Item href="/about">About</Item>
          <Item href="/projects">Project</Item>
          <Item href="/blog">Blog</Item>
        </Flex>
        <IconButton
          border="2px solid   "
          onClick={toggleColorMode}
          aria-label={
            colorMode === 'light' ? 'Toggle ddark mode' : 'Toggle light Mode'
          }
          icon={
            colorMode === 'light' ? (
              <IoMoonOutline size="1.25rem" />
            ) : (
              <IoSunnyOutline size="1.25rem" />
            )
          }
        />
      </Flex>
    </Flex>
  );
};

const Item = ({ children, href }) => (
  <NextLink href={href}>
    <Link mr="1rem" as="li" listStyleType="none" variant="body">
      {children}
    </Link>
  </NextLink>
);

const Footer = () => {
  return <Heading variant="h3">Footer</Heading>;
};

export default Container;
