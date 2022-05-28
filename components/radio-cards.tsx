import {Box, HStack, useRadioGroup} from "@chakra-ui/react";
import RadioCard from "./radio-card";
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";
import React from "react";

export default function RadioCards({options}) {

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
