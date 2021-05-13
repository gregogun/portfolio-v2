// valid and false need to be removed/refactored after API implementation

import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';
import { IoAlertCircle, IoCheckmarkCircle } from 'react-icons/io5';

const NewsletterCard = ({ valid, invalid, placeholder, value, ...props }) => {
  const { themed, colorGrey } = useColorModeSwitcher();
  return (
    <Box
      border="2px solid"
      borderColor={colorGrey}
      py="2rem"
      px="3rem"
      {...props}
    >
      <Heading variant="h3">Subscribe to my newsletter</Heading>
      <Text mb="1rem">
        Here’s a short summary of why you should subscribe to my newsletter
      </Text>
      <InputGroup mb="1rem" borderColor={themed}>
        <Input
          isRequired
          value={value}
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          borderRadius="sm"
          placeholder="jimmy@choo.com"
        />
        <InputRightElement w="8rem">
          <Button variant="secondaryThemed">Subscribe{valid && 'd!'}</Button>
        </InputRightElement>
      </InputGroup>
      {valid && <SuccessMessage />}
      {invalid && <ErrorMessage />}
    </Box>
  );
};

const SuccessMessage = () => {
  const { success } = useColorModeSwitcher();
  return (
    <Flex align="center">
      <Icon mr="0.5rem" as={IoCheckmarkCircle} color={success} />
      <Text color={success}>You're on the mailing list!</Text>
    </Flex>
  );
};

const ErrorMessage = () => {
  const { error } = useColorModeSwitcher();
  return (
    <Flex align="center">
      <Icon mr="0.5rem" as={IoAlertCircle} color={error} />
      <Text color={error}>Error: You've already subscribed!</Text>
    </Flex>
  );
};

NewsletterCard.propTypes = {
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

NewsletterCard.defaultProps = {
  valid: false,
  invalid: false
};

export default NewsletterCard;
