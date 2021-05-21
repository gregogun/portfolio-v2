import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from '@/utils/hooks/useToggle';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex, HStack, VStack } from '@chakra-ui/layout';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { StyledLink } from '../styled/link';
import { Logo } from '@/components/svg';

export const Navbar = ({ isOpen, toggleIsOpen }) => {
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
          <Item isExternal variant="noStyle" href="/gregogun-cv-2021.pdf">
            CV
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

export const MobileNavMenu = () => {
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
