import React from 'react'
// import data from '../data/data'
import DataRouteComponent from './DataRouteComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const main = ({ dataPerPage }) => {
  return (
    <BrowserRouter>
      <h1>Pagination</h1>
      <Routes>
        <Route
          path="/:pageNow"
          element={<DataRouteComponent dataPerPage={dataPerPage} />}
        ></Route>
        <Route path="/404" element={<h1>Page not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default main
