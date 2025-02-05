import React, { useState } from 'react'

const GeneratePic = () => {
    const [pic,setPic] = useState('https://picsum.photos/200');

    const GenerateImage = ()=>{
        const PicWidth = Math.floor(Math.random() * 800) + 200;
        const PicHight = Math.floor(Math.random() * 800) + 200;

        setPic(`https://picsum.photos/${PicWidth}/${PicHight}`)
    }
  return (
    <div>
       <h1>Random Image Generator</h1>
       <img src={pic} alt="Random" style={{ width: '100%', maxWidth: '400px', height: '400px',transition:'background 0.5s ease' }} />
      <br />
      <button className='bg-blue-300 border-1 cursor-pointer' onClick={GenerateImage}>Generate New Image</button>
    </div>
   
  )
}

export default GeneratePic
