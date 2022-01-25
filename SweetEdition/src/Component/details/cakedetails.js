import React,{Component} from 'react';
import './cakedetails.css';
import axios from 'axios';
import {Link} from 'react-router-dom';




const Url="https://sweetedition.herokuapp.com/cakedetails"



class Details extends Component{
    constructor(props){
        super(props);

        this.state={
            details:'',
            userItem:''
        }
        
        


    }
   
    addToCart = (data) =>{
        this.setState({userItem:data})
    }

    orderId =[];

    addItem = (id) =>{
        // this.orderId.push(`${id}`)
        // this.props.finalOrder(this.orderId)
        console.log("Hello",id)
        localStorage.setItem("itemid",id)
       
    }

    removeItem = (id) =>{
        // this.orderId.splice(this.orderId.indexOf(id,toString()), 1)
        // this.props.finalOrder(this.orderId)
        
    }

    // renderCart =(orders) =>{
    //     if(orders){
    //         return orders.map((item,index)=>{
    //             return(
    //                 <b key={index}>{item}&nbsp;&nbsp;</b>
    //             )
    //         })
    //     }
    // }


    back =() =>{
        console.log(this.props.history.push)
        this.props.history.push(`/list/${4}`)
    }


    proceed =(id) =>{
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.product_name}`)
    }

    // finalOrder ()={(data) => {this.addToCart(data)}}

    render(){
        let details = this.state.details;
       
        return(
            <>
                <div className="container" id="cakedetailconatainer">
                    <div className="row">
                    
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                            <div className="productimage">
                                <img src={details.Image} className="img-responsive" id="prodimg"/>
                            </div>
                            

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">   
                            <div className="productdetails">
                                <h3 className="proddetailnm">{details.product_name}</h3>
                                <div className="shefword">
                                <div className="chefheading">In Our Chef's Word</div> 
                                <img src="https://i.ibb.co/Ht0vDcC/cheficon.png" className="checficon" alt="cheflogo"/>
                                <p className="subchefheading">{details.sub_despription}</p>
                                </div> 
                                <span id="priseguideline">(Price is inclusive of GST)&nbsp;&nbsp;<h3 id="totalcost">Rs.{details.prize}</h3></span>
                                    <a href="https://wa.me/9175764552?text=Hi! i'm intrested in"  target="_blank"><img className="whatsapping" src="https://i.ibb.co/f9WP2pp/whatsapp.png" alt="whatsapptest"/></a>
                                    
                                    </div>
                                    <div className="cakeweight" >
                                    Cake Weight:{details.weight}
                                    </div>
                                   
                                </div>
                                <h4 id="proddes">Product Description</h4>
                            
                               <p id="cakedes"> {details.Desription}</p>
                                
                               <div className="allbtn">

                               <button className="btn btn-success" id="cartadd" onClick={()=>{this.addItem(details.id)}}>Add to cart</button>
                               <button className="btn btn-warning" id="checkout" onClick={this.proceed}>Buy Now</button>
            
                               </div>
                              
                               <button className="btn btn-info" onClick={this.back}>Back</button>
                                
                               
                                
                            </div>
                           
                        </div>
                    
               </div>

                 </>  
                            
                                
                                
                       

        )
    }

    componentDidMount(){
        
        const cakedetailId = this.props.match.params.id;
        axios.get(`${Url}/${cakedetailId}`)
        .then((res)=>{
            this.setState({details:res.data[0]})
        })
    }
}
export default Details