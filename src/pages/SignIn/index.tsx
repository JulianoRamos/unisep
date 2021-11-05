import React from 'react';
import { Flex, Stack, Button } from '@chakra-ui/react';

const SignIn: React.FC = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        width="100%"
        maxW="360"
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <input />
          <input />
        </Stack>

        <Button type="submit" mt={6} colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
