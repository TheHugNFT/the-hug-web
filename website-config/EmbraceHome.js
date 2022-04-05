import * as React from 'react';
import {useState, useEffect} from 'react';

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
    Avatar,
} from '@chakra-ui/react';
import {Stack, HStack, VStack} from '@chakra-ui/react';
import Section from './components/Section';
import NuggetBox from './components/NuggetBox';
import TeamMember from './TeamMember';
import CheckList from './components/CheckList';
import {spacingStack} from './config/commonProps';
import SiteFooter from './SiteFooter';
import FaqAccordion from './components/FaqAccordion';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import {
    connectWallet,
    getCurrentWalletConnected,
    addPolygonChain,
} from './helpers/wallet';
import {mintNFT} from './helpers/interact';
import {SocialIcon} from 'react-social-icons';
import SocialIcons from './SocialIcons';
import Para from "./components/Para";
import {FaExternalLinkAlt} from "react-icons/fa";
import TeamMembers from "./TeamMembers";
import Features from "./Features";
import About from "./About";

export default function EmbraceHome() {
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
        const {_, status} = await mintNFT(
            walletAddress,
            mintCount,
            setMintLoading,
            setNewMint
        );
    };

    return (
        <Box
            my={4}
            // bg="gray.100"
        >
            <Section noMarginY>
                <Flex justify="space-between">
                    <Wrap spacing="10" fontSize="lg">
                        <Link href="#buy">Buy</Link>
                        <Link href="#roadmap">Roadmap</Link>
                        <Link href="#team">Team</Link>
                        <Link href="#faq">FAQ</Link>
                        <Link
                            href="https://docs.google.com/presentation/d/1YI7eeHGI18l3_tRSQWBe05CkWkqVmtxmv5UwcSchgKo/edit?usp=sharing"
                            isExternal>
                            <Text fontSize='sm' as='span'>The HUG NFT Presentation <FaExternalLinkAlt/></Text>
                        </Link>
                    </Wrap>
                    <Flex justify="space-between" verticalAlign="center">
                        <SocialIcons size={30}/>
                    </Flex>
                    <Flex>
                        {/*<Button onClick={onConnectWalletHandler}>*/}
                        {/*  {walletAddress === ''*/}
                        {/*    ? 'Connect Wallet'*/}
                        {/*    : walletAddress.slice(0, 6) + ' ... ' + walletAddress.slice(-4)}*/}
                        {/*</Button>*/}
                        <ColorModeSwitcher/>
                    </Flex>
                </Flex>
            </Section>

            <Section>
                {/*<SimpleGrid columns={[1, null, 2]} gap={1}>*/}
                {/*<SimpleGrid minChildWidth="200px" gap={1}>*/}
                <Flex wrap={'wrap'}>
                    {/*<Image*/}
                    {/*  src="/avatar.jpg"*/}
                    {/*  // width={[100, null, 200]}*/}
                    {/*  // width={150}*/}
                    {/*  // height={150}*/}
                    {/*  boxSize={[150, null, 200]}*/}
                    {/*  // boxSize={150}*/}
                    {/*  objectFit="contain"*/}
                    {/*  flex={'30%'}*/}
                    {/*  // borderRadius={'full'}*/}
                    {/*  p={3}*/}
                    {/*/>*/}

                    <About />

                </Flex>
            </Section>

            <SimpleGrid columns={[2, 2, 4]} spacing={2} mt={5} px={2}>
                <Image src="/sample1.jpeg" alt="The Hug"/>
                <Image src="/sample5.png" alt="The Hug"/>
                <Image src="/sample3.png" alt="The Hug"/>
                <Image src="/sample4.png" alt="The Hug"/>
                {/*<Box height="80px"></Box>*/}
            </SimpleGrid>

            <Section>
               <Features />
            </Section>

            <Section>
                <Stack {...spacingStack} pt="2vw">
                    <Heading size="xl" id="roadmap">
                        Get a Hug and give a Hug today
                    </Heading>
                    <Heading size="l" id="buy">
                        How to add Polygon network to Metamask:
                    </Heading>
                    <Text>
                        Go to <Link color="blue.500"
                                    href='https://polygonscan.com'
                                    isExternal>Polygonscan.com</Link> and click the button at the bottom right corner of
                        page (labeled "Add Polygon Network"):
                        <Image src="/Add_polygon.PNG" alt="Add Polygon"/>
                    </Text>
                    <Heading size="l" id="buy">
                        Instructions to mint an NFT:
                    </Heading>
                    <Text>
                        1) To mint an NFT go to <Link isExternal color="blue.500"
                                                      href='https://polygonscan.com/address/0xA234fb0B3B3A79bB425dd929dCcb269cbFc5400D#writeContract'>
                        PolygonScan
                    </Link>
                    </Text>
                    <Text>
                        2) The cost is 30 MATIC to mint an NFT. Please make sure you have
                        Polygon network selected and connect with Metamask.
                    </Text>
                    <Text>
                        3) Click "Contract" and then "Write Contract"
                    </Text>
                    <Text>
                        4) Connect your metamask wallet
                    </Text>
                    <Text>
                        5) Find "mintPairs" function (function number 17) . Enter 30 in the "Payable Amount" box. Enter
                        1 in the "Number of Pairs". Press Write button
                    </Text>
                    <Text>
                        6) Authorize Metamask transaction
                    </Text>
                    <Text>
                        Once minted, you will see your NFT on Opensea! <Link color="blue.500"
                                                                             href='https://polygonscan.com/address/0xb383D725d644967B6AF7B32E2908a840CC11d3b5#writeContract'>
                        PolygonScan
                    </Link></Text>
                    {/*<Flex maxWidth={500} p={3}>*/}
                    {/*    <Box flex={'50%'}>*/}
                    {/*        <Text>Step 1:</Text>*/}
                    {/*        <Text>Connect your wallet</Text>*/}
                    {/*    </Box>*/}
                    {/*    <Box flex={'50%'}>*/}
                    {/*        <Button colorScheme="blue" onClick={onConnectWalletHandler}>*/}
                    {/*            {walletAddress === ''*/}
                    {/*                ? 'Connect Wallet'*/}
                    {/*                : walletAddress.slice(0, 6) +*/}
                    {/*                ' ... ' +*/}
                    {/*                walletAddress.slice(-4)}*/}
                    {/*        </Button>*/}
                    {/*    </Box>*/}
                    {/*</Flex>*/}
                    {/*<Box maxWidth={500} px={3}>*/}
                    {/*    /!*<Button>Connect Your Wallet</Button>*!/*/}

                    {/*    <Flex verticalAlign={'middle'}>*/}
                    {/*        <Box flex={'50%'}>*/}
                    {/*            <Text>Step 2:</Text>*/}
                    {/*            <Text>Choose how many and confirm</Text>*/}
                    {/*        </Box>*/}
                    {/*        <Box flex={'50%'}>*/}
                    {/*            <Wrap>*/}
                    {/*                <Select*/}
                    {/*                    variant="outline"*/}
                    {/*                    mt={2}*/}
                    {/*                    placeholder={'Number to mint'}*/}
                    {/*                    value={mintCount}*/}
                    {/*                    width={100}*/}
                    {/*                    pr={2}*/}
                    {/*                    onChange={e => {*/}
                    {/*                        var i = e.target.value;*/}
                    {/*                        setMintCount(i);*/}
                    {/*                    }}*/}
                    {/*                >*/}
                    {/*                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (*/}
                    {/*                        <option value={i}>{i}</option>*/}
                    {/*                    ))}*/}
                    {/*                </Select>*/}
                    {/*                <Button colorScheme="blue" mt={2} onClick={buyNFTs}>*/}
                    {/*                    Mint Now*/}
                    {/*                </Button>*/}
                    {/*            </Wrap>*/}
                    {/*        </Box>*/}
                    {/*    </Flex>*/}
                    {/*</Box>*/}
                    {/*<Heading size="l" id="v2" color={'blue.500'}>*/}
                    {/*  V2 Presale Whitelist is starting soon. Check back soon and join the*/}
                    {/*  whitelist, and you could win a free NFT.*/}
                    {/*</Heading>*/}
                    {/*<Text>*/}
                    {/*    V2 NFTs will evolve over time, with backgrounds, clothes, and colors*/}
                    {/*    changing over time. The AI generation system is also improved, with*/}
                    {/*    unique traits that are stored on-chain for each NFT. This*/}
                    {/*    groundbreaking project pushes the boundaries of generative art and*/}
                    {/*    makes each NFT a one-of-a-kind adventure.*/}
                    {/*</Text>*/}
                    {/*<Text>Presale drop is coming very soon! Stay in touch with us.</Text>*/}
                </Stack>
            </Section>

            <Section withStack pt="2vw">
                {/*<Stack {...spacingStack} pt="2vw">*/}
                <Heading size="xl" id="roadmap">
                    Roadmap
                </Heading>
                <CheckList>
                    {[
                        'BOGO (Buy One Get One) offer - LIVE NOW  🎉',
                        '10% Sold.  Grand Opening Party.',
                        '20% Sold.  Art contest. Art from winners will be featured in next generation mint.',
                        '50% Sold.  Prints, T-shirts, Mugs, Wall Art.  We will randomly pick 1% of NFT owners and send you a print, t-shirt, or mug with your NFT art.',
                        '70% Sold.  Epic NFT messaging feature rolled out.  You will be able to send your NFT to a friend, or send them a greeting via message, link, or email, featuring your NFT art.',
                        // '90% Sold. ??',
                        // '100% Sold out. ??',
                    ]}
                </CheckList>
                {/*</Stack>*/}
            </Section>

            <Section withStack pt="2vw">
                <TeamMembers />
            </Section>

            <Section withStack pt="2vw">
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
                            'How does minting work?  Is it a fair launch?',
                            `We use an advanced smart contract that randomizes the minting order. Each minting phase/generation
                consists of a certain number of pieces of art, and the randomization happens on the blockchain, so nobody,
                not even the owner, knows the order the items will be minted in.  This makes it impossible for anyone
                to "cherry pick" their favorite artwork.  A provenance hash is also saved on-chain that guarantees that
                that the artwork cannot be tampered with by the time minting starts.`,
                        ],
                        [
                            'How many Hug NFTs are there?',
                            'There will be about 300 V1 NFTs, and there will be about 3000 V2 NFTs.',
                        ],
                        [
                            'Which blockchain(s) are Hug NFTs on?',
                            `We are starting on Polygon. We want to support the lowering of gas costs and 
              environmental impact of Ethereum/Proof-of-work until the more environmental transition 
              to PoS is made. We will launch V2 on Ethereum and probably another blockchain.  Why?  
              Because love and friendship has no network boundaries!`,
                        ],
                    ]}
                </FaqAccordion>

                {/*<Text>*/}
                {/*    V2 NFTs will evolve over time, with backgrounds, clothes, and colors*/}
                {/*    changing over time. The AI generation system is also improved, with*/}
                {/*    unique traits that are stored on-chain for each NFT. This*/}
                {/*    groundbreaking project pushes the boundaries of generative art and*/}
                {/*    makes each NFT a one-of-a-kind adventure.*/}
                {/*</Text>*/}

                <Image src="/qrcode_embrace.cards.png" boxSize={'300px'} alt="QR code"/>

            </Section>

            <SiteFooter/>
        </Box>
    )
        ;
}
