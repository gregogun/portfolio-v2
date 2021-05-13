import { useColorModeValue } from '@chakra-ui/react';

export const useColorModeSwitcher = () => {
  const colorLight = useColorModeValue('default.light', 'default.dark');

  const colorDark = useColorModeValue('default.dark', 'default.light');

  const themed = useColorModeValue('primary.500', 'secondary.300');

  const colorGrey = useColorModeValue('neutral.200', 'neutral.600');

  const success = useColorModeValue(
    'accent.successDark',
    'accent.successLight'
  );

  const error = useColorModeValue('accent.errorDark', 'accent.errorLight');

  return { colorLight, colorDark, colorGrey, themed, success, error };
};
