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

            <Heading size="l" fontSize={'18px'} pb={4}>
                Our Cause: Creating connection around the world with art inspiring people to be aunthetic. <br/>
                Our Mission: Hug each address on the Ethereum network.
            </Heading>
            <Para fontSize="l" pb={5}>
                The HUG NFT is a grass roots NFT that started in Venice, CA. The HUG NFT is about human connection IRL and on the block chain.
                Want a hug?
                We believe that connection is more important than ever. 
               CURRENTLY, we are building community. We felt isolated and alone during covid.   looking to build The HUG NFT is a generative collection of art of humans hugging, inclusive of the full spectrum
                of human diversity. The skin color,
                clothing style, and backgrounds are blockchain generative traits.  When you mint one, you get a set of
                two that are similar except for the background.  Then you send one to a friend to hug them.
                We co-created The HUG NFT to inspire that same feeling that IRL hugging makes.
                We felt that some of the NFT space was about money and we want some of the space to be
                about human connection.  In addition, we host IRL events for hugging. We are having a
                pop up hug circle this Thursday (6/23/22) in Time Squares.
            </Para>
            <Heading size="m" fontSize={'18px'} pb={1}>
                Jolie's Hug Story
            </Heading>
            <Para fontSize="l">
                Jolie has been on a lifelong  journey of belonging through  hugging and human connection.
                She has always felt more connected and joyful after hugging starting as a young girl.
                She took a meditation course and learned about social capital and how hugging and human connection
                egulate emotions.  She met Otto at a 3 day authentic relating retreat where there was
                a lot of hugging and human connection.  Jolie was introduced to web3 after she was
                day trading stocks that were ‘mining’ and began
                researching mining and blockchains.  Jolie co-created The HUG NFT to inspire that same feeling
                that IRL hugging makes. 
            </Para>
            <Para fontSize="l" pt={6}>
                Hugs are symbolic of friendship and love and meet human needs in a variety of ways. Now
                more than ever, hugs are important. When you buy The HUG NFT, you are hugging a friend on the blockchain.
                Hugs connect the world.
            </Para>
            <Heading size="l" fontSize={'27px'} pt={3}>
                Hug and the world hugs with you
            </Heading>

        </Stack>

    </Stack>)
}
