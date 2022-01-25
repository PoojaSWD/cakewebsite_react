import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {withRouter} from 'react-router-dom';

// const url ="https://sweeteditionlogin.herokuapp.com/auth/userInfo"


class Header extends Component{
    constructor(props){
        super()

        this.state={
            userdata:''
        }
    }
  
    handleLogout =() =>{
        this.setState({userdata:''})
        localStorage.removeItem('userdata')
        localStorage.removeItem('token')
        this.props.history.push('/')

    }


    conditionalHeader = () =>{
        console.log(localStorage.getItem('token'))
        if(localStorage.getItem('token')!== null){
            
            // let data = this.state.userdata;
            // let outputArray = [data.name,data.email,data.phone,data.role]
            // localStorage.setItem('userdata', outputArray)
            return(
                <>
                <div className="btns">
                <button className="btn btn-logged">Hi {localStorage.getItem('name')}</button>
                <button onClick={this.handleLogout} className="btn btn-logout">Logout</button>
                </div>
                
            
               
                </>
                
            )
        }else{
            return(
                <>
                 <div className="btns">
                 <Link to="/login"  type="button" className="btn btn-login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                    <Link to="/register" type="button" className="btn btn-register"><span className="glyphicon glyphicon-user"></span>Sign Up</Link>  
                 </div>
               
            </>
            )

        }
            
        
    }



    render(){
        return(
            <React.Fragment>
              

<nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                         <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                    </button>
                   <Link to="/" className="navbar-brand">SweetEdition</Link>
                   </div>
                    
                   <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
                  {this.conditionalHeader()}
                  </ul>  
                    </div>
                </div>
           </nav>
    
             
            </React.Fragment>
        )
    }
    
   


}


export default withRouter(Header);