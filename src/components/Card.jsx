import React from 'react';
import styles from "./Card.module.css";
// Este Componente va a recibir las siguientes props:
// max: Temperatura Máxima.
// min: Temperatura Mínima.
// name: Nombre de la ciudad.
// img: nombre de la imagen que se debe mostrar.
// onClose: recibe una función que se va a ejecutar 
//        cuando el usuario haga click en el botón de cerrar.

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  const { card, immg, btn } = styles

  return (
    <div className={ card }>
      <button className={ btn } onClick={ onClose } >x</button>
      <span>
        <h3>{ name }</h3>
      </span>

      <img className={ immg }
        src={ `https://openweathermap.org/img/wn/${img}@2x.png` }
        alt={ name }

      />

      <div className={ styles.tempContainer }>
        <div>
          <span>Min</span>
          <span>{ min }</span>
        </div>
        <div>
          <span>Min</span>
          <span>{ max }</span>
        </div>

      </div>

      <br></br>

    </div >)
};