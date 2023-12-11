import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import ThemeToggleButton from '../../components/Switch';

export function Home() {
  return (
    <Box textAlign="center" py={10}>
      <ThemeToggleButton />
      <Heading as="h1" size="2xl" mt={6} mb={4}>
        BIENVENIDO A LA LISTA DE TAREAS
      </Heading>
      <Text fontSize="xl">
        ¡Explora y gestiona tus tareas de manera eficiente!
      </Text>
    </Box>
  );
}

export default Home;

