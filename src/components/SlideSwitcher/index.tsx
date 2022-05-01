import React from 'react'
import { Box } from 'ink'
import { Tabs, Tab } from 'ink-tab'

interface SlideSwitcherProps {
  slides: string[]
  handleTabChange: (name: string) => void
}

const SlideSwitcher = ({ slides, handleTabChange }: SlideSwitcherProps) => {
  return (
    <Box display="none">
      <Tabs onChange={handleTabChange}>
        {slides?.map((_: unknown, i: number) => (
          // @ts-ignore
          <Tab key={i} name={String(i)}>
            {i}
          </Tab>
        )) || []}
      </Tabs>
    </Box>
  )
}

export default SlideSwitcher
