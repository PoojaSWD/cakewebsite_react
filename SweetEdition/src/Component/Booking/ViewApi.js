import React,{Component} from 'react';
import axios from 'axios';
import ViewDisplay from './viewDisplay';
import Header from '../Header';

const ViewUrl="https://sweetedition.herokuapp.com/cakeorder";
const putUrl ="https://sweetedition.herokuapp.com/updateStatus";

class ViewApi extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:'',
            Status:'Pending'
        }
    }


    render(){
        if(localStorage.getItem('token') == null){
            return(
                <>
               
                <center>
                <h2>Login first to see booking</h2>
                </center>
               
                </>
            )   
        
        }
        return(
            <>
            {/* <Header/> */}
            <ViewDisplay bookData ={this.state.orders}/>
            </>
            
        )
    }

componentDidMount(){
    // console.log("text",this.props)
    if(this.props.location.search){
        
        var qparams = this.props.location.search;
        if(qparams){
            var data = {
                "date": qparams.split('&')[2].split('=')[1],
                "bank_status": qparams.split('&')[0].split('=')[1],
                "bank": qparams.split('&')[3].split('=')[1]
            }
            var id = qparams.split('&')[1].split('=')[1].split('_')[1];
            axios.put(`${putUrl}/${id}`, data).then((res)=>{
                axios.get(`${ViewUrl}?email=${localStorage.getItem('email')}`, {method: 'GET'})
                .then((res) => {
                    this.setState({orders: res.data})
                })
                this.props.history.push('/viewbooking');
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    else{
        axios.get(`${ViewUrl}?email=${localStorage.getItem('email')}`, {method: 'GET'})
        .then((res) => {
            console.log("text",res.data)
            this.setState({orders: res.data})
            
        })
    }



}
}
export default ViewApi;


