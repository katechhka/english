import React, {useState} from "react";
import "./Card.css";
import words from '../../utils/words';
import arrow from '../../images/left-arrow.png';
function Card() {
  const [isSelected, setisSelected] = useState(false);

  const [index, setId] = useState(0);

  let cardItem=words[index];

  const handleChange=()=>{
    setisSelected(!isSelected);
  }
  const handlePrev=()=>{
    if(index-1<0){
      setId(words.length-1);
    }
    else{
      setId(index-1);
    }
    
  }
  const handleNext=()=>{
    if(index+1>=words.length){
      setId(0);
    }
    else{
      setId(index+1);
    }
  }

  
  return (
    <div className="card__container">
    <div className="card" {...index}>
       <h2 className="card__english">{cardItem.english}</h2>
       <div className="card__transcription">{cardItem.transcription}</div>
       <button className={"card__button " +(isSelected? "card__button_hidden":"")} onClick={handleChange}>Проверить</button>
       <div className={"card__translate_hidden "+(isSelected? "card__translate":"")} onClick={handleChange}>{cardItem.russian}</div>
    </div>
    <div className="card__buttons">
    <img src={arrow} onClick={handlePrev} alt="кнопка" className="card__arrowleft"></img>
     <img src={arrow} onClick={handleNext} alt="кнопка" className="card__arrowright"></img>
    </div>
    </div>
  );
}

export default Card;
