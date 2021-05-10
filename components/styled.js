import { Box, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';

export const StyledLink = ({ children, href, ...props }) => {
  const { themed } = useColorModeSwitcher();
  return (
    <NextLink href={href} passHref>
      <Link
        aria-labelledby={children}
        {...props}
        mr="1rem"
        position="relative"
        sx={{
          _before: {
            content: '""',
            transformOrigin: '50% 100%',
            transition:
              'clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
            clipPath:
              'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
            position: 'absolute',
            width: '100%',
            height: '1px',
            bg: themed,
            top: '100%',
            left: 0,
            pointerEvents: 'none'
          },
          _after: {
            position: 'absolute',
            width: '100%',
            height: '1px',
            bg: themed,
            top: '100%',
            left: 0,
            pointerEvents: 'none'
          },
          _hover: {
            _before: {
              transform: 'translate3d(0, 2px, 0) scale3d(1.08, 3, 1)',
              clipPath:
                'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
              bg: themed
            },
            span: {
              color: themed,
              transform: 'translate3d(0, -2px, 0)'
            }
          },
          span: {
            display: 'inline-block',
            transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)'
          }
        }}
      >
        <Box as="span">{children}</Box>
      </Link>
    </NextLink>
  );
};
