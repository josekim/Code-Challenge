import React, { Component } from 'react';
import RenderList from './render_list'
import emails from "../Data"
import {SHOWALL,UNREAD,READ,SEARCHPROMPT} from './search_bar';


class EmailList extends Component {
  constructor(props){
    super(props)
    this.sortList = this.sortList.bind(this);
    this.state={
     emails: [],
     folder: [],
    }
  }
// life cycle - Will Mount related functions
  componentWillMount(){
    this.setState({emails:emails});
    this.buildFolder(emails);
  }
  buildFolder(emails){
    let temp = []
    const length = emails.length;
    for (var i = 0; i < length; i++){
      let folder = emails[i].folder;
      if(temp.indexOf(folder) === -1 ){
        temp.push(folder)
      }
    }
    this.setState({folder: temp});
  }
// Handlers
  checkBoxHandler(key){
      let temparray = this.state.emails.slice();
      const length = this.state.emails.length;
      for (var i = 0; i < length; i++){
        if(temparray[i].email === key){
          temparray[i].organize = !temparray[i].organize;
        }
      }
      this.setState({emails: temparray});
  }
  folderUpdateHandler(folder,key){
      let temparray = this.state.emails.slice();
      const length = this.state.emails.length;
      for (var i = 0; i < length; i++){
        if(temparray[i].email ===key){
          temparray[i].folder = folder;
        }
      }
      this.setState({emails: temparray});
  }
  handleClick(event,property){
    event.preventDefault();
    let temp = this.state.emails.slice();
    temp.sort(this.compareArray(property));
    //comparing arrays idea from http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
    let isSame = (this.state.emails.length === temp.length) && this.state.emails.every(function(element, index) {
    return element[property] === temp[index][property];
    });
    if(isSame) { temp.reverse()}
    this.setState({emails:temp});
}
// used for filtering Colums
  compareArray(property) {  // Got this idea from Stack Overflow http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
  return function(a,b){
  if (a[property] < b[property]) {return -1;}
  if (a[property] > b[property]) {return 1;}
  return 0;
  }
}
// Functions for comparing Search toerm and if categorized.
  isItOrganized(sort,organize){
    if(sort === SHOWALL) { return true; }
    if(sort === UNREAD && organize) { return true;}
    if(sort === READ && !organize){ return true;}
    return false;
  }
  isItSeached(searchTerm,sender){
    if(searchTerm===SEARCHPROMPT) {return true;}
    return sender.toLowerCase().includes(searchTerm.toLowerCase());
  }
// for rendering with Map Function
  sortList(emails){
    const {organize, sender, domain, email, folder} = emails;
      if(this.isItOrganized(this.props.sort, organize)&&this.isItSeached(this.props.searchTerm,sender)) {
      return <RenderList  organize={organize}
                          sender={sender}
                          domain={domain}
                          email={email}
                          folder={folder}
                          folders={this.state.folder}
                          key={email}
                          checkBox={this.checkBoxHandler.bind(this)}
                          folderUpdate={this.folderUpdateHandler.bind(this)}/>;
      }
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="organize"> Organize  </th>
              <th className="thheader" onClick={(event)=>{this.handleClick(event,'sender')}}> Sender </th>
              <th className="thheader" onClick={(event)=>{this.handleClick(event,'domain')}}> Domain </th>
              <th className="thheader" onClick={(event)=>{this.handleClick(event,'email')}}>  Email  </th>
              <th className="thheader" onClick={(event)=>{this.handleClick(event,'folder')}}> Folder </th>
              <th className="table-nocolor"></th>
              <th className="table-blank"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.emails.map(this.sortList)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmailList;