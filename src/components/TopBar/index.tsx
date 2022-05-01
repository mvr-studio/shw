import React from 'react'
import { Box, Text } from 'ink'
import { Metadata } from '../../types'

interface TopBarProps {
  metadata: Metadata
}

const TopBar = ({ metadata }: TopBarProps) => {
  const authorEmail = (metadata['email'] && `(${metadata['email']})`) || ''
  const authorText = `${metadata['author'] || ''} ${authorEmail}`

  return (
    <Box display="flex" justifyContent="space-between">
      <Text>{metadata['title']}</Text>
      <Text>{authorText}</Text>
    </Box>
  )
}

export default TopBar
