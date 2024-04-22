import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Paginator = ({ totalLength, perPage, currentPage }) => {
  const [pages, setPages] = useState([])
  const [leftArrow, setLeftArrow] = useState(0)
  const [rightArrow, setRightArrow] = useState(0)

  useEffect(() => {
    // const parsedCurrentPage = parseInt(currentPage);

    if (currentPage === 1) {
      setLeftArrow(0)
    } else {
      setLeftArrow(currentPage - 1)
    }

    const howManyPages = Math.ceil(totalLength / perPage)
    console.log(howManyPages)

    if (currentPage === howManyPages) {
      setRightArrow(0)
    } else {
      setRightArrow(currentPage + 1)
    }

    const pagesArray = []
    for (let index = 0; index < howManyPages; index++) {
      pagesArray.push(index + 1)
    }
    console.log(pagesArray)

    setPages(pagesArray)
  }, [totalLength, perPage, currentPage])

  return (
    <div>
      <p>Paginator</p>
      <br />

      <div style={{ display: 'flex' }}>
        <Link
          to={'/' + leftArrow}
          style={{ visibility: leftArrow ? 'visible' : 'hidden' }}
          className="pageLink"
        >
          {'<--'}
        </Link>
        {pages.map((page) => (
          <Link to={'/' + page} key={page} className="pageLink">
            {page}
          </Link>
        ))}
        <Link
          to={'/' + rightArrow}
          style={{ visibility: rightArrow ? 'visible' : 'hidden' }}
          className="pageLink"
        >
          {'-->'}
        </Link>
      </div>
    </div>
  )
}

export default Paginator
