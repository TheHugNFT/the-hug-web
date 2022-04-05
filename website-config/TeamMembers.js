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
    Stack,
    Tag,
    Avatar, SimpleGrid,
} from '@chakra-ui/react';
import NuggetBox from './components/NuggetBox';
import * as React from "react";
import TeamMember from "./TeamMember";

export default function TeamMembers() {
    return (
        <>
            <Heading size="xl" id="team">
                Team
            </Heading>
            <SimpleGrid columns={[2, null, 3]} spacing={5}>
                <TeamMember
                    name="Otto"
                    title="Developer and CEO"
                    src="/profile_otto.PNG"
                    bio="I transform the world with creativity through technology and love."
                />
                <TeamMember
                    name="Joele"
                    title="Investor Relations, Marketing"
                    // I learned how to drive on a manual transmission.
                    bio="I create empowerment for others. Besides empowering teenagers in Science and Math, my favorite subject, Embrace the Hug, #thefriendshipnft, empowers everyone."
                    src={'/profile_joele.PNG'}
                />
                <TeamMember name="Javier" title="Artist" src="/profile_javier.jpg"
                            bio="Javier Alvarez Freelance graphic designer and Illustrator with more than 7 years of experience, lover of art and innovation, dedicated to constant learning and serving others. He loves challenges and turning his clients' ideas into visible reality. In his spare time Javier enjoys road cycling and adventure trips that enrich his art. Your goal? Change the world one design at a time."/>
                {/*<TeamMember name="Abdo" title="Artist"/>*/}
                {/*<TeamMember name="Abu" title="Community Manager, Marketing"/>*/}
                {/*<TeamMember name="Okechukwu" title="Project Manager"/>*/}
            </SimpleGrid>
        </>
    );
}
