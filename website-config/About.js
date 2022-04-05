import {spacingStack} from "./config/commonProps";
import {Heading, Image, Stack, Text} from "@chakra-ui/react";
import Para from "./components/Para";
import * as React from "react";

export default function About() {
    return (<Stack {...spacingStack} flex={'70%'} minWidth={'300px'} pl={2}>
        <Stack textAlign={'center'} alignSelf="center" maxWidth={'600px'}>

            <Image src={'/TheHugNFTlogo.png'} maxWidth={'400'} alignSelf="center"/>

            <Heading size="l" fontSize={'24px'} pb={2} pt={-4}>
                friendship NFT. Buy one and get a free one to send to a friend.
            </Heading>

            <Heading size="l" fontSize={'18px'} mb={-2}>
                Our Cause: Educating and Creating Authentic Community. <br/>
                Our Mission: To send a Hug to each address on the Polygon network.
            </Heading>

        </Stack>
        <Text fontSize="l" mt="-5px">
            <Para fontSize="l">
                Hugs are symbolic of friendship and love and meet human needs in a variety of ways. Now
                more than ever, hugs are important. When you give The
                Hug NFT, you are not only giving a hug but also empowering an
                individual in crypto financial education.
            </Para>
            <Para>
                The Hug NFT, #thefriendshipnft, empowers individuals to create a working knowledge
                base of cryptocurrencies, wallets, blockchains, NFT’s, and DAO’s
                by sending an NFT Hug on the Polygon network which has
                minimal gas (transaction) fees while spreading friendship and joy
                via a blockchain hug.
            </Para>
            {/*<Para>*/}
            {/*    Wow… That’s a mouthful. You will create your very own hug nft and one for a friend.*/}
            {/*</Para>*/}

        </Text>

    </Stack>)
}
