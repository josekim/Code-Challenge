import React, { Component } from 'react';
import _ from 'lodash';
export const READ = "Categorized";
export const UNREAD = "Uncategorized";
export const SHOWALL = "Show All";
export const SEARCHPROMPT = "Search for a sender"


class SearchBar extends Component {
    constructor(props){
      super(props);
      this.state={
        term: SEARCHPROMPT
      }
    }
    onChangeHandler(event){
      this.setState({term:event.target.value})
      this.props.changeSearchTerm(event.target.value);
    }
    onClickHandler(event){
      if(this.props.searchTerm === SEARCHPROMPT) {
        this.setState({term:''})
      }
    }
    sortTermHandler(event){
      this.props.changeSortTerm(event.target.value);
    }
    render() {
      return (
        <div className='search-bar'>
          <select
          value={this.props.sort}
          onChange={this.sortTermHandler.bind(this)}>
          <option value={SHOWALL}>{SHOWALL}</option>
          <option value={UNREAD}>{UNREAD}</option>
          <option value={READ}>{READ}</option>
          </select>
          <input value={this.state.term}
            onClick={this.onClickHandler.bind(this)}
            onChange={this.onChangeHandler.bind(this)}/>
        </div>
      );
    }

}

export default SearchBar;