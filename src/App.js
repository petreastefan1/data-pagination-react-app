import Header from "./components/Header.jsx"
import Card from "./components/Card"
import Footer from "./components/Footer"
import React, {useState, useEffect} from "react"

function App() {

    const [students, setStudents] = useState([])
    function getAllStudents(number,quantity) {
        fetch(`https://randomuser.me/api/?page=${number}&results=${quantity}&seed=abc`)
            .then(data => {
                return data.json()
            })
            .then(res => {

                setStudents(res.results);

            })
    }

    useEffect(() => {
        getAllStudents(1,9)
    }, [])



// console.log(students[0].email)

    const [catalog, setCatalog] = useState([])
    let [pageNumber,setPageNumber] = useState(footerButtons())
    let [page, setPage] = useState(pagination(students, 1))
    const [modal, setModal] = useState("")
    const [background, setBackground] = useState("modal-container")
    let [defaultPage, setDefaultPage] = useState(1)
    const [modalNewStudent,setModalNewStudent]=useState("")
    const[studentContainer,setstudentContainer] =useState("new-student-container")
   const [footer,setFooter] = useState(<Footer />)
    function pagination(data, page) {
        let filler = [];
        for (let i = 9 * (page - 1); i < data.length && i <= 9 * page - 1; i++) {
            filler.push(data[i]);
        }
        return filler;
    }

//gaseste numarul de butoane in functie de nr de studenti
    function footerButtons(){
        let aux = []
        for (let i = 1; i <= Math.ceil(students.length / 9); i++) {
            aux.push({page: i})
        }
        return aux

    }

//

    const handlePage = (event) => {
        let obj = event.target
        let pageNumber = obj.innerHTML
        setPageNumber(pageNumber)
        getAllStudents(pageNumber,9);

    }
    const handleSearch = (student) => {
        setStudents(student)

    }
//
    let handleRemove = (student) => {


        let aux = students.filter(user => user != student);
        //
        setStudents(aux)
        setPage(pagination(aux, defaultPage))
        setModal("")
        setBackground("modal-container")

    }
    return (
        <>

            <section className={studentContainer}>

                {modalNewStudent}

            </section>

            <section className={background}>

                {modal}

            </section>

            <Header dataPack={students} search={handleSearch} getStudents={getAllStudents} footer={setFooter} setNewStudent={setModalNewStudent} addBackground={setstudentContainer}/>







            <ul className="student-list">

                {
                    students.map(element => {
                        return <Card user={element}
                                     modalState={setModal}
                                     background={setBackground}
                                     remove={handleRemove}
                                     dataPack={students}
/>
                    })
                }

            </ul>
            <div className="pagination">

                <ul className="link-list" onClick={handlePage}>



                    {
                        footer
                    }





                </ul>

            </div>
        </>
    )
}

export default App;
