import React from 'react'
import { useState } from "react";
import Modal from "./Model";
import "./model.css";

function ModelTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }


    return (
        <div className='costom-tab-container'>
            <div className='heading'>
                 <h2>Custem Model</h2>
            </div>
            <div className='customTab'>
                <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
                {showModalPopup && (
                    <Modal
                        id={"custom-id"}
                        header={<h1>Customized Header</h1>}
                        footer={<h1>Customized Footer</h1>}
                        onClose={onClose}
                        body={<div>Customized body</div>}
                    />
                )}
            </div>
        </div>
    )
}

export default ModelTest