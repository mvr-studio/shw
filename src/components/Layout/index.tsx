import React, { useEffect, useState } from 'react'
import { Box } from 'ink'
import { TopBar, BottomBar } from '../../components'
import { Metadata } from '../../types'

interface LayoutProps {
  children: React.ReactNode
  metadata: Metadata
  currentSlide: number
  totalSlides: number
}

const Layout = ({ children, metadata, currentSlide, totalSlides }: LayoutProps) => {
  const [size, setSize] = useState({
    columns: process.stdout.columns,
    rows: process.stdout.rows
  })

  useEffect(() => {
    const onResize = () => {
      setSize({
        columns: process.stdout.columns,
        rows: process.stdout.rows
      })
    }

    process.stdout.on('resize', onResize)
    process.stdout.write('\x1b[?1049h')
    return () => {
      process.stdout.off('resize', onResize)
      process.stdout.write('\x1b[?1049l')
    }
  }, [])

  return (
    <Box width={size.columns} height={size.rows} display="flex" flexDirection="column">
      <TopBar metadata={metadata} />
      <Box display="flex" flexBasis={1} flexShrink={1} flexGrow={1} justifyContent="center" alignItems="center">
        {children}
      </Box>
      <BottomBar currentSlide={currentSlide} totalSlides={totalSlides} />
    </Box>
  )
}

export default Layout
