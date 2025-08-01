import React from 'react'

const Navbar = () => {
  return (
    <header className = 'bg-[#21222A] h-48'>
        <nav className = 'flex items-center h-full justify-center'>
            <img className = 'w-40 mr-14' src = "src/assets/react.svg" alt = "React logo" />
            <span className = 'text-[#61DAFB] text-8xl font-bold'>React Facts</span>
        </nav>
    </header>
  )
}

export default Navbar