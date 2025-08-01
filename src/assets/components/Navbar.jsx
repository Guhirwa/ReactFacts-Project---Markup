import React from 'react'

const Navbar = () => {
  return (
    <header className = 'bg-[#21222A] h-24 mx-7 my-8'>
        <nav className = 'flex items-center h-full'>
            <img className = 'w-[40px] mr-[7px]' src = "src/assets/react.svg" alt = "React logo" />
            <span className = 'text-[#61DAFB] text-[1.4rem] font-bold'>React Facts</span>
        </nav>
    </header>
  )
}

export default Navbar