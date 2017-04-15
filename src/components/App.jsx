import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/profile.jsx'
import Search from './github/search.jsx'



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: 'dayoadediran',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }
  ///Get User Data from github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData:data});
        }.bind(this),
      error: function(xhr,status,srr){
        this.setState({userName:null});
        alert(err);
      }.bind(this)
    });
  }

  //Get User Repos
  getUserRepos(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userRepos:data});
        }.bind(this),
      error: function(xhr,status,srr){
        this.setState({userName:null});
        alert(err);
      }.bind(this)
    });

  }

handleFormSubmit(userName){
  this.setState({userName: userName},function(){
    this.getUserData();
    this.getUserRepos();
  });
}
  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return(
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
        <Profile {...this.state} />
      </div>
    )
  }
};

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret:React.PropTypes.string,
};
App.defaultProps ={
  clientId: '2b6e3e1b6cc42e99b6af',
  clientSecret:'a05f60c8f67a1fef8e04590c0e6b631a8f3ff728',
}
export default App;
