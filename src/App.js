import React, { useState } from "react";
import Carousel from './components/Carrusel/index.jsx';

import imag1 from "./img1.svg"
import "./styles.css"
import InputPhone from "./components/Input/phone.jsx";
import Button from "./components/Button/index.jsx";
import InputText from "./components/Input/text.jsx";

function App() {
    const [valuePhone, setValuePhone] = useState("")
    const [valueInputText, setValueInputText] = useState("")

    const onChangePhone = (number) => {
        console.log("number phone app", number);
        setValuePhone(number);
    }

    const onChangeInputText = (event) => {
        event.preventDefault();

        const valueInput = event.target.value;

        console.log("valueInput", valueInput)

        setValueInputText(valueInput);
    }

  return (
    <>
        <h2>Carousel</h2>
        <Carousel>
            <div 
                className="cards-container">
                <img src={imag1} />
                <p className='cards-container--desc'>Imagen uno</p>
            </div>
            <div 
                className="cards-container">
                <img src={imag1} />
                <p className='cards-container--desc'>Imagen dos</p>
            </div>
            <div 
                className="cards-container">
                <img src={imag1} />
                <p className='cards-container--desc'>Imagen tres</p>
            </div>
        </Carousel>

        <br />

        <h2>Input text max Length 6</h2>
        <InputText 
            placeholder="Input Text"
            value={valueInputText} 
            onChange={onChangeInputText}
            classNameInput="input-text"
            disabled={false}
            maxLength={6}
            type="text" 
            classNameContainer="container-input-text"
        />

        <br />

        <h2>Input phone</h2>
        <InputPhone 
            classInput="input-phone" 
            classNameContainer="container-input-phone"
            placeholder="Enter number phone" 
            handleChangePhone={onChangePhone} 
            value={valuePhone} 
        />

        <br />

        <h2>Button</h2>
        <Button onClick={() => console.log("hola")} primary>Buton</Button>
    </>
  );
}

export default App