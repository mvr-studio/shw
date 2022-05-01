import React from 'react'
import { Box, Text } from 'ink'

interface BottomBarProps {
  currentSlide: number
  totalSlides: number
}

const BottomBar = ({ currentSlide, totalSlides }: BottomBarProps) => {
  return (
    <Box>
      <Text>
        {currentSlide + 1}/{totalSlides}
      </Text>
    </Box>
  )
}

export default BottomBar
