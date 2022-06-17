import {spacingStack} from "./config/commonProps";
import {Heading, Image, Stack, Text} from "@chakra-ui/react";
import Para from "./components/Para";
import * as React from "react";

export default function About() {
    return (<Stack {...spacingStack} flex={'70%'} minWidth={'300px'} pl={2}>
        <Stack textAlign={'center'} alignSelf="center" maxWidth={'600px'}>

            <Image src={'/TheHugNFTlogo.png'} maxWidth={'400'} alignSelf="center"/>

            <Heading size="l" fontSize={'24px'} pb={2} pt={-4}>
                The HUG NFT: Creating a world with more love, 1 hug at a time. Buy one hug and get a free mint to send to a friend.
            </Heading>

            <Heading size="l" fontSize={'18px'} mb={-2}>
                Our Cause: Creating connection around the world with art inspiring people to be aunthetic. <br/>
                Our Mission: To Hug to each address on the Ethereum network.
            </Heading>

        </Stack>
        <Text fontSize="l" mt="-5px">
            <Para fontSize="l">
                Hugs are symbolic of friendship and love and meet human needs in a variety of ways. Now
                more than ever, hugs are important. When you buy The HUG NFT, you are hugging a friend on the blockchain.
            </Para>
            <Para>
                Hugs connect the world.
           

        </Text>

    </Stack>)
}
