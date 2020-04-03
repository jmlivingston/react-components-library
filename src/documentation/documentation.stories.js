import marked from 'marked'
import React from 'react'
import changeLog from '../../CHANGELOG.md'
import packageJson from '../../package.json'
import readMe from '../../README.md'
import developerReadMe from '../../scripts/build/README_PACKAGE.md'
import './documentation.css'

export default {
  title: 'Documentation',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}

function versionizeReadMe(readMeContent) {
  const readMeLines = readMeContent.split('\n')
  return [readMeLines[0] + ` (v${packageJson.version})`, ...readMeLines.slice(1)].join('\n')
}

export function LibraryDeveloper() {
  return <div className="documentation-light" dangerouslySetInnerHTML={{ __html: marked(versionizeReadMe(readMe)) }} />
}

export function PackageDeveloper() {
  return (
    <div
      className="documentation-light"
      dangerouslySetInnerHTML={{ __html: marked(versionizeReadMe(developerReadMe)) }}
    />
  )
}

export function ChangeLog() {
  return <div className="documentation-light" dangerouslySetInnerHTML={{ __html: marked(changeLog) }} />
}
