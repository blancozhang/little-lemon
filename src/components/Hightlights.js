import React from "react";
import FullScreenSection from "./FullScreenSection"; 
import { Box, VStack, HStack,Image, Heading } from "@chakra-ui/react"; 
import SpecialCard from "./SpecialCard";
import "../style/Hightlights.css"


const dishes = [

    {   
        getImageSrc: () => require("../images/greek_salad.jpg"),
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        orderLink:"",
    },
    {
        getImageSrc: () => require("../images/bruschetta.jpg"),
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
        orderLink:"",
    },
    {
        getImageSrc: () => require("../images/lemon_dessert.jpg"),
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        orderLink:"",
    }
]

const Hightlights = () =>{
    return (
        <FullScreenSection
        justifyContent = "center"
        alignItems = "flex-start"
        isDarkBackground = {0}
        backgroundColor = "white"
        >
            <HStack spacing='600px'>
                <Heading
                    as = 'h1'
                    size = '4xl'
                    noOfLines={1}>
                    This weeks Specials !
                </Heading>
                <button>ONLINE MENU</button>
            </HStack>

        <HStack spacing = '40px'
        >
            {dishes.map((dish)=>(
                <SpecialCard
                key = {dish.title}
                title = {dish.title}
                price = {dish.price}
                description = {dish.description}
                imageSrc= {dish.getImageSrc()}
                />
            ))
            }

        </HStack>
        </FullScreenSection>
    );
}

export default Hightlights;