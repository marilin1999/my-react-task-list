import React from 'react';
import { useColorMode, Switch, Flex, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="left" alignItems="left" padding-bottom="30px">
      <SunIcon mr={2} />
      <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} />
      <MoonIcon ml={2} />
    </Flex>
  );
};

export default ThemeToggleButton;

