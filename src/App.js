import React, { useState, useRef } from 'react'

import Table from './Table'

// const url = 'https://jsonkeeper.com/b/B96K'

const App = () => {
  const [rows, setRows] = useState(3)
  const [columns, setColumns] = useState(4)
  const rowsRef = useRef(rows)
  const columnsRef = useRef(columns)

  const handleSubmit = () => {
    setRows(rowsRef.current.value)
    setColumns(columnsRef.current.value)
    console.log(rows, columns)
  }
  // const fetchData = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  // }
  // fetchData()

  return (
    <div>
      <div className='inputs'>
        <div className='form'>
          <label htmlFor='row'>Rows</label>
          <input type='number' name='row' id='row' ref={rowsRef} />
          <label htmlFor='column'>Columns</label>
          <input type='number' name='column' id='column' ref={columnsRef} />
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
      <Table rows={rows} columns={columns} />
    </div>
  )
}

export default App
