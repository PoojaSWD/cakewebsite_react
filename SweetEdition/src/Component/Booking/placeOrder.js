import React,{Component} from 'react';
import './placeorder.css';

import {Link} from 'react-router-dom';
import axios from 'axios';

const menuUrl = "https://sweetedition.herokuapp.com/cake";
const PlaceOrderUrl = "https://sweetedition.herokuapp.com/placeorder";

const itemUrl="https://sweetedition.herokuapp.com/cakedetails";

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*10000),
            // hotel_name:this.props.match.params.restName,
            name:localStorage.getItem('name')?localStorage.getItem('name'):'',
            phone:localStorage.getItem('phone')?localStorage.getItem('phone'):'',
            email:localStorage.getItem('email')?localStorage.getItem('email'):'',
            // cost:0,
            // address:'Pune',
           

            cakeitem:''
        }
    }
    handleSubmit =() =>{
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var amount = document.getElementById("amount").value;
        var id = document.getElementById("id").value;
        var prodname = document.getElementById("prodname").value;
        var itemid = document.getElementById("itemid").value;

        var obj = {
            name:name,
            email:email,
            phone:phone,
            address:address,
            amount:amount,
            id:id,
            prodname:prodname,
            itemid:itemid



        };
       
        console.log(obj)
        fetch(PlaceOrderUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)

        })
        // .then(this.props.history.push('/viewBooking'))
        .then(console.log('Going for Payment'))

    }


   

    handleChange = (event) =>{

        this.setState({[event.target.name]:event.target.value})
    }

   
    render(){
        if(localStorage.getItem('token') == null){
            return(
                <>
                
                <center>
                <h2>Login first to place booking</h2>
                </center>
               
                </>
            )
           
            
        
        }
        return(
            <>
        
            <div className="container">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1>Place Order Here...</h1>
                    </div>
                    <div className="panel-body">
                        <form action="https://sweetpayment.herokuapp.com/paynow" method="POST">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" id="name" name="name"
                                        value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" id="email" name="email"
                                        value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone No</label>
                                        <input className="form-control" id="phone" name="phone"
                                        value={this.state.phone} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" id="address" name="address"
                                        value={this.state.address} onChange={this.handleChange}/>
                                    </div>
                                </div>
                             </div>

                             <div className="imgplace">
                                 <img src={this.state.cakeitem.Image}/>
                                 <div className="placeprod">
                                 {this.state.cakeitem.product_name} 
                                 </div>
                                 <div className="placecost">
                                 Total Cost Rs.{this.state.cakeitem.prize}
                                 </div>
                             </div>
                             
                            <input type="hidden" name="amount" id="amount" value={this.state.cakeitem.prize}/>
                            <input type="hidden" name="id" id="id" value={this.state.id}/>
                            <input type="hidden" name="prodname" id="prodname" value= {this.state.cakeitem.product_name}/>
                            <input type="hidden" name="itemid" id="itemid" value={localStorage.getItem('itemid')}/>
                            {/* <div className="totalcost">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Total Cost is Rs.{this.state.cost}</h3>
                                    </div>
                                </div>

                            </div> */}

                             <button className="btn btn-warning" type="submit" onClick={this.handleSubmit}>Place Order</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>  
            
            </>
            
        )
    }

    componentDidMount(){
    


        axios.get(`${itemUrl}/${localStorage.getItem('itemid')}`).then((res)=>{
            this.setState({cakeitem:res.data[0]})
        })
    }

    
}
export default PlaceOrder