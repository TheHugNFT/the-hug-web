import {Flex, Text,} from '@chakra-ui/react';
import Section from './components/Section';
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
