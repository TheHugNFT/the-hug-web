import {Heading, SimpleGrid,} from '@chakra-ui/react';
import * as React from "react";
import TeamMember from "./TeamMember";

const bios = {
    otto: `I transform the world with creativity through technology and love.
           I have 20 years experience building apps, websites, and crypto stuff, 
           and helping companies implement innovative software and technology solutions`,
    jolie: `I create connection for others. Not only do I connect teenagers with Science and Math, 
            my favorite subjects, I connect humans with hugging and humans with web3.`,
    javier: `Javier Alvarez Freelance graphic designer and Illustrator with more than 7 years 
            of experience, lover of art and innovation, dedicated to constant learning and 
            serving others. He loves challenges and turning his clients' ideas into visible reality. 
            In his spare time Javier enjoys road cycling and adventure trips that enrich his art. 
            His goal? Change the world one design at a time.`,

}

export default function TeamMembers() {
    return (
        <>
            <Heading size="xl" id="team">
                Team
            </Heading>
            <SimpleGrid columns={[2, null, 3]} spacing={5}>
                <TeamMember
                    name="Otto"
                    title="Co-Creator and Developer"
                    src="/profile_otto.PNG"
                    bio={bios.otto}
                />
                <TeamMember
                    name="Jolie"
                    title="Co-Creator and Marketing"
                    // I learned how to drive on a manual transmission.
                    bio={bios.joele}
                    src={'/profile_joele.PNG'}
                />
                <TeamMember name="Javier" title="Artist" src="/profile_javier.jpg"
                            bio={bios.javier} />
            </SimpleGrid>
        </>
    );
}
