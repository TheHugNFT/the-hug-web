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
  Tag,
  Avatar,
} from '@chakra-ui/react';
import NuggetBox from '../components/NuggetBox';

export default function TeamMember({
  name = 'Otto Wacht',
  title = 'Artist',
  src = '',
  bio,
}) {
  return (
    <NuggetBox>
      <Avatar name={name} src={src} />
      <Text fontSize={'lg'}>{name}</Text>
      <Text fontSize={'sm'} fontWeight={'bold'}>
        {title}
      </Text>
      <Text fontSize={'xs'}>{bio}</Text>
    </NuggetBox>
  );
}
