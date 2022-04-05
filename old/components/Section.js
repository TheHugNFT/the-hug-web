import {
  ChakraProvider,
  Heading,
  Box,
  Flex,
  Link,
  Input,
  Button,
  Center,
  Text,
  Stack,
} from '@chakra-ui/react';
import { spacingStack } from '../config/commonProps';

export default function Section({ children, noMarginY, withStack, ...rest }) {
  return (
    <Box
      textAlign="left"
      maxWidth={1000}
      mx="auto"
      px={'3vw'}
      my={noMarginY ? 0 : 7}
      //   bg="gray.100"
      {...rest}
    >
      {withStack ? (
        <Stack {...spacingStack}>{children}</Stack>
      ) : (
        <>{children}</>
      )}
    </Box>
  );
}
