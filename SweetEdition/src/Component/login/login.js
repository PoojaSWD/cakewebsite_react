import React,{Component} from 'react';
import Header from '../Header'; 
import axios from 'axios';

const loginUrl = "https://sweeteditionlogin.herokuapp.com/auth/login";
const url ="https://sweeteditionlogin.herokuapp.com/auth/userInfo"

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'Pooja@gmail.com',
            password:'',
            message:''
        }
    }
    handleSubmit =() =>{
       

    var obj={
        email: this.state.email,
        password: this.state.password,


    }

    axios.post(loginUrl, obj)
            .then((res) => {
                localStorage.setItem("token",res.data.token);
                // document.getElementById("lmessg").innerText = "Logged in Successfully.";
                // document.getElementById("lmessg").style.color = "green";
                axios.get(url, {
                    headers:{
                        "x-access-token":res.data.token
                    }
                }).then((result) => {
                    console.log("result",result.data)
                    localStorage.setItem("name",result.data.name);
                    localStorage.setItem("email",result.data.email);
                    localStorage.setItem("phone",result.data.phone);
                    // document.getElementById("btn-user").disabled = false;
                    // document.getElementById("btn-user").style.opacity = "0.5";
                    this.props.history.push("/");
                })
                
            })
            .catch((err) => {
                // document.getElementById("lmessg").innerText = err.response.data.token;
                // document.getElementById("lmessg").style.color = "red";
                // document.getElementById("btn-user").style.opacity = "1";
                // document.getElementById("btn-user").disabled = false;
            })

    }


   
    

    handleChange = (event) =>{

        this.setState({[event.target.name]:event.target.value})
    }

   
    render(){
        
        return(
            <>

        
            <div className="container">
                
                <br/>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1>Login Here...</h1>
                    </div>
                    <div className="panel-body">
                      <h3 style={{color:'red'}}>{this.state.message}</h3>  
                        <div className="row">
                            
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email"
                                            value={this.state.email} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                               
                                    <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="form-control" name="password"
                                                value={this.state.password} onChange={this.handleChange}/>
                                            </div>
                                    </div>
                        </div>
                             <button className="btn btn-warning"  onClick={this.handleSubmit}>Login</button>
                    </div>
                        
                </div>
            </div>
            </>
            
          
            
        )
    }

   
    
}
export default Login