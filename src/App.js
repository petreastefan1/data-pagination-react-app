import Header from "./components/Header.jsx"
import Card from "./components/Card"
import Footer from "./components/Footer"
import React, {useState, useEffect} from "react"

function App() {
    const [students, setStudents] = useState([])
    function getAllStudents(number) {
        fetch(`https://randomuser.me/api/?page=${number}&results=9&seed=abc`)
            .then(data => {
                return data.json()
            })
            .then(res => {

                setStudents(res.results);

            })
    }

    useEffect(() => {
        getAllStudents(1)
    }, [])





    const [catalog, setCatalog] = useState(students)
    let pageNumber = []
    let [page, setPage] = useState(pagination(students, 1))
    const [modal, setModal] = useState("")
    const [background, setBackground] = useState("modal-container")
    let [defaultPage, setDefaultPage] = useState(1)
    const [modalNewStudent,setModalNewStudent]=useState("")
    const[studentContainer,setstudentContainer] =useState("new-student-container")
    function pagination(data, page) {
        let filler = [];
        for (let i = 9 * (page - 1); i < data.length && i <= 9 * page - 1; i++) {
            filler.push(data[i]);
        }
        return filler;
    }

//gaseste numarul de butoane in functie de nr de studenti
    for (let i = 1; i <= Math.ceil(students.length / 9); i++) {
        pageNumber.push({page: i})
    }
//

    const handlePage = (event) => {
        let obj = event.target
        let pageNumber = obj.innerHTML
        getAllStudents(pageNumber);

    }
//     const handleSearch = (student) => {
//         setPage(student)
//     }
//
//     let handleRemove = (student) => {
//
//
//         let aux = catalog.filter(user => user != student);
//
//
//         setCatalog(aux);
//         setPage(pagination(aux, defaultPage))
//         setModal("")
//         setBackground("modal-container")
//
//     }




    return (
        <>

            {/*<section className={studentContainer}>*/}

            {/*    {modalNewStudent}*/}

            {/*</section>*/}

            {/*<section className={background}>*/}

            {/*    {modal}*/}

            {/*</section>*/}

            {/*<Header search={handleSearch}*/}
            {/*        page={pagination(catalog, 1)}*/}
            {/*        setNewStudent={setModalNewStudent}*/}
            {/*        addBackground={setstudentContainer}*/}
            {/*        refresh={setCatalog}/>*/}
            {/*        dataPack={students}*/}



            <ul className="student-list">

                {
                    students.map(element => {
                        return <Card user={element}
                                     modalState={setModal}
                                     background={setBackground}
                                     // remove={handleRemove}
                                     dataPack={students}/>
                    })
                }

            </ul>
            <div className="pagination">

                <ul className="link-list" onClick={handlePage}>

                    {
                        pageNumber.map((number, index) => {
                            return <Footer pages={number}
                                           key={index}/>
                        })
                    }


                </ul>

            </div>
        </>
    )
}

export default App;
