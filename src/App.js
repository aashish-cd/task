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
