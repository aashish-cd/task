import React, { useState, useRef } from 'react'

import Table from './Table'
import values from './data.json'

// const url = 'https://jsonkeeper.com/b/B96K'
const App = () => {
  const [rows, setRows] = useState(values.rows)
  const [columns, setColumns] = useState(values.columns)
  const rowsRef = useRef(rows)
  const columnsRef = useRef(columns)

  const handleSubmit = () => {
    setRows(rowsRef.current.value)
    setColumns(columnsRef.current.value)
    // console.log(rows, columns)
  }
  // const fetchData = async () => {
  //   const response = await fetch(url, { mode: 'no-cors' }).then((response) => {
  //     const data = response.json()
  //     return data
  //   }).then()
  //   // setRows()
  //   // setColumns(data.columns)
  //   console.log(response)
  // }
  // fetchData()

  // fetch('https://jsonkeeper.com/b/B96K', {
  //   mode: 'no-cors',
  // })
  //   .then((response = response.json()))
  //   .then((res) => console.log(res))

  // async function fetchData(url) {
  //   const response = await fetch(url)

  //   var data = await response.json()
  //   console.log(data)
  // }
  // fetchData(url)

  return (
    <div>
      <div className='inputs'>
        <div className='form'>
          <label htmlFor='row'>Rows</label>
          <input
            type='number'
            name='row'
            id='row'
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            ref={rowsRef}
          />
          <label htmlFor='column'>Columns</label>
          <input
            type='number'
            name='column'
            id='column'
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            ref={columnsRef}
          />
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
      <Table rows={rows} columns={columns} />
    </div>
  )
}

export default App
