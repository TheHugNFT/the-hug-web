import {Avatar, Text,} from '@chakra-ui/react';
import NuggetBox from './components/NuggetBox';

export default function TeamMember({
  name = 'Sample Name',
  title = 'Sample Title',
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
