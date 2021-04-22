import { useColorModeValue } from '@chakra-ui/react';

export const useColorModeSwitcher = () => {
  const colorLight = useColorModeValue('default.light', 'default.dark');

  const colorDark = useColorModeValue('default.dark', 'default.light');

  const themed = useColorModeValue('primary.500', 'secondary.300');

  return { colorLight, colorDark, themed };
};
