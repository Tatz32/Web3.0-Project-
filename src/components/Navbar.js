import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <h2>Blockchains</h2>
        </div>
        <ul className='navLinks'>
            <li>Market</li>
            <li>Exchange</li>
            <li>Blockchain</li>
            <li>Wallet</li>
        </ul>
        <button>Login</button>
    </nav>
  )
}

export default Navbar