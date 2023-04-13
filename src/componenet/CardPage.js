import React, { useEffect, useState } from 'react';
import Card from './Card';
import ReactPaginate from "react-paginate";

function CardPage() {

  const [users,setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [search,setSearch] = useState("");
  const [searchCard, setSearchCard] = useState(users);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;


  const fetchDetails=async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users",
        {
            method:"GET",
            headers:{
                'Content-Type': "application/json"
            }
        });
        const user = await data.json();
        setUsers(user);
  }

  const pageCount = Math.ceil(searchCard.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  const handleSearch=(e)=>{
    if(e.key==="Enter"){
      e.preventDefault();
      setSearch(e.target.value.toLowerCase().trim());
      // console.log(search);
    }
  }

  const handleReset=()=>{
    setSearch("");
  }

  const SearchNoteFill=()=>{
    let notee = users.filter((ele)=>ele.company.name.toLowerCase().includes(search));
      setSearchCard(notee);
  }

  useEffect(()=>{
    fetchDetails();
    SearchNoteFill();
  },[search,users])

  return (
    <>
    <div className="searchBar">
        <div><input type="search" id="search" onKeyDown={handleSearch}  placeholder='Search here...'/></div>
        <div>
          <button type="button" className="btn btn-danger" onClick={handleReset} >Reset</button>
        </div>
    </div>

    <div className='cardPage'>
      {searchCard.slice(pagesVisited, pagesVisited + usersPerPage).map((user)=>{
            return <Card key={user.id} user={user}/>
        })}
    </div>
      <ReactPaginate
        previousLabel={" < "}
        nextLabel={" > "}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    
    </>
  )
}

export default CardPage
