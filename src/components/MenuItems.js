import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import SpecialCard from "./SpecialCard";




const MenuItems = () =>{
    return(
        <>
        <HStack >
            {dishes.map((dish)=>(
                <SpecialCard
                key = {dish.title}
                titile = {dish.title}
                description = {dish.description}
                imageSrc= {dish.getImageSrc()}
                />
            ))
            }
        </HStack>
        </>
    );
}

export default MenuItems;