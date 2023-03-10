import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { MdDeliveryDining } from "react-icons/md";
import React from "react";




const SpecialCard = ({ title, price, description, imageSrc, orderLink }) => {
   return (
    <VStack 
    color="black" 
    backgroundColor="#EDEFEE" 
    borderRadius="xl" 
    width='350px'
  > 
    <Image borderRadius="xl" src={imageSrc} alt={title} boxSize = "350px" /> 
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

      <HStack spacing= '0'> 
          <Text color = "black">Order a delivery</Text> 
          <MdDeliveryDining size={30} style={{ color: "#333333",margin: "-250px",}} />
      </HStack> 

  </VStack> 
   );
};

export default SpecialCard;


