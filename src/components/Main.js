import React from 'react'

const Main = () => {
  return (
    <div className='mainContainer'>
        { }
        <div className='cryptContainer'>
            <h1 className='title'>Crypt Card</h1>
            <button type='button'>
                <p className='buttonText'> Connect to Wallet</p></button>
        </div>
        {}
        <div className='inputContainer'>
            <input type="text" placeholder='Address' name='addressTo'></input>
            <input type="number" placeholder='Currency' name='amount' step="0.0001"></input>
            <button type='button'>Send</button>
        </div>
    </div>
  )
}

export default Main