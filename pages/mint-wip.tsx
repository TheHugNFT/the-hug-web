import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {GetStaticProps} from 'next'
import EmbraceHome from '../website-config/EmbraceHome'
import {SketchPicker} from 'react-color';
import ColorPicker from "../components/color-picker";
import {Radio, RadioGroup} from "@chakra-ui/radio";
import {Box, Flex, Button, Stack, Text, useRadioGroup, HStack, Heading} from "@chakra-ui/react";
import Multistep from '../components/multistep'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import RadioCard from '../components/radio-card'
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi'
import React from "react";
import MintNumberSlider from "../components/MintNumberSlider";
import RadioCards from "../components/radio-cards";

function MintUIBox({title, children}) {
    return (<Box mb={4}>
        <Flex alignItems={'center'} mb={2}>
            <Text mr={2}>{title}</Text>
        </Flex>
        {children}
    </Box>)
}

function StepOneShirt() {
    return (<Box>
        <Flex alignItems={'center'}>
            <Text mr={2}>Person 1:</Text>
            <ColorPicker/>
        </Flex>
        <Flex alignItems={'center'}>
            <Text mr={2}>Person 2:</Text>
            <ColorPicker/>
        </Flex>
    </Box>)
}

function SelectMintType() {
    const options = ['Plain', 'Abstract', 'Landscape Day', 'Landscape Night']

    const {getRootProps, getRadioProps} = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })

    const group = getRootProps()

    const radio1 = getRadioProps({value: 'random'})
    const radio2 = getRadioProps({value: 'custom'})

    return (<Box>
        <HStack {...group}>
            <RadioCard key={'random'} {...radio1}>
                <GiPerspectiveDiceSixFacesRandom size={25}/>
                Random mint. 0.02 Eth. Let the blockchain determine the fate of your art
            </RadioCard>
            <RadioCard key={'custom'} {...radio2}>
                Custom mint. 0.1 Eth. Customize certain colors and properties of your Hug.
            </RadioCard>

            {/*{options.map((value) => {*/}
            {/*    const radio = getRadioProps({value})*/}
            {/*    return (*/}
            {/*        <RadioCard key={value} {...radio}>*/}
            {/*            {value}*/}
            {/*        </RadioCard>*/}
            {/*    )*/}
            {/*})}*/}
        </HStack>
    </Box>)
}

function CustomizeBackground() {
    const options = ['Plain', 'Abstract', 'Landscape Day', 'Landscape Night', 'House One', 'House Two',]

    const {getRootProps, getRadioProps} = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })

    const group = getRootProps()

    const radio = getRadioProps({value: 'random'})

    return (<Box>
        <HStack {...group}>
            <RadioCard key={'random'} {...radio}>
                <GiPerspectiveDiceSixFacesRandom size={25}/>
            </RadioCard>
            {options.map((value) => {
                const radio = getRadioProps({value})
                return (
                    <RadioCard key={value} {...radio}>
                        {value}
                    </RadioCard>
                )
            })}
        </HStack>
    </Box>)
}

function SpecialElements() {

    let options = ["Rose", 'Earring', 'Barbell', 'Ring']
    return (<RadioCards options={options}/>)
}


const steps = [
    // {name: 'Shirt', component: <StepOneShirt/>},
    // {name: 'Bottom', component: null},
    {name: 'Watch', component: null},
    {name: 'Background', component: <CustomizeBackground/>}
];

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HStack>
                <Box p={4}>
                    <Heading>Let's mint Hug NFTs</Heading>

                    {/*<RadioGroup defaultValue='1'>*/}
                    {/*    <Stack spacing={4} direction='row'>*/}
                    {/*        <Radio value='1'>Mint Random - 0.02 Eth</Radio>*/}
                    {/*        <Radio value='1'>Mint Custom - 0.05 Eth</Radio>*/}
                    {/*    </Stack>*/}
                    {/*</RadioGroup>*/}
                    {/*<RadioGroup defaultValue='1'>*/}
                    {/*    <Stack spacing={4} direction='row'>*/}
                    {/*        <Radio value='1'>Custom Single NFT</Radio>*/}
                    {/*        <Radio value='1'>Custom Pair</Radio>*/}
                    {/*        <Radio value='1'>Custom Family - starts at 0.05</Radio>*/}
                    {/*    </Stack>*/}
                    {/*</RadioGroup>*/}
                    {/*<Multistep activeStep={1} showNavigation={true} steps={steps}/>*/}

                    <MintUIBox title={'1. Random or Custom'}>
                        <SelectMintType/>
                    </MintUIBox>

                    <MintUIBox title={'2. Shirt Colors'}>
                        <StepOneShirt/>
                    </MintUIBox>

                    {/*<MintUIBox title={'2. Number to Mint'}>*/}
                    {/*    <MintNumberSlider/>*/}
                    {/*</MintUIBox>*/}

                    <MintUIBox title={'3. Optional Customizations'}>
                        <Button>I'm Feeling Lucky</Button>
                        <Text>(Generate some random features that you can tweak)</Text>
                        <Accordion allowToggle>
                            {steps.map(step => {
                                return (
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Customize {step.name}
                                                </Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {step.component}
                                        </AccordionPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </MintUIBox>

                    <Button>Mint Random Now</Button>
                    <Button>Customize</Button>
                </Box>


                <iframe src="/api/art?seed=550852CEC79D393F28BE46820F5564263D64A2D561B533B81DDE6B17CD2F18EC" width={'1000'} height={'500'}></iframe>

            </HStack>


        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
