import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from 'react-bootstrap';


const CategoryBar = observer(() =>{
    const {device} = useContext(Context);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedCompany, setSelectedCompany] = useState();
    const [companys, setCompanys] = useState();
    const [categorys, setCategorys] = useState();

    const resetSelected = () => {
        device.setSelectedCategory([]);
        device.setSelectedCompany([]);
    }
    return (
        <div>
            <ListGroup>
                {device.categorys.map( category => 
                    <ListGroup.Item 
                        variant="light"
                        style={{transition: 'all 0.4s ',cursor:"pointer",userSelect: "none",}}
                        active ={category.id === device.selectedCategory.id}
                        onClick = {() => device.setSelectedCategory(category)}
                       
                        key={category.id}
                    >
                        {category.name}
                    </ListGroup.Item>)}

                    <Button onClick={resetSelected}>Скинути налаштування</Button>
            </ListGroup>
        </div>
    );
});

export default CategoryBar;


    