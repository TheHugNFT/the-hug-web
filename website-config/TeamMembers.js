import {Heading, SimpleGrid,} from '@chakra-ui/react';
import * as React from "react";
import TeamMember from "./TeamMember";

const bios = {
    otto: `I transform the world with creativity through technology and love.
           I have 20 years experience building apps, websites, and crypto stuff, 
           and helping companies implement innovative software and technology solutions`,
    jolie: `I co-created The HUG NFT to increase love in the world through hugging in web3 and IRL. 
    I also created the Purple Elephant: NFT Agency to help artists in web3 so they can focus on 
    creating their art and not on the web3 arena. My mission in life is to be of service to others.  
    I have taught middle school science for 13 years plus.  I am fascinated with web3 and the 
    opportunities it creates in terms of multiple entry points for ALL and the innovations 
    that abound.  My passion is learning and giving back and I’m constantly learning more about web3.`,
    irina: `I’m a ‘juicy life’ coach.  J.U.I.C.Y? Joyful, Unapologetic, Inspiring, Creatively 
    successful and Yummy! I help my clients to bring joyful balance and crystal clear clarity in 
    their relationships with themselves and their loved ones  to reach emotional stability and 
    professional growth.`,
    // jolie: `I create connection for others. Not only do I connect teenagers with Science and Math,
    //         my favorite subjects, I connect humans with hugging and humans with web3.`,
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
            <SimpleGrid columns={[1, 2, 3]} spacing={5}>
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
                    bio={bios.jolie}
                    src={'/profile_joele.PNG'}
                />
                <TeamMember
                    name="Irina"
                    title="Collaborator"
                    // I learned how to drive on a manual transmission.
                    bio={bios.irina}
                    src={'/Irina.PNG'}
                />
                <TeamMember name="Javier" title="Artist" src="/profile_javier.jpg"
                            bio={bios.javier} />
            </SimpleGrid>
        </>
    );
}
