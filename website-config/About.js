import {spacingStack} from "./config/commonProps";
import {Heading, Image, Stack, Text} from "@chakra-ui/react";
import Para from "./components/Para";
import * as React from "react";

export default function About() {
    return (<Stack {...spacingStack} flex={'70%'} minWidth={'300px'} pl={2}>
        <Stack textAlign={'center'} alignSelf="center" maxWidth={'600px'}>

            <Image src={'/TheHugNFTlogo.png'} maxWidth={'300'} alignSelf="center"/>

            <Heading size="l" fontSize={'24px'} pb={2} pt={-4}>
                The HUG NFT: Creating a world with more love, one hug at a time. Buy one hug and get a free mint to send to a friend.
            </Heading>

            <Heading size="l" fontSize={'18px'} pb={3}>
                Our Cause: Creating connection around the world with art inspiring people to be aunthetic. <br/>
                Our Mission: Hug each address on the Ethereum network.
            </Heading>
            <Para fontSize="l">
                The HUG NFT is a generative collection of art of humans hugging, inclusive of the full spectrum
                of human diversity. The skin color,
                clothing style, and backgrounds are blockchain generative traits.  When you mint one, you get a set of
                two that are similar except for the background.  Then you send one to a friend to hug them.
                We co-created The HUG NFT to inspire that same feeling that IRL hugging makes.
                We felt that some of the NFT space was about money and we want some of the space to be
                about human connection.  In addition, we host IRL events for hugging. We are having a
                pop up hug circle this Thursday (6/23/22) in Time Square.
            </Para>
            <Para fontSize="l">
                Hugs are symbolic of friendship and love and meet human needs in a variety of ways. Now
                more than ever, hugs are important. When you buy The HUG NFT, you are hugging a friend on the blockchain.
                Hugs connect the world.
            </Para>
            <Heading size="l" fontSize={'27px'}>
                Hug and the world hugs with you
            </Heading>

        </Stack>

    </Stack>)
}
