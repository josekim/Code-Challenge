import React, { Component } from 'react';

class RenderList extends Component{
  onChangeHandler(event){
    this.props.checkBox(this.props.email);
  }
  onSelectHandler(event){
    this.props.folderUpdate(event.target.value,this.props.email)
  }
  renderFolder(folder){
    return (
      <option key={folder} value={folder}>{folder}</option>
      );
  }
  render(){
    const {organize, sender, domain, email, folder, folders} = this.props;
    return (
      <tr>
        <td className='organize'>
          <input type="checkBox"
            checked={organize}
            onChange={this.onChangeHandler.bind(this)}>
          </input>
        </td>
        <td className={organize ? "table-sub-sender" : "table-gray-sender"}> {sender} </td>
        <td className={organize ? "table-sub-domain" : "table-gray-domain"}> {domain} </td>
        <td className={organize ? "table-sub-email" : "table-gray-email"}> {email} </td>
        <td className={organize ? "table-sub-folder" : "table-gray-folder"}>
          <select value={folder} onChange={this.onSelectHandler.bind(this)}>
            {organize ? folders.map(this.renderFolder) :this.renderFolder(folder)}
          </select>
        </td>
        <td className={organize ? `${folder.replace(/ /g,'')}` : "table-nocolor"}></td>
        <td className="table-blank"></td>
      </tr>
     );
  }
}
export default RenderList;