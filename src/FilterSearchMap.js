import React, { Component } from 'react-dom';



//import { Link } from 'react-router-dom';
//import { Route } from 'react-router-dom';


class FilterSearchMap extends Component{
  render(){
      return (
          <div className="searchbar">
              <div className="search-books-bar">
                  <Link to="/" className="close-search" >Close</Link>
                  <div className="search-books-input-wrapper">

                      <input type="text" value={this.state.query} onChange={(event) => this.getQuery(event.target.value)} placeholder="Search by title or author" />

                  </div>
              </div>
              </div>
      )
  }
}

export default FilterSearchMap