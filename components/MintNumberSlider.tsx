import React from "react";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    Box
} from '@chakra-ui/react'

export default function MintNumberSlider() {
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <Slider
            id='slider'
            defaultValue={5}
            min={0}
            max={20}
            colorScheme='teal'
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}

        >
            <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
                1
            </SliderMark>
            <SliderMark value={20} mt='1' ml='-2.5' fontSize='sm'>
                20
            </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={<Box>
                    Mint price:
                    Foo:
                </Box>}
            >
                <SliderThumb />
            </Tooltip>
        </Slider>
    )
}
