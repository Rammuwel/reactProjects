import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import './style.css';

function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQr() {
        setQrCode(input);
    }

    return (
        <div className="qrCode">
            <div className="heading">
                <h2>QRCode Generator</h2>
            </div>
            <div className="qrCodeContainer">
                <div className='input-field'> 
                    <input 
                        onChange={(e) => setInput(e.target.value)} 
                        type="text" 
                        name="qr-code" 
                        placeholder="Enter your value here" 
                    />
                    <button onClick={handleGenerateQr}>Generate QR</button>
                </div>
                <div>
                    {qrCode && (
                        <QRCodeSVG
                            id="qr-code-value"
                            value={qrCode}
                            size={200} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default QRCodeGenerator;
