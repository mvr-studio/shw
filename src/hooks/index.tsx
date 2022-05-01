import fs from 'fs'
const parseMD = require('parse-md').default

interface UseSlidesProps {
  filePath: string
}

export const useSlides = ({ filePath }: UseSlidesProps) => {
  const mdFile = filePath && fs.readFileSync(filePath, 'utf-8')
  const { metadata, content } = parseMD(mdFile)
  const slides = content?.split('---')
  return {
    metadata,
    slides
  }
}
