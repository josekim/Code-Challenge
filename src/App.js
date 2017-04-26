import React, { Component } from 'react';
import _ from 'lodash';
import Title from './title';
import EmailList from './email_list';
import SearchBar from './search_bar';
import {SHOWALL,SEARCHPROMPT} from './search_bar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      term : SEARCHPROMPT,
      organize: SHOWALL
    }
  }
  searchTerm(term){
    this.setState({term});
  }
  sortTerm(organize){
    this.setState({organize});
  }
  organizeCheckBox(value){
    console.log(this);
  }
  render(){
    const searchTerm = _.debounce((term) => {this.searchTerm(term)},300);  // referenced this idea from Udemy course
    return (
      <div>
        <Title />
        <SearchBar changeSearchTerm={searchTerm}
                   changeSortTerm={this.sortTerm.bind(this)}
                   searchTerm={this.state.term}
                   sort={this.state.organize}/>
        <EmailList searchTerm={this.state.term}
                   sort={this.state.organize}/>

      </div>
    );
  }
}

export default App;
