import React from "react";
import ModalCard from "./ModalCard"


function Card({user, modalState, background, remove,dataPack}) {

    function handleClick() {

        modalState(<ModalCard student={user} modalState={modalState} background={background} remove={remove} dataPack={dataPack}/>)
        background("modal-container transparent-background")
    }

    return (

        <li className="student-item cf">
            <div className="student-details">
                <img className="avatar" src={user.picture.large} alt="Profile Picture"/>
                <h3 className="student-name" onClick={handleClick}>{user.name.first + " " + user.name.last}</h3>
                <span className="email">{user.email}</span>
            </div>
            <div className="joined-details">
                <span className="date">{user.registered.date.split("T")[0]}</span>
            </div>
        </li>
    )
}


export default Card