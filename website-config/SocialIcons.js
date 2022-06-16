import { Box, Image, Link, Wrap } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import * as React from 'react';

export default function SocialIcons({ size }) {
  return (
    <Wrap>
      <SocialIcon
        url="https://twitter.com/TheHUGNFT"
        style={{ width: size, height: size }}
      />
      <SocialIcon
        url="https://www.instagram.com/thehugnft/"
        style={{ width: size, height: size }}
      />
      <SocialIcon
        url="https://www.facebook.com/EmbraceTheHug"
        style={{ width: size, height: size }}
      />
      <SocialIcon
        url="https://linktr.ee/thehugnft"
        style={{ width: size, height: size }}
      />
      <SocialIcon
        url="tiktok.com/@thehugnft"
        style={{ width: size, height: size }}
      />
    </Wrap>
  );
}
