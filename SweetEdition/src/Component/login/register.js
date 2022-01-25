import React,{Component} from 'react';
import Header from '../Header';

const RegisterUrl = "https://sweeteditionlogin.herokuapp.com/auth/register";


class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'Pooja',
            phone:'987654321',
            email:'Pooja@gmail.com',
            password:''
        }
    }
    handleSubmit =() =>{
        // var obj = this.state;
        // obj.details = sessionStorage.getItem('menu');
        // delete obj.menuItems
        // console.log(obj)
        fetch(RegisterUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)

        })
        // .then(this.props.history.push('/viewBooking'))
        .then(this.props.history.push('/login'))

    }


   
    

    handleChange = (event) =>{

        this.setState({[event.target.name]:event.target.value})
    }

   
    render(){
        
        return(
            <>
          
            <div className="container">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1>Register Here...</h1>
                    </div>
                    <div className="panel-body">
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name"
                                        value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email"
                                        value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone No</label>
                                        <input className="form-control" name="phone"
                                        value={this.state.phone} onChange={this.handleChange}/>
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
                             <button className="btn btn-warning"  onClick={this.handleSubmit}>Register</button>
                        </div>
                        
                    </div>
                </div>
            </div>  

            </>
           
            
        )
    }

   
    
}
export default Register