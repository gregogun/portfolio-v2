import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { Icon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/layout';
import { IoAlertCircle, IoCheckmarkCircle } from 'react-icons/io5';

export const SuccessMessage = ({ children }) => {
  const { successColor } = useColorModeSwitcher();
  return (
    <Flex align="center">
      <Icon mr="0.5rem" as={IoCheckmarkCircle} color={successColor} />
      <Text color={successColor}>{children}</Text>
    </Flex>
  );
};

export const ErrorMessage = ({ children }) => {
  const { errorColor } = useColorModeSwitcher();
  return (
    <Flex align="center">
      <Icon mr="0.5rem" as={IoAlertCircle} color={errorColor} />
      <Text color={errorColor}>{children}</Text>
    </Flex>
  );
};
