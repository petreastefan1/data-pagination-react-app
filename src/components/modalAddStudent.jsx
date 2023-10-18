import React, {useState, useRef} from "react";

function ModalAddStudent({modalClose,refresh,dataPack}) {
//today date preparetion
    let date= new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
// current date
    let currentDate = `${day}-${month}-${year}`;

    let nameInput = useRef()
    let emailInput = useRef()
    function handleSubmit(){
        let newStudent ={

            name: {
                first: nameInput.current.value.split(" ")[0],
                last:  nameInput.current.value.split(" ")[1],
            },
            email: emailInput.current.value,
            registered: {
                date: currentDate
            },
            picture: {
                large: "https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg",
            },
        }

        dataPack.push(newStudent)
        modalClose()

    }

    const handleClose =()=>{
        modalClose()
    }

    return (
        <>
            <section className="modal-card new-student-container">
                <li className="student-item cf student-card-big ">
                    <div className="details">
                        <img className="avatar" src="https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
                             alt="Profile Picture"/>
                        <div className="name-container">
                            <label htmlFor="student-name-inpt">Student Name:</label>
                            <input ref={nameInput} className="student-name-inpt"/>
                        </div>
                        <div className="email-container">
                            <label htmlFor="student-email-inpt">Student Email:</label>
                            <input ref={emailInput} className="student-email-inpt"/>
                        </div>
                        <div className="joined-details">
                            <span className="date">{currentDate}</span>
                        </div>

                    </div>

                </li>
                <button onClick={handleClose} className="close-btn"><i className="fa-solid fa-x"></i></button>

                <button onClick={handleSubmit} className="submit-btn">Submit</button>
            </section>


        </>
    )


}


export default ModalAddStudent