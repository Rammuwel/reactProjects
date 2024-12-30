import React from 'react'
import { useEffect, useState } from "react";
import Suggestions from "./suggesstions";
import './styles.css';


function handleChange(event) {
  const query = event.target.value.toLowerCase();
  setSearchParam(query);
  if (query.length > 1) {
    const filteredData =
      users && users.length
        ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : [];
    setFilteredUsers(filteredData);
    setShowDropdown(true);
  } else {
    setShowDropdown(false);
  }
}

function handleClick(event){
  setShowDropdown(false)
  setSearchParam(event.target.innerText)
  setFilteredUsers([])
}

function SearchAutoCOmpleteApi() {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);



  return (

   <div className='search-auto-complete'>
        <div className='heading'> 
           <h2>Search Auto Complete</h2>
        </div>
        <div>

        </div>
       
   </div>

    
  )
}

export default SearchAutoCOmpleteApi