import * as React from "react"; 
import { VStack } from "@chakra-ui/react"; 
 
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
 return ( 
   <VStack 
     backgroundColor={boxProps.backgroundColor} 
     color={isDarkBackground ? "white" : "black"} 
   > 
     <VStack maxWidth="60%" minHeight="40vh" {...boxProps}> 
       {children} 
     </VStack> 
   </VStack> 
 ); 
}; 
 
export default FullScreenSection;