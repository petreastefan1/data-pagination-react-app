import {useRef} from "react";
import ModalAddStudent from "./modalAddStudent";


function Header({search,setNewStudent,addBackground,dataPack,getStudents,footer}){

    let inputName = useRef()

    function checkName(name){


        let aux = [];

        for(let i=0;i<dataPack.length;i++){
            if(dataPack[i].name.first.toLowerCase() === name.toLowerCase()){
                aux.push(dataPack[i])
            }
            else if(dataPack[i].name.last.toLowerCase() === name.toLowerCase()){
                aux.push(dataPack[i])
            }
            else if(dataPack[i].name.first.toLowerCase()+" "+ dataPack[i].name.last.toLowerCase() === name.toLowerCase()){
                aux.push(dataPack[i])
            }
        }
            return aux;
    }

    const handleSearch = (e)=>{
        if(inputName.current.value.length>0) {
            search(checkName(inputName.current.value))
        }
        else if(inputName.current.value.length<1){
            getStudents(1,9)
        }

        }
    function modalAddClose(){
        setNewStudent("")
        addBackground("new-student-container")
    }
const handleAdd=()=>{
    setNewStudent(<ModalAddStudent modalClose={modalAddClose}dataPack={dataPack}/>)
    addBackground("new-student-container transparent-background")
    }

    return(

        <header className="header">
            <h2>Students</h2>

            <label htmlFor="search" className="student-search">
                <input ref={inputName} id="search" placeholder="Search by name..."/>
                    <button onClick={handleSearch} type="button" className ="search-btn"><img src="/mockups/icn-search.svg" alt="Search icon"/></button>
            </label>
            <button onClick={handleAdd} className="add-student-btn">Add Student</button>


        </header>
    )
}


export default Header