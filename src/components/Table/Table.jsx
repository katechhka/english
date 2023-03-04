import React, {useState} from "react";
import "./Table.css";
import check from "../../images/check.png"
import pencil from "../../images/pencil.png"
import recycle from "../../images/recycle-bin.png"
import close from "../../images/close.png"

function Table(props) {

  const [isEdit, setisEdit] = useState(false);
  const [isDelete, setisDelete] = useState(false);
 
 
  const handleEdit=()=>{
    setisEdit(!isEdit);
  }
  const handleDelete=()=>{
    setisDelete(!isDelete);
  }
  const handleClose=()=>{
    if(isEdit){ setisEdit(!isEdit)};
  }
  return (
    <div className={"table__card " +(isEdit? "selected":"")}>
       <h2 className={isEdit?"hidden":"table__english"}>{props.english}</h2>
       <input type="text" className={isEdit?"table__input" : "hidden"}></input>
       <div className={isEdit?"hidden":"table__transcription"}>{props.transcription}</div>
       <input type="text" className={isEdit?"table__input":"hidden"}></input>
       <div className={isEdit?"hidden":"table__russian"}>{props.russian}</div>
       <input type="text" className={isEdit?"table__input":"hidden"}></input>
       <div className="table__buttons">
       <button className={"table__button1 table__button " +(isEdit? "save__button selected":"")}><img src={check} alt="кнопка" className="icon"></img></button>
        <button className="table__button2 table__button" onClick={handleEdit}><img src={pencil} alt="кнопка" className="icon"></img></button>
        <button className="table__button3 table__button"  onClick={handleDelete}><img src={recycle} alt="кнопка" className="icon"></img></button>
        <button className={(isEdit? "table__button4 table__button": "table__button4_inactive table__button" )}  onClick={handleClose}><img src={close} alt="кнопка" className="icon"></img></button>
        </div>
    </div>
  );
}

export default Table;
