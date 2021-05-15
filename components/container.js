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
import Head from 'next/head';
import NextLink from 'next/link';
import { Logo } from './svg/logo';
import { useColorMode } from '@chakra-ui/color-mode';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';
import { github, linkedin, twitch, twitter, youtube } from '../content/socials';
import { StyledLink } from './styled';
import useToggle from '../utils/hooks/useToggle';

const Container = ({ children }) => {
  const [isOpen, toggleIsOpen] = useToggle();
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
        w={{ base: '100vw', sm: '90vw', '2xl': '80vw', '3xl': '72vw' }}
        minH="100vh"
        m="auto"
      >
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <VStack spacing={{ base: '8rem', lg: '10rem' }} id="skip" as="main">
          {isOpen ? <MobileNavMenu /> : children}
          <Footer />
        </VStack>
      </Box>
    </Box>
  );
};

const Navbar = ({ isOpen, toggleIsOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorDark } = useColorModeSwitcher();
  return (
    <Flex
      mb={isOpen ? { base: '1rem' } : { base: '4.5rem', lg: '6rem' }}
      as="nav"
      p="4"
      justify="space-between"
    >
      <MenuButton toggleIsOpen={toggleIsOpen} />
      <Logo fill={colorDark} />
      <HStack spacing={{ base: 0, md: 8 }}>
        <Flex align="center" display={{ base: 'none', lg: 'flex' }} as="ul">
          <Item variant="noStyle" href="/">
            Home
          </Item>
          <Item variant="noStyle" href="/about">
            About
          </Item>
          <Item variant="noStyle" href="/projects">
            Projects
          </Item>
          <Item variant="noStyle" href="/blog">
            Blog
          </Item>
        </Flex>
        <IconButton
          id="toggleTheme"
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

const MobileNavMenu = () => {
  return (
    <VStack spacing={4} w="100%">
      <VStack p={4} w="100%" my={8} spacing={8} as="ul">
        <Item spacing={4} variant="large" href="/">
          Home
        </Item>
        <Item spacing={4} variant="large" href="/about">
          About
        </Item>
        <Item spacing={4} variant="large" href="/projects">
          Projects
        </Item>
        <Item spacing={4} variant="large" href="/blog">
          Blog
        </Item>
      </VStack>
      <VStack p={4} w="100%" my={8} spacing={8} as="ul">
        <Item variant="large" href="/newsletter">
          Newsletter
        </Item>
        <Item variant="large" href="/community">
          Community
        </Item>
        <Item variant="large" href="/uses">
          Uses
        </Item>
      </VStack>
    </VStack>
  );
};

const MenuButton = ({ toggleIsOpen, ...props }) => {
  const [clicked, toggleClicked] = useToggle();

  const handleClick = () => {
    toggleIsOpen();
    toggleClicked();
  };
  return (
    <IconButton
      borderRadius="sm"
      onClick={handleClick}
      display={{ base: 'block', lg: 'none' }}
      w="48px"
      h="48px"
      variant="ghost"
      _hover={{ variant: 'ghost' }}
      {...props}
      icon={<MenuIcon clicked={clicked} />}
    />
  );
};

const MenuIcon = ({ clicked }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Box w="100%" h="100%" position="relative">
      <Line
        left={clicked ? '8px' : '4px'}
        bg={colorDark}
        top={clicked ? '22px' : '16px'}
        transform={clicked ? 'rotate(45deg)' : 'none'}
        width={clicked ? '32px' : '40px'}
      />
      <Line
        left={clicked ? '8px' : '4px'}
        transform={clicked ? 'rotate(-45deg)' : 'none'}
        bg={colorDark}
        bottom={clicked ? '22px' : '16px'}
        width={clicked ? '32px' : '16px'}
      />
    </Box>
  );
};

const Line = ({ ...props }) => {
  return (
    <Box
      {...props}
      borderRadius="1px"
      as="span"
      position="absolute"
      height="4px"
      transition="all 0.3s ease-in-out"
    />
  );
};

const Item = ({ children, href, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  //const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <VStack
      align="start"
      pb={{ base: 4, lg: 0 }}
      w="100%"
      as="li"
      listStyleType="none"
      borderBottom={{ base: '1px solid', lg: 'none' }}
      borderColor={colorGrey}
    >
      <StyledLink {...props} href={href}>
        {children}
      </StyledLink>
    </VStack>
  );
};

const Footer = () => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <VStack
      borderTop="1px solid"
      borderColor="neutral.200"
      py="32px"
      w="100%"
      spacing={{ base: '16px', lg: '64px' }}
      as="footer"
    >
      {isLarge ? <Full /> : <Condensed />}
      <Link
        href={`${github.href}/portfolio-v2`}
        isExternal
        variant="noStyle"
        align="center"
      >
        © Designed and coded by Greg Ogun
      </Link>
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
    <HStack align="start" spacing="16rem">
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
  const [hover, toggleHover] = useToggle();
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Center
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      as="li"
      listStyleType="none"
    >
      <Link
        variant="subtle"
        display="flex"
        alignItems="center"
        p={2}
        href={href}
        isExternal
      >
        <Icon
          transform={hover ? 'translateY(-4px)' : 'none'}
          transitionProperty="transform"
          transitionDuration="500ms"
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
