import React, { useState } from 'react'

function QRCode() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQr(){
        setQrCode(input);
    }
  return (
    <div className='qrCode'>
       <div className='heading'>
            <h2>QRCode Generator</h2>
       </div>
       <div className='qrCOdeContainer'>
            <div>
              <input onChange={(e)=>setInput(e.target.value)} type="text" name='qr-code'  placeholder='Enter your value here'/>
              <button onClick={()=>handleGenerateQr()}>Generate QR</button>
            </div>

            <div>
                <QRCode
                 id="qr-code-value"
                 value={qrCode}
                />
            </div>

       </div>
    </div>
  )
}

export default QRCode