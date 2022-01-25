import React,{Component}from 'react';
import {Link} from 'react-router-dom';






const ListingDisplay = (props)  => {
      const  renderData =({restData}) =>{
            if (restData){
                if(restData.length>0){
                    return restData.map((item) =>{
                        return(
                            <>
                            <div key={item.id}>
                            <div className="col-md-4">
                                <div className="card" id="listingcard">
                                    {/* <b>{item.id}</b> */}
                                            <img src={item.Image} className="card-img-top" alt={item.product_name}/>
                                        <div className="card-body">
                                            <center><h4 className="card-title">{item.product_name}</h4></center>
                                            <p className="card-text">Prize: Rs. {item.prize}</p>
                                                <div className="cakebutton">
                                                
                                                <Link className="btn btn-primary" to={`/details/${item.id}`}>Details</Link>
                                                </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                        
                    })
                    }else{
                        return(
                            <div>
                                <h3>No data Found</h3>
                            </div>
                        )
                    } 
        
        
                }else{
                    return(
                        <div>
                            <img src="https://i.ibb.co/LPYQ5c3/loader.gif" alt="loader"/>
                        </div>
                    )
                    
                }
            }     
                    return(
                            <>
                            
                            {renderData(props)}
                        
                            </>
                            
                        
                    )
            
                   
        }

    

export default ListingDisplay