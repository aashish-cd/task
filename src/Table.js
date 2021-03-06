import React, { useState, useEffect } from 'react'
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from 'react-icons/fa'

const Table = ({ rows, columns }) => {
  const [active, setActive] = useState(0)
  const [limit, setLimit] = useState(true)
  let rowArray = []
  let columnArray = []
  for (let i = 0; i < rows; i++) {
    rowArray = [...rowArray, i]
  }
  for (let j = 0; j < columns; j++) {
    columnArray = [...columnArray, j]
  }
  useEffect(() => {
    if (active > rowArray.length * columnArray.length - 1 || active < 1) {
      setActive(0)
    }
  }, [rows, columns, limit])

  return (
    <div>
      <div className='arrows'>
        <div className='arrow-container'>
          <FaArrowUp
            onClick={() => {
              setActive(active - columnArray.length)
              setLimit(!limit)
            }}
          />
        </div>
        <div className='arrow-container'>
          <FaArrowLeft
            onClick={() => {
              setActive(active - 1)
              setLimit(!limit)
            }}
          />{' '}
          <FaArrowRight
            onClick={() => {
              setActive(active + 1)
              setLimit(!limit)
            }}
          />
        </div>
        <div className='arrow-container'>
          <FaArrowDown
            onClick={() => {
              setActive(active + columnArray.length)
              setLimit(!limit)
            }}
          />
        </div>
      </div>
      <div className='box-container'>
        {rowArray.map((row, index) => {
          return (
            <section className='box-section' key={index}>
              {columnArray.map((column, index) => {
                return (
                  <div
                    className={`box ${
                      active === index + row * columns ? 'active' : ''
                    }`}
                  >
                    {index + row * columns + 1}
                  </div>
                )
              })}
            </section>
          )
        })}
      </div>
      {/* <div className='box-container'>
        {rowArray.map((row, index) => {
          return (
            <section className='box-section' key={index}>
              {columnArray.map((column, index) => {
                return (
                  <div className='box'>
                    row:{row}
                    column: {column}
                    index: {index}
                  </div>
                )
              })}
            </section>
          )
        })}
      </div> */}
    </div>
  )
}

export default Table
