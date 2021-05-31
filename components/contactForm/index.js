import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import {
  Text,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import { ErrorMessage, SuccessMessage } from '../styled';

const ContactForm = () => {
  const { colorGrey, colorDark } = useColorModeSwitcher();
  const border = useColorModeValue('neutral.500', 'neutral.300');
  const themed = useColorModeValue('secondary.300', 'primary.500');
  const [form, setForm] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const url = process.env.FORMSPREE_ENDPOINT;

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setForm({
        state: 'success',
        message: msg
      });
      setInputs({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setForm({
        state: 'error',
        message: msg
      });
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm((prevStatus) => ({
      loading: true
    }));
    fetch(`https://formspree.io/f/xoqydwrl`, {
      method: 'POST',
      body: JSON.stringify(inputs)
    })
      .then((response) => {
        handleServerResponse(true, 'Your message has been sent successfully.');
      })
      .catch((error) => {
        handleServerResponse(false, error);
      });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="20rem" color={colorGrey}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          value={inputs.name}
          onChange={handleChange}
          placeholder="jimbob"
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          value={inputs.email}
          onChange={handleChange}
          type="email"
          placeholder="jim@bob.com"
        />
      </FormControl>
      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea
          value={inputs.message}
          onChange={handleChange}
          borderColor={border}
          _hover={{ borderColor: border }}
          _placeholder={{ color: border }}
          mb="1rem"
          borderRadius="sm"
          h="6rem"
          type="text"
          placeholder="message..."
        />
      </FormControl>
      <Button
        isLoading={form.state === 'loading'}
        type="submit"
        w="50%"
        _hover={{ color: colorDark, bg: themed }}
        _active={{ borderColor: themed }}
        color={themed}
        borderColor={themed}
      >
        Send
      </Button>
      {form.state === 'success' && (
        <SuccessMessage>Your message was successfully sent.</SuccessMessage>
      )}
    </Box>
  );
};

const Input = ({ ...props }) => {
  const border = useColorModeValue('neutral.500', 'neutral.300');
  return (
    <ChakraInput
      _hover={{ borderColor: border }}
      _placeholder={{ color: border }}
      borderColor={border}
      mb="1rem"
      borderRadius="sm"
      isRequired
      {...props}
    />
  );
};

export default ContactForm;
