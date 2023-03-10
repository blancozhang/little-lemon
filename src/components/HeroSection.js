import React from "react";
import HeroImage from "../images/restauranfood.jpg";
import FullScreenSection from "./FullScreenSection"; 
import { Box, VStack, HStack,Image, Heading } from "@chakra-ui/react"; 
import "../style/HeroSection.css"
const HeroSection= () =>{
    return(
        <FullScreenSection
            justifyContent = "center"
            alignItems = "center"
            isDarkBackground
            backgroundColor = "#495E57">
                <HStack
                spacing="450px">
                    <VStack>
                        <Box
                        w="300px" >
                            <Heading
                            as = 'h1'
                            size = '4xl'
                            noOfLines={1}
                            color = "#f4ce14"
                            >Little Lemon</Heading>
                            <h2>Chicago</h2>
                            <p>
                                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            </p>
                            <button>Reserva a Table</button>
                        </Box>
                    </VStack>
                    <Image 
                    boxSize='300px'
                    objectFit='cover'
                    src={HeroImage}
                    borderRadius = 'xl'
                    alt = "hightlights" />
                </HStack>
        </FullScreenSection>
    );
}

export default HeroSection;