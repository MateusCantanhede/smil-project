import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Home = () => {
    const [codeDefault, setCodeDefault] = useState(`<?xml version="1.0"?>
    <!DOCTYPE smil PUBLIC "-//W3C//DTD SMIL 2.0//EN" "http://www.w3.org/2001/SMIL20/SMIL20.dtd">
    <smil xmlns="http://www.w3.org/2001/SMIL20/Language">
        <head>
        </head>
        <body>
            <img src="Braun1.png" alt="Ovelha bigode" begin="0s" dur="5s"/>
            <img src="Braun2.png" alt="Braun Lee" begin="5s" dur="5s"/>
            <img src="Braun3.png" alt="Braun ashe" begin="10s" dur="5s"/>
            <seq>
                <img src="Braun4.png" alt="Lucian voador" begin="15s" dur="5s"/> 
                <img src="Braun5.png" alt="Ovelha de oculos" begin="20s" dur="5s"/>
            </seq>      
        </body>
    </smil>`);
    const handleUpdateText = (text) => {
        if (text.length === 0) {
            setCodeDefault(" ")
        } else {
            setCodeDefault(text)
        }
    }
    return (
        <>
            <div className="dv-main">
                <div className="text-center">
                    <img src={'logo.png'} alt="Ovelha bigode" id="logo" />
                    <h1 className="title">Insira seu codigo Smil</h1>
                    <form action="/grid" className="tb-smil">
                        <textarea
                            id="txt-smil"
                            className="smil"
                            name="smil-area"
                            spellCheck="false"
                            value={codeDefault}
                            onChange={
                                (e) => handleUpdateText(e.target.value)
                            }
                        />
                        <SyntaxHighlighter
                            className="lb-smil"
                            language="xml"
                            showLineNumbers={true}
                            children={codeDefault}
                        />

                        <button type="submit">
                            <h5>Play</h5>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );

}
export default Home