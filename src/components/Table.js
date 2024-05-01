import React, { useState } from "react";
import data from "../data.json";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPowerOff, faTrash } from "@fortawesome/free-solid-svg-icons";



function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchColumn, setSearchColumn] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectAll, setSelectAll] = useState(false);

  const itemsperpage = 10;
  const filteredData = data.filter((item) => {
    if (searchColumn) {
      return item[searchColumn].toString().toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  const lastindex = currentPage * itemsperpage;
  const firstindex = lastindex - itemsperpage;
  const records = filteredData.slice(firstindex, lastindex);
  const totalpages = Math.ceil(filteredData.length / itemsperpage);
  const numbers = [...Array(totalpages + 1).keys()].slice(1);

  

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  let sortedRecords = [...records];
  if (sortConfig.key) {
    sortedRecords.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }
  function nextPage() {
    if (currentPage !== totalpages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  
  
  
  function handleSearch() {
    const filteredData = data.filter((item) => {
      if (searchColumn) {
        return item[searchColumn].toString().toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    });

    const totalpages = Math.ceil(filteredData.length / itemsperpage);
    setCurrentPage(1);
  }

  

  return (
    // <div className="Table">
    <main className="table">
      <section className="table__header">
        <div className="search-div">
          <select value={searchColumn} onChange={(e) => setSearchColumn(e.target.value)}>
            <option value="">Select</option>
            <option value="org_id">Organisation ID</option>
            <option value="org_name">Organisation Name</option>
            {/* Add other options as needed */}
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button className="header-button" onClick={()=>handleSearch()}>
            Search
          </button>
        </div>
        <div className="button-div">
          <button className="header-button">Add New Organisation</button>
          <button className="header-button">Import</button>
          <button className="header-button">Export</button>
        </div>
      </section>

      <section className="table__body">
        <table >
          <thead>
            <tr>
              <th > <input type="checkbox"/></th>
              <th onClick={() => handleSort('org_id')}>Organisation ID</th>
              <th onClick={() => handleSort('org_name')}>Organisation Name</th>
              <th onClick={() => handleSort('type')}>Type</th>
              <th onClick={() => handleSort('reg_date')}>Registration Date</th>
              <th onClick={() => handleSort('email')}>Email</th>
              <th onClick={() => handleSort('avalibility')}>Avaliablity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedRecords.map((i) => (
              <tr key={i.id}>
                <td><input type="checkbox"/></td>
                <td>{i.org_id}</td>
                <td>{i.org_name}</td>
                <td>{i.type}</td>
                <td>{i.reg_date}</td>
                <td>{i.email}</td>
                <td>{i.avalibility}</td>
                <td className="icons-action">
                  <FontAwesomeIcon icon={faEdit} style={{color:'#E52B50'}}  className="action-icon"/>
                  <FontAwesomeIcon icon={faTrash}  size='lg' className="action-icon"/>
                  <FontAwesomeIcon icon={faPowerOff} style={{color:'green'}} size='lg' className="action-icon"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      <section className="table__foot">
        <div className="pagination-bar">
          <span className="bar"></span>
          Showing {firstindex + 1} to {lastindex} of {data.length} entries
        </div>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                &lt;
              </a>
            </li>
            {numbers.map((n, i) =>
              i < 2 || i === numbers.length - 1 ? (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changeCurrentPage(n)}
                  >
                    {n}
                  </a>
                </li>
              ) : i === 2 ? (
                <li className="page-item" key={i}>
                  <span className="page-link">&hellip;</span>
                </li>
              ) : null
            )}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                {" "}
                &gt;{" "}
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
    // </div>
  );
}

export default Table;


