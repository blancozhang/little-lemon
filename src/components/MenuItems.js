import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
const dishes = [
    {
        getImageSrc: () => require("../images/photo1.jpg"),
        title:"",
        description:"",
        orderLink:"",
    }
]



const MenuItems = () =>{
    return(
        <>
        <h2>
            Special
        </h2>
        <Box>
            {dishes.map((dish)=>(
                <Card
                key = {dish.title}
                titile = {dish.title}
                description = {dish.description}
                imageSrc= {dish.getImageSrc()}
                />
            ))
            }
        </Box>
        </>
    );
}

export default MenuItems;