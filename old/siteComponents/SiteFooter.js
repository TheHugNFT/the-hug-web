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
  Wrap,
} from '@chakra-ui/react';
import NuggetBox from '../components/NuggetBox';
import Section from '../components/Section';
import SocialIcons from './SocialIcons';

export default function SiteFooter({}) {
  return (
    <Section pt={'2vw'}>
      <Flex justify="space-between" verticalAlign="center" pt={3}>
        <Text>© 2021 The Hug NFT</Text>
        <SocialIcons size={40} />
      </Flex>
    </Section>
  );
}
