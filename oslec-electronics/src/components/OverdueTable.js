// import moment from "moment";
// import { Link } from "react-router-dom";
// import { useAppContext } from "../context/appContext";
// import Wrapper from "../assets/wrappers/CustomerInfo";
// import CustomerInfo from "./CustomerInfo";
// import {Modal, Button} from 'react-bootstrap'
// import { useState,useEffect } from "react";

// const OverdueTable = () => {
//     const {
//         getCustomers,
//         customers,
//       } = useAppContext();
//     useEffect(() => {
//     getCustomers();
//     }, []);

  
  
//   return (
//     <>
//         <h5 className="alert alert-warning  p-3" style={{textAlign: "center"}}>
//             Sir Carlo, 2 Days had passed and it was still pending
//         </h5>
//         <div className="table-body" style={{overflowX : 'auto', fontSize: '14px'}}>
//             <table className="table table-striped table-bordered table-responsive">
//                 <thead style={{ fontSize: 13 }}>
//                     <tr>
//                         <th>TRACKING NUMBER</th>
//                         <th>LAST NAME</th>
//                         <th>FIRST NAME</th>
//                         <th>PRODUCT</th>
//                         <th>PRODUCT DESCRIPTION</th>
//                         <th>SERIAL NO.</th>
//                         <th>BRAND</th>
//                         <th>REPLACEMENT PARTS</th>
//                         <th>FIXING PARTS</th>
//                         <th>DESCRIPTION</th>
//                         <th>ESTIMATE</th>
//                         <th>STATUS</th>
//                         <th>ADDRESS</th>
//                         <th>PRICE</th>
//                         <th>DATE</th>
//                     </tr>
//                 </thead>
//                 <tbody style={{ fontSize: 13 }}>
//                     {customers.map(customer =>{
//                         if(customer.status === 'pending'){

//                             return (
//                             <tr>
//                                 <td>{customer.trackingNumber}</td>
//                                 <td>{customer.lastName}</td>
//                                 <td>{customer.firstName}</td>
//                                 <td>{customer.appliancesType}</td>
//                                 <td>{customer.product}</td>
//                                 <td>{customer.serialNumber}</td>
//                                 <td>{customer.brand}</td>
//                                 <td>{customer.replacedParts}</td>
//                                 <td>{customer.fixingparts}</td>
//                                 <td>{customer.description}</td>
//                                 <td>{`${moment(customer.estimateStart).format("MMM Do YY")} ~ ${moment(customer.estimateEnd).format("MMM Do YY")}`}</td>
//                                 <td>{customer.status}</td>
//                                 <td>{customer.address}</td>
//                                 <td>{customer.price}</td>
//                                 <td>{moment(customer.createdAt).format("MM/DD/YYYY")}</td>
//                             </tr>
//                             )
//                         }
//                     })}
                    
//                 </tbody>
//             </table>
//         </div>
    
//     </>
//   );
// };

// export default OverdueTable;
