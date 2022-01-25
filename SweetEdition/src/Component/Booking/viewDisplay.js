import React from 'react';

const ViewDisplay =(props) =>{
    const renderTable = ({bookData}) =>{
        if(bookData){
            return bookData.map((item)=>{
                return(
                    <tr key={item.itemid}>
                        <td>{item.id}</td>
                        <td>{item.prodname}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.amount}</td>
                        <td>{item.date}</td>
                        <td>{item.bank}</td>
                        <td>{item.bank_status}</td>
                    </tr>
                )
            })
        }
    }
    return(
            <div className="container">
                <center>
                    <h2>Orders List</h2>
                </center>
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Cake Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Prize</th>
                        <th>Date</th>
                        <th>Bank</th>
                        <th>Status</th>

                    </tr>
                    </thead>
                    <tbody>
                    {renderTable(props)}
                   
                    </tbody>
                </table>
            </div>
    )
    
}
export default ViewDisplay;