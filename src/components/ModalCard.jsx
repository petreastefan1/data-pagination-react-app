import React, {useState, useRef} from "react";

function ModalCard({student, modalState, background, remove,dataPack}) {
    const [currentstudent, setCurrentStudent] = useState(student)
    let inputName = useRef()
    let inputEmail = useRef()
    const [isEdit, setIsEdit] = useState(false)

    function handleClose() {

        modalState("")
        background("modal-container")
    }

    function handleRemove() {
        remove(currentstudent)
    }


    let handleEdit = () => {


        setIsEdit(true);


    }
    let handleSave = () => {
        let fullName = inputName.current.value.split(" ")

        if(inputName.current.value.length > 0 && inputEmail.current.value.length > 0 && fullName[1] != undefined) {
            currentstudent.name.first = fullName[0];
            currentstudent.name.last = fullName[1];
            currentstudent.email = inputEmail.current.value
        }
        else{
            alert("Invalid Student Name or Email")
        }

        setIsEdit(false);
    }
    let handleArrowRight = () => {

        for (let i = 0; i < dataPack.length - 1; i++) {

            if (currentstudent == dataPack[i]) {
                setCurrentStudent(dataPack[i + 1])
            }

        }
    }

    let handleArrowLeft = () => {

        for (let i = 1; i < dataPack.length; i++) {

            if (currentstudent == dataPack[i]) {
                setCurrentStudent(dataPack[i - 1])
            }

        }
    }

    return (
        <>
            {
                !isEdit && (<section className="modal-card">
                    <li className="student-item cf student-card-big">
                        <div className="student-details">
                            <img className="avatar" src={currentstudent.picture.large} alt="Profile Picture"/>
                            <h3>{currentstudent.name.first + " " + currentstudent.name.last}</h3>
                            <span className="email">{currentstudent.email}</span>
                        </div>
                        <div className="joined-details">
                            <span className="date">{currentstudent.registered.date.split("T")[0]}</span>
                        </div>
                    </li>
                    <button onClick={handleClose} className="close-btn"><i className="fa-solid fa-x"></i></button>
                    <button onClick={handleArrowRight} className="arrow-right"><i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <button onClick={handleArrowLeft} className="arrow-left"><i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={handleEdit} className="edit-btn">Edit</button>
                    <button onClick={handleRemove} className="remove-btn">Remove</button>
                </section>)
            }


            {isEdit && (<section className="modal-card">
                <li className="student-item cf student-card-big">
                    <div className="student-details">
                        <img className="avatar" src={currentstudent.picture.large} alt="Profile Picture"/>
                        <input defaultValue={currentstudent.name.first + " " + currentstudent.name.last} ref={inputName}
                               className="student-name-inpt"/>
                        <input defaultValue={currentstudent.email} ref={inputEmail} className="student-email-inpt"/>
                    </div>
                    <div className="joined-details">
                        <span className="date">{currentstudent.registered.date.split("T")[0]}</span>
                    </div>
                </li>
                <button onClick={handleClose} className="close-btn"><i className="fa-solid fa-x"></i></button>
                <button className="arrow-right"><i className="fa-solid fa-arrow-right"></i></button>
                <button className="arrow-left"><i className="fa-solid fa-arrow-left"></i></button>
                <button onClick={handleSave} className="save-btn">Save</button>
                <button onClick={handleRemove} className="remove-btn">Remove</button>
            </section>)}
        </>
    )


}


export default ModalCard