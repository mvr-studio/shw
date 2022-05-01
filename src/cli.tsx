#!/usr/bin/env node
import React from 'react'
import { render } from 'ink'
import meow from 'meow'
import App from './ui'

const cli = meow(
  `
	Usage
	  $ shw [file]

	Examples
	  $ shw file.md
`
)

const enterAltScreenCommand = '\x1b[?1049h'
const leaveAltScreenCommand = '\x1b[?1049l'
process.stdout.write(enterAltScreenCommand)
process.on('exit', () => {
  process.stdout.write(leaveAltScreenCommand)
})

render(<App filePath={cli.input[0] || ''} />)
