import React, { useContext } from "react";
import {useHistory} from "react-router-dom";
//import {PRODUCT_ROUTE} from "../utils/consts"
import {Context} from "../../index";

const AdminProductItem =  ({device}) => {
    const history = useHistory();
    //const {categorys} = useContext(Context);
    // console.log(JSON.stringify(device.company));
    console.log(device);
    return(
       <tr>
            <td>{device.id}</td>
            <td style={{ width: 200,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"}}
            >{device.name}</td>
            <td>{device.price}</td>
            <td>{device.weight}</td>
            <td>{device.count}</td>
            <td>{device.warranty}</td>
            <td>{device.title}</td>
            <td>{device.description}</td>
            <td>{device.category.name}</td>
            <td>{device.company.name}</td>
       </tr>
    );
};

export default AdminProductItem;



{/* <Col md={3}>
<Card style={{width: 185, cursor:"pointer", margin: "auto auto"}} border={'ligth'} className="mt-4 ">
    <Image width={185} height={185} src={process.env.REACT_APP_API_URL + device.img} style={{border:"1px solid #DFDFDF"}}/>
    <div className="d-flex justify-content-between align-items-center mt-1"  
    onClick={()=> history.push(PRODUCT_ROUTE + "/" + device.id)}>
        <div style={{ width: 200,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"}}
        >{device.name}</div>
        <div>{device.price}</div>
    </div>
</Card>
</Col> */}