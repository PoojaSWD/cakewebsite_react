import React,{Component} from 'react';
import './listing.css';
import axios from 'axios';
import ListingDisplay from './listindisplay';



const cakelistUrl = "https://sweetedition.herokuapp.com/category"

class Listing extends Component{
   
    constructor(props) {
        super(props);

        this.state={
            cakelist:'',
            userItem:''
        }
    }

    render(){

        
            return(


                <>
                <div id="main">
                <h3>Find best Option For Magical Cakes</h3>
                {/* <div id="filter">
                        <h2>Filters</h2>
                </div> */}

        
            <div id="content_main">
            <div className="row" id="listingrow">
                
          
            <ListingDisplay restData={this.state.cakelist}/>
            
            
            </div>   
               
            
           
         </div>
    </div> 





               
                   
               
                </>
            )


       
                      

}    
    componentDidMount(){
        var cakelist=[];
        const cakeId = this.props.match.params.id;
        axios.get(`${cakelistUrl}/${cakeId}`)
        .then((res)=>{
            
            this.setState({cakelist:res.data})
        })
    }


}
        
    


export default Listing