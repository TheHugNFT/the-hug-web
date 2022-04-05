import * as React from 'react';
import { useState, useEffect } from 'react';

// 1. import `ChakraProvider` component
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
  Divider,
  SimpleGrid,
  Image,
  Select,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import Section from '../components/Section';
import NuggetBox from '../components/NuggetBox';
import TeamMember from '../siteComponents/TeamMember';
import CheckList from '../components/CheckList';
import { spacingStack } from '../config/commonProps';
import SiteFooter from '../siteComponents/SiteFooter';
import FaqAccordion from '../components/FaqAccordion';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  connectWallet,
  getCurrentWalletConnected,
  addPolygonChain,
} from '../helpers/wallet';
import { mintNFT } from '../helpers/interact';
import { SocialIcon } from 'react-social-icons';

export default function EmbraceHomeAlt({ Component }) {
  const [walletAddress, setWalletAddress] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [newMint, setNewMint] = useState([]);
  const [mintCount, setMintCount] = useState(3);
  const [mintLoading, setMintLoading] = useState(false);

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        // const { address, status } = await getCurrentWalletConnected();
        // setWalletAddress(address);
        // setStatus(status)
        // onChangeWalletListener();
        // onConnectWalletHandler();
        //
        // let totalSupply = await getCurrentTotalSupply()
        // setSoldOutCounts(totalSupply)
        //
        // // let maxSupply = await getCurrentMaxSupply()
        // let maxSupply = 800
        // setMaxSupply(maxSupply)
        //
        // let maxMint = await getCurrentMaxMint()
        // setMaxMint(maxMint)
        //
        // const initIds = generateInitIds()
        // setInitialIds(initIds)
      }
    };

    initDatas();

    // window.addEventListener("resize", getWindowWidth)
    // return () => window.removeEventListener("resize", getWindowWidth)
  }, []);

  const onConnectWalletHandler = async () => {
    const walletResponse = await connectWallet();
    console.log(walletResponse);

    // setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);

    if (walletResponse.status === 'Adding') {
      await addPolygonChain();
    }
  };

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accounts => {
        if (accounts.length) {
          setWalletAddress(accounts[0]);
          setStatus('Get your Hug, 0.05ETH');
        } else {
          setWalletAddress('');
          setStatus('Connect Metamask');
        }
      });

      // window.ethereum.on('chainChanged', chainId => {
      //   onConnectWalletHandler();
      // });
    } else {
      setStatus(
        <p>
          🦊 You must install Metamask, a virtual Ethereum wallet, in your
          browser.(https://metamask.io/download.html)
        </p>
      );
    }
  };

  const buyNFTs = async () => {
    const { _, status } = await mintNFT(
      walletAddress,
      mintCount,
      setMintLoading,
      setNewMint
    );
  };

  let SocIcons = ({ size }) => {
    return (
      <Wrap>
        <SocialIcon
          url="https://twitter.com/embracecard"
          style={{ width: size, height: size }}
        />
        <SocialIcon
          url="https://www.instagram.com/embrace.cards/"
          style={{ width: size, height: size }}
        />
        <SocialIcon
          url="https://t.me/joinchat/wlfEcbdWx-ZkMzgx"
          style={{ width: size, height: size }}
        />
        <SocialIcon
          url="https://www.facebook.com/EmbraceTheHug"
          style={{ width: size, height: size }}
        />
      </Wrap>
    );
  };

  return (
    <Box
      my={4}
      // bg="gray.100"
    >
      <Section noMarginY bg={'red'}>
        <Flex justify="space-between">
          <Wrap spacing="10" fontSize="lg">
            <Link href="#buy">Buy</Link>
            <Link href="#roadmap">Roadmap</Link>
            <Link href="#team">Team</Link>
            <Link href="#faq">FAQ</Link>
          </Wrap>
          <Flex justify="space-between" verticalAlign="center">
            <SocIcons size={30} />
          </Flex>
          <Flex>
            {/*<Button onClick={onConnectWalletHandler}>*/}
            {/*  {walletAddress === ''*/}
            {/*    ? 'Connect Wallet'*/}
            {/*    : walletAddress.slice(0, 6) + ' ... ' + walletAddress.slice(-4)}*/}
            {/*</Button>*/}
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Section>

      <Section>
        {/*<SimpleGrid columns={[1, null, 2]} gap={1}>*/}
        {/*<SimpleGrid minChildWidth="200px" gap={1}>*/}
        <Flex wrap={'wrap'}>
          <Image
            src="/logo2.png"
            // width={[100, null, 200]}
            boxSize={[100, 150, 200]}
            objectFit="cover"
            flex={'30%'}
          />
          <Stack {...spacingStack} flex={'70%'} minWidth={'300px'}>
            <Heading size="2xl">Embrace The Hug</Heading>
            <Heading size="l">What is it?</Heading>
            <Text fontSize="l">
              Soulmates is a collection of NFTs that can evolve over time.
            </Text>
          </Stack>
        </Flex>
      </Section>

      <SimpleGrid columns={[2, 2, 4]} spacing={2} mt={5} px={2}>
        <Image src="/sample1.jpeg" alt="The Hug" />
        <Image src="/sample2.png" alt="The Hug" />
        <Image src="/sample3.png" alt="The Hug" />
        <Image src="/sample4.png" alt="The Hug" />
        {/*<Box height="80px"></Box>*/}
      </SimpleGrid>

      <Section>
        <Heading size="l">The Game</Heading>
        <Text fontSize="l">
          The Soulmates is primarily a collectible game, with an evolving
          narrative.
          <p></p>
          Soulmates cards evolve over time. Each soulmate will have qualities it
          is born with, such skin, hair, gender, personality: qualities that
          won't, or very rarily will, change. However, other qualities of the
          cards will evolve over time. This includes the setting and background,
          clothes and accessories.
          <p></p>
          At different points in the game, you will be able to influence the
          evolution of your NFT card. You can also transfer special qualities of
          one card to another, for example . When you trade in a card it will be
          "burnt". But don't worry, the souls of the two soulmates will never
          die, in fact they will probably be reincarnated into a new card. As
          you watch your cards evolve. Each card will have an intrinsic rarity,
          defined in the DNA of the two soulmates and the chemistry of the
          relationship.
        </Text>
      </Section>

      <Section>
        <Heading size="l">Collectible Value</Heading>
        <Text fontSize="l">
          <p></p>
          The art of Solumates is generative. This means that it is determined
          by the blockchain alone. There is no editorializing of the art, aside
          from the decisions made in the individual artistic elements, and the
          AI algorithm that generates the art.
          <p></p>
          If you love your Soulmates art just the way it is, you can choose to
          freeze it, which prevents the evolution of the colors, background,
          etc. As the owner, you have full control of your card.
          <p></p>
          You may gift it to a friend with a special message. The message can
          also be locked, at the discretion of the owner, thus memorializing it
          forever on the blockchain.
        </Text>
      </Section>

      <Section>
        <Heading size="l">Multichain</Heading>
        <Text fontSize="l">
          The vision of Soulmates is multichain. We will deploy our NFT on
          multiple chains. Polygon will be our primary chain, and ETH will be
          mainly for collectible aspect. Aspects of the game may happen on
          different chains.
        </Text>
      </Section>

      <Section>
        <Heading size="l">Tokenomics</Heading>
        <Text fontSize="l">
          <p></p>
        </Text>
      </Section>

      <Section>
        <Heading size="l">Progressive and Agile Project</Heading>
        <Text fontSize="l">
          <p></p>
          Unlike most other NFT projects, we are be adding features in a
          progressive manner. Every month we have reached important milestones,
          making stepwise evolutions in both the art and technology. This allows
          us to respond more effectively to feedback from our community and
          evolution in the NFT market
        </Text>
      </Section>

      <Section>
        <Stack {...spacingStack} pt="3vw">
          <Heading size="xl" id="buy">
            Buy
          </Heading>
          <Heading size="l" id="buy" color={'red.500'}>
            Presale Paused! Please check back soon.
          </Heading>
          <Text>{``}</Text>
          <Flex maxWidth={500}>
            <Box flex={'50%'}>Step 1: Connect your wallet</Box>
            <Box flex={'50%'}>
              <Button onClick={onConnectWalletHandler}>
                {walletAddress === ''
                  ? 'Connect Wallet'
                  : walletAddress.slice(0, 6) +
                    ' ... ' +
                    walletAddress.slice(-4)}
              </Button>
            </Box>
          </Flex>
          <Box maxWidth={500}>
            {/*<Button>Connect Your Wallet</Button>*/}

            <Flex>
              <Box flex={'50%'}>Step 2: Choose number to mint and confirm</Box>
              <Box flex={'50%'}>
                <Select
                  mt={2}
                  placeholder={'Number to mint'}
                  value={mintCount}
                  width={100}
                  pr={2}
                  onChange={e => {
                    var i = e.target.value;
                    setMintCount(i);
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                    <option value={i}>{i}</option>
                  ))}
                </Select>
                <Button mt={2} onClick={buyNFTs}>
                  Mint Now
                </Button>
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Section>

      <Divider />

      <Section withStack>
        <Heading size="xl" id="team">
          Team
        </Heading>
        <SimpleGrid columns={[2, null, 3]} spacing={5}>
          <TeamMember
            name="Otto"
            title="Developer and CEO"
            src="https://bit.ly/dan-abramov"
          />
          <TeamMember name="Javier" title="Artist" />
          <TeamMember name="Abdo" title="Artist" />
          <TeamMember name="Joele" title="Investor Relations" />
          <TeamMember name="Abu" title="Community Manager, Marketing" />
          <TeamMember name="Okechukwu" title="Project Manager" />
        </SimpleGrid>
      </Section>

      <Section withStack>
        <Heading size="xl" id="faq">
          FAQ
        </Heading>
        <FaqAccordion>
          {[
            [
              'How can I purchase my own Hug NFT?',
              'You can purchase them on this website for the minting price of ${marketPrice}.  They will also be available on OpenSea.',
            ],
            [
              'How does one play the Soulmates game?',
              'The game will have multiple phases.  It is under development and the first parts will be available by the end of 2021',
            ],
          ]}
        </FaqAccordion>
      </Section>

      <SiteFooter />
    </Box>
  );
}
