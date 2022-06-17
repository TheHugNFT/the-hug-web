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
                        Hug and the world hugs with you
                    </Heading>
                    <Heading size="l" id="buy">
                        To mint an NFT you can now follow the {' '}
                        <Link color="blue.500" href="https://the-hug-nft.gitbook.io/the-hug-nft/metamask-school/how-to-mint-an-nft">
                            instructions on our Gitbook.
                        </Link>
                    </Heading>
                </Stack>
            </Section>

            <Section withStack pt="2vw">
                {/*<Stack {...spacingStack} pt="2vw">*/}
                <Heading size="xl" id="roadmap">
                    Roadmap
                </Heading>
                <CheckList>
                    {[
                        'BOGO (Buy One Get One to hug a friend with) offer - LIVE MINT coming soon.', 
                        'The roadmap is still evolving in this ever changing web3 landscape.'
                        '50% Sold.  T-shirts and other merch including Mugs, Wall Art.  We will randomly pick 25% of NFT owners and send you a print, t-shirt, or mug.',
                        '70% Sold.  Epic NFT messaging feature rolled out.  You will be able to send your NFT to a friend, or send them a greeting via message, link, or email, featuring your NFT art.',
                        // '100% Sold out. Hug Celebration Party.
                     'Other perks include access to IRL hugging events, surprise drops, and special discounts. At least 10% of the profits will be set upto help other artists launch their web 3 projects.
                     '

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
                            'Sign up on the Pre-Sale list',
                        ],
                        [
                            'How does minting work?',
                            `We are releasing a mint date soon`,

                            'Which blockchain(s) are Hug NFTs on?',
                            `We started on Polygon to support the lowering of gas costs and 
              environmental impact of Ethereum/Proof-of-work until the more environmental transition 
              to PoS is made. We will launch on Ethereum in July 2022.  Why?  
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
