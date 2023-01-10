import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./userDetails.css"
function UserDetails() {
  const [data, setData ] = useState([])
const [totalPage, setTotalPage] = useState(2)
  const [page, setPage] = useState(1)
  const [filtertext, setFilterText] = useState("")
  const [filterCheck, setFilter] = useState(false)
  useEffect(()=>{
    getData()
  }, [page])
  const handlePrevious = ()=>{
    if (page == 1) return;
    setPage(page - 1)

    
    
  }
  const handleNext = ()=>{
      if (page == totalPage) return;
      setPage(page+1)
     
     
  }

  const getData = async ()=>{
    setFilter(false)
    let k = await fetch(`http://localhost:3100/user-details?page=${page}`)
    let res = await k.json()
    if(res){
      console.log(res.users)
      setData(res.users)
      setTotalPage(res.totalPages)
    }
  }

  const handleFilter = async ()=>{
    setFilter(true)
     let k = await fetch(`http://localhost:3100/filter-details?filter=${filtertext}`)
    let res = await k.json()
    if(res){
      console.log(res.users)
      setData(res.users)
    
    }
  }

  console.log(totalPage)


  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <input
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
          type="text"
        ></input>
        <button onClick={handleFilter}>Find</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin:"20px"
        }}
      >
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>

          {data.map((item) => (
            <tr>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </table>
      </div>
      {filterCheck ? (
        ""
      ) : (
        <div>
          {page > 1 ? <button onClick={handlePrevious}>Previous</button> : ""}
          {page < totalPage ? <button onClick={handleNext}>Next</button> : ""}
        </div>
      )}
    </div>
  );
}

export default UserDetails