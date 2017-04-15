import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component{
  onSubmit(e){
    e.preventDefault();
    let userName= this.refs.userName.value.trim()
      if(!userName){
        alert('please enter a usermame');
        return
      }
      this.props.onFormSubmit(userName);
      this.refs.userName.value="";
  }
  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Search Github Users</label>
        <input type="text" ref="userName" className="form-control"/>
      </form>
    )
  }
};


export default Search;
