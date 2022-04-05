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

export default function Colors({ Component }) {

    let colors = {
        skin: [
            "#D19357",
            // "#D88FAC", pink
            // "#D6D905",  remove
            "#FC8F54",
            // "#FE8EAE",  reddish
            // "#FDB5FE",
            // "#FADBA7",  yellow
            // "#482401",  brown
            // "#47B5AC",  remove
            // "#6C2300",  reddish
            // "#904902",
            // "#B44701",
        ],
        skinLight: [
            "#CC9C80", //peach
            "#E5AF90",
            "#FFC3A0",
            "#FFC9A9",
            "#FFD9C2",
            "#FEB6B7", //pink
            "#FCCABF",
            "#EAD4D9",
            "#FFE6DE",
            "#D88FAC",
        ],
        skinColored: [
            "#f1c27d",
            // "#EBCCAB", //tan
            "#D2996C",
            "#C37C4D",
            "#B66B3E",
            "#8E4B32",
            "#FE8EAE", //reddish
            "#FDB5FE",
            "#6C2300",
            "#904902",
            "#B44701",
        ],
        // skinMinecraft: ["#e0ac69", "#f1c27d", "#ffdbac"],
        skinDark: [
            "#582F26",
            "#9D5B39",
            "#C68C73",
            "#482401",
            "#6f4f1d",
            "#261817",
            "#2B1A10",
            "#9c7248",
            "#926a2d",
            "#876127",
            "#7c501a",
        ],
        skinAlien: [
            "#04ACEF",
            "#558107",
            "#337450",
            "#3A8CEA",
            "#C41A29",
            "#6A736C",
            // "#818181",
            // "#ffdbac",
        ],
        // skinBlue: ["#04ACEF", "#6199C0", "#63B0CE", "#65B3CB"],
        // skinGreen: ["#337450", "#337450", "#92BC70"],
        hair: [
            "#062258",
            // "#024756",
            "#240100",
            // "#2448FF",
            "#6C0000",
            "#8C2600",
            "#B10107",
            // "#FD24A9",
            "#FB4901",
            // "#FFD453",
            "#D9D9FF",
            "#FCFCFE",
            "#E6BE8A", //shining gold hair
            "#5E321F",
            "#FFCC47",
            "#996515",
            "#100C07", //black
            "#242024",
            "#3D0463",
            "#FA01B3",
            "#970572",
            "#401215", //hair dye
            "#7B2E2C",
            "#9A4442",
            "#C6736F",
            "#7C0A02", //red brown
            "#5D1916",
            "#121212",
            "#310306",
            "#59260B",
            "#76412A", //ginger (brown)
            "#97502D",
            "#D08736",
        ],
        shirt: [
            "#fff0db",
            "#006CFD",
            "#25D8FF",
            "#8F24FE",
            "#6CFBFF",
            "#D403FD",
            "#FEFCA9",
            "#F6C7AB",
            "#F79C5E",
            "#EE5665",
            "#EF5316",
            "#D71515",
            "#0F8A76",
            "#459AC1",
            "#91CC1A",
            "#45AB26",
        ],
        skirt: [
            "#020043",
            "#004701",
            "#2B2B2B",
            "#6C2453",
            "#D6FEFE",
            "#B46D03",
            "#3D0463",
            "#FA01B3",
            "#970572",
        ],
        jeans: [
            "#425d8c",
            "#313345",
            "#1a224a",
            "#7caac6",
            "#e4d5b7",
            "#2d2d2d",
            "#401215",
        ],
        slacks: [
            "#020043",
            // "#e4d5b7",
            // "#fff0db",
            "#2d2d2d",
            "#7caac6",
            "#425d8c",
            "#313345",
            "#1a224a",
            "#304407",
            "#C37C4D",
            "#2d2d2d",
            "#122571",
            // "#5D1916",
        ],
        ws: [
            "#590E08",
            "#A35815",
            "#F4C110",
            "#85836C",
            "#8C68AE",
            "#F6C7AB",
            "#F79C5E",
            "#EE5665",
            "#EF5316",
            "#D71515",
            "#0F8A76",
            "#459AC1",
            "#91CC1A",
            "#45AB26",
            "#114B00",
        ],
        wa: [
            "#41210A",
            "#72502A",
            "#B7803F",
            "#F59815",
            "#FB6602",
            "#ED9A9A",
            "#F0666B",
            "#D71515",
            "#8E0E0B",
            "#744D86",
            "#122571",
            "#0C3D41",
            "#04808A",
            "#537C20",
            "#304407",
        ],
    };


    return (
        <Box
            my={4}
            // bg="gray.100"
        >
            <SimpleGrid columns={[2, 2, 4]} spacing={2} mt={5} px={2}>
                {Object.keys(colors).map(key => {
                    return <Box>key {key}</Box>
                })}
                {/*<Image src="/sample1.jpeg" alt="The Hug"/>*/}
                {/*<Image src="/sample5.png" alt="The Hug"/>*/}
                {/*<Image src="/sample3.png" alt="The Hug"/>*/}
                {/*<Image src="/sample4.png" alt="The Hug"/>*/}
                {/*<Box height="80px"></Box>*/}
            </SimpleGrid>
        </Box>
    );
}
