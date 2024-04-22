import './App.css'
import Paginator from './Components/Paginator'
import data from './data/data.js'
import { useState } from 'react'
import Main from './Components/Main'

const dataPerPage = 6

function App() {
  const [pageNow, setPageNow] = useState(1)

  const changePage = (currentPage) => {
    setPageNow(currentPage)
  }
  return (
    <div>
      <h1>Paginator</h1>
      <h2>Esu {pageNow} puslapyje</h2>
      {/* <Paginator
        totalLength={data.length}
        perPage={dataPerPage}
        changePage={changePage}
        currentPage={pageNow}
      /> */}
      <hr />
      <Main dataPerPage={dataPerPage} />
    </div>
  )
}

export default App
