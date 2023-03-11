import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { MdDeliveryDining } from "react-icons/md";
import React from "react";




const SpecialCard = ({ title, price, description, imageSrc, orderLink }) => {
   return (
    <VStack 
    color="black" 
    backgroundColor="#EDEFEE" 
    borderRadius="16px 16px 0px 0px" 
    width='350px'
  > 
    <img src={imageSrc} alt={title} className = "special-img" /> 
      <HStack > 
        <Heading color= "black" > 
          {title} 
        </Heading>
        <Heading color = "#EE9972">
        {price}
        </Heading> 
      </HStack> 
      <Box color="#64748b" fontSize='2px' padding = '10px' > 
            { description  }
      </Box> 

      <HStack padding='20px' > 
          <a href={orderLink}>Order a delivery</a>
          <MdDeliveryDining size={30} style={{ color: "#333333",}} />
      </HStack> 

  </VStack> 
   );
};

export default SpecialCard;


