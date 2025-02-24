import React from 'react'
import BackgroundWigglies from '@app/components/ui/background-lines'

const BackgroundLines = () => {
  return (
    <div>
      <BackgroundWigglies
        className="p-8 h-screen w-screen flex flex-col justify-center items-center"
        svgOptions={{ stroke: "blue", strokeWidth: 5 }}
      >
        <h1 className="text-4xl font-bold">Aadi Jain</h1>
      </BackgroundWigglies>
    </div>
  )
}

export default BackgroundLines
