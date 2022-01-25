import React,{Component} from 'react';
import './QuickDisply.css';
import Displaycard from './display';


const url = "https://sweetedition.herokuapp.com/cakecategory";


class QuickDisplay extends Component{
    constructor(props){
        super(props)

        this.state ={
            cakecategory:''
        }
    }

    render(){
        return(
            
            <>

                
            <div className="QuiSearch">
                <div className="row" id="maincard">
                <h1 id="heading">Find your Yummy cake here</h1>
                <Displaycard quickdata={this.state.cakecategory}/>
                </div>
                
            </div>
            <div className="container" id="aboutcontainer">
           
                    <div className="tileComponent1" id="tileComponent1">
                    <img src="https://i.ibb.co/X20SMP0/contact-form.png" alt="cakeimage" />
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            <h3 className="headinginfo">About Us</h3>
                        </div>
                            <div className="componentSubHeading">
                            <p className="subinfo">Sweet Edition was founded by a team of passionate and dedicated bakers who are committed in baking the most delicious cakes and pastries around. Using only the freshest ingredients we can find, you can be sure that you are served the best quality cake you can ever have.</p>
                            
                            <p className="subinfo">We have evolved to become one of a premium distributor and wholesaler for cakes and pastries to some well known resturants, cafes, supermart, hotels and bakery.</p>

                            <p className="subinfo">Our online store is a leading online shop in Singapore providing cakes and gifts deliveries within Singapore. We provide competitive prices, good after sales services and on-time delivery.</p>

                            <p className="subinfo">The Cake Shop provides same day delivery service seven days a week, including Sunday, within Singapore to provide a high level of customer service.</p>

                            <p className="subinfo">Bon Appetite!!</p>
                
                            
                         </div>
                    </div>
            
            </div>



        </>
        )
    }

    
    // call api
    componentDidMount() {
        fetch(url,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({cakecategory:data})
        })

    }
        
      

}

export default QuickDisplay;
