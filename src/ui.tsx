import React, { useState } from 'react'
import Markdown from 'ink-markdown'
import { useApp, useInput } from 'ink'
import { Layout, SlideSwitcher } from './components'
import { Metadata } from './types'
import { useSlides } from './hooks'

interface AppProps {
  filePath: string
}

const App = ({ filePath }: AppProps) => {
  const { exit } = useApp()
  const [currentSlide, setCurrentSlide] = useState(0)
  const { metadata, slides } = useSlides({ filePath })
  const handleTabChange = (name: string) => {
    setCurrentSlide(parseInt(name))
  }

  useInput((input, key) => {
    if (input === 'q' || key.escape) {
      exit()
    }
  })

  return (
    <Layout currentSlide={currentSlide} totalSlides={slides?.length || 0} metadata={metadata as Metadata}>
      <SlideSwitcher slides={slides} handleTabChange={handleTabChange} />
      <Markdown>{slides?.[currentSlide]}</Markdown>
    </Layout>
  )
}

module.exports = App
export default App
