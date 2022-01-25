import React from 'react';
import {Link} from 'react-router-dom';

const Displaycard = (props) =>{
    
    const renderCake = ({quickdata}) =>{
        if (quickdata){
            return quickdata.map((item) =>{
                return(
                    
                 <Link to={`/list/${item.id}`} key={item.id}>
                 <div className="col-md-3">
                    <div className="card"> 
                            <img src={item.Image} />
                            <div className="card-body">
                                <h4 className="card-title" id="imgtitle">
                                <center>{item.category} </center>
                                </h4>
                            </div>
                        </div>
                </div>
                </Link>
            
           
                     
                )
            })
        }

    }
  return(
      <div className="container-fluid">
         
          {renderCake(props)}
          </div>
      
  )

}

export default Displaycard