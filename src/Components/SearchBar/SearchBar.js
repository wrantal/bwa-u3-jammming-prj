import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

  }
  handleTermChange(e){
    this.setState({term: e.target.value});

  }
  handleSearch(){
    this.props.onSearch(this.state.term)
  }
  render(){
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    )
  }
}
export default SearchBar;
