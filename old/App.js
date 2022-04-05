import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import EmbraceHome from './pages/EmbraceHome';
import HashLinkObserver from 'react-hash-link';
import Colors from "./pages/ColorsPage";
// import EmbraceHomeAlt from './pages/EmbraceHomeAlt';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashLinkObserver />
      {/*<EmbraceHomeAlt />*/}
      <EmbraceHome />
    </ChakraProvider>
  );
}

export default App;
