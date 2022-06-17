import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Row, Card, Button} from 'react-bootstrap';
import {Context} from "../index";

const CompanyBar = observer( ()=>{
    const {device} = useContext(Context);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedCompany, setSelectedCompany] = useState();
    return(
            <div className="d-flex " style={{justifyContent:"space-between", minWidth:120, flexWrap: "wrap"}}>
                {device.companys.map( company=>
                    <Card 
                        variant="link"
                        style={{minWidth:120, alignItems:"center",userSelect: "none",
                        transition: 'all 0.4s ',cursor:"pointer", border:"1px solid #DEDEDE", color:"#636464"}}
                        key={company.id}  
                        className="p-3 ml-3" 
                        onClick = {() => device.setSelectedCompany(company)}
                        bg = {company.id === device.selectedCompany.id ? "primary": "ligth"}
                        text = {company.id === device.selectedCompany.id ?  'white': 'ligth'}
                    >
                        {company.name}
                    </Card >    
                )}
            </div>
    )
})

export default CompanyBar;

