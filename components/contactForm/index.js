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
import { server } from '../../config';

const ContactForm = () => {
  const border = useColorModeValue('neutral.300', 'neutral.200');
  const { themed } = useColorModeSwitcher();
  const [form, setForm] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({ state: 'loading' });
    const res = await fetch(`${server}/api/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: 'error',
        message: error
      });
      return;
    }

    setForm({
      state: 'success',
      message: 'Your message was sent successfully.'
    });
    setInputs({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="20rem">
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
          isRequired
          value={inputs.message}
          onChange={handleChange}
          _hover={{ borderColor: themed }}
          mb="1rem"
          borderColor={border}
          borderRadius="sm"
          h="8rem"
          type="text"
          placeholder="message..."
        />
      </FormControl>
      {form.state === 'success' ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : form.state === 'error' ? (
        <ErrorMessage>Error: {form.message}</ErrorMessage>
      ) : (
        <Button
          isLoading={form.state === 'loading'}
          type="submit"
          w="50%"
          variant="primaryThemed"
        >
          Send
        </Button>
      )}
    </Box>
  );
};

const Input = ({ ...props }) => {
  const border = useColorModeValue('neutral.300', 'neutral.200');
  const { themed } = useColorModeSwitcher();
  return (
    <ChakraInput
      _hover={{ borderColor: themed }}
      borderColor={border}
      mb="1rem"
      borderRadius="sm"
      isRequired
      {...props}
    />
  );
};

export default ContactForm;
