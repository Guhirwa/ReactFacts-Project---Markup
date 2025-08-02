import React from 'react'

const Main = () => {
  return (
    <main className = 'bg-[#282D35] flex flex-col items-center h-fit text-white'>
      <h1 className = 'text-6xl my-16 font-bold self-start pl-96'>Fun facts about React</h1>
      <ul className = 'list-disc list-inside marker:text-[#61DAFB] marker:text-3xl marker:font-bold flex flex-col gap-6 text-2xl'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enteprise apps including mobile apps</li>
      </ul>
    </main>
  )
}

export default Main