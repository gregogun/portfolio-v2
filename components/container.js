import {
  Flex,
  Box,
  IconButton,
  Link,
  Button,
  HStack,
  Center,
  Icon,
  VisuallyHidden,
  Text,
  VStack,
  useMediaQuery
} from '@chakra-ui/react';
import '@fontsource/sora/400.css';
import '@fontsource/sora/700.css';
import Head from 'next/head';
import NextLink from 'next/link';
import { Logo } from './custom/logo';
import { useColorMode } from '@chakra-ui/color-mode';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';
import { useState } from 'react';
import { github, linkedin, twitch, twitter, youtube } from '../content/socials';
import { StyledLink } from './styled';

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
        variant="secondary"
        as="a"
        href="#skip"
        position="absolute"
        transform="translateX(-100%)"
        transition="transform 0.3s"
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip to Content
      </Button>
      <Box
        w={{ base: '100vw', lg: '90vw', '2xl': '72vw' }}
        minH="100vh"
        m="auto"
      >
        <Navbar />
        <VStack spacing="32rem" id="skip" as="main">
          {children}
          <Footer />
        </VStack>
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" p="4" justify="space-between">
      <MenuButton />
      <Logo />
      <HStack spacing={{ base: 0, md: 8 }} align="center">
        <Flex display={{ base: 'none', lg: 'flex' }} as="ul">
          <Item href="/">Home</Item>
          <Item href="/about">About</Item>
          <Item href="/projects">Projects</Item>
          <Item href="/blog">Blog</Item>
        </Flex>
        <IconButton
          borderRadius="sm"
          variant="icon"
          onClick={toggleColorMode}
          aria-label={
            colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'
          }
          icon={
            colorMode === 'light' ? (
              <IoMoon size="1.25rem" />
            ) : (
              <IoSunnyOutline size="1.25rem" />
            )
          }
        />
      </HStack>
    </Flex>
  );
};

const MenuButton = ({ ...props }) => {
  return (
    <IconButton
      display={{ base: 'block', lg: 'none' }}
      w="48px"
      h="48px"
      variant="ghost"
      _hover={{ variant: 'ghost' }}
      {...props}
      icon={<MenuIcon />}
    />
  );
};

const MenuIcon = ({ isOpen }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Center w="36px" h="20px" position="relative">
      <Box
        position="absolute"
        as="span"
        bg={colorDark}
        height="4px"
        top="0"
        width="36px"
      />
      <Box
        position="absolute"
        as="span"
        bg={colorDark}
        height="4px"
        bottom="0"
        left="0"
        width="18px"
      />
    </Center>
  );
};

const Item = ({ children, href }) => {
  return (
    <Box w="100%" h="100%" as="li" listStyleType="none">
      <StyledLink href={href}>{children}</StyledLink>
    </Box>
  );
};

const Footer = () => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <VStack
      borderTop="1px solid"
      borderColor="neutral.200"
      h="336px"
      py="32px"
      w="80%"
      spacing={{ base: '16px', lg: '64px' }}
      as="footer"
    >
      {isLarge ? <Full /> : <Condensed />}
      <Text align="center">© Designed and coded by Greg Ogun</Text>
    </VStack>
  );
};

const Condensed = () => {
  return (
    <HStack as="ul">
      <SocialLink icon={github.icon} href={github.href} name={github.name} />
      <SocialLink
        icon={linkedin.icon}
        href={linkedin.href}
        name={linkedin.name}
      />
      <SocialLink icon={twitter.icon} href={twitter.href} name={twitter.name} />
      <SocialLink icon={twitch.icon} href={twitch.href} name={twitch.name} />
      <SocialLink icon={youtube.icon} href={youtube.href} name={youtube.name} />
    </HStack>
  );
};

const Full = () => {
  return (
    <HStack spacing="256px">
      <MainRoutes />
      <SubRoutes />
      <Socials />
    </HStack>
  );
};

const MainRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </VStack>
  );
};

const SubRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/newsletter">Newsletter</NavLink>
      <NavLink href="/community">Community</NavLink>
      <NavLink href="/uses">Uses</NavLink>
    </VStack>
  );
};

const Socials = () => {
  return (
    <VStack spacing={0.25} h="100%" as="ul">
      <SocialLink icon={github.icon} href={github.href} name={github.name}>
        Github
      </SocialLink>
      <SocialLink
        icon={linkedin.icon}
        href={linkedin.href}
        name={linkedin.name}
      >
        LinkedIn
      </SocialLink>
      <SocialLink icon={twitter.icon} href={twitter.href} name={twitter.name}>
        Twitter
      </SocialLink>
      <SocialLink icon={twitch.icon} href={twitch.href} name={twitch.name}>
        Twitch
      </SocialLink>
      <SocialLink icon={youtube.icon} href={youtube.href} name={youtube.name}>
        Youtube
      </SocialLink>
    </VStack>
  );
};

const SocialLink = ({ children, icon, href, name }) => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Center as="li" listStyleType="none">
      <Link
        variant="subtle"
        display="flex"
        alignItems="center"
        p={2}
        href={href}
        isExternal
      >
        <Icon
          mr={{ lg: '0.25rem' }}
          boxSize={{ base: '1.5rem', lg: '1rem' }}
          aria-hidden={true}
          as={icon}
        />
        {children}
        {!isLarge && <VisuallyHidden>{name}</VisuallyHidden>}
      </Link>
    </Center>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant="subtle">{children}</Link>
    </NextLink>
  );
};

export default Container;
