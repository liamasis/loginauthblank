import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Fuck = () => {
  return (
    <>
      <ChakraProvider>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Fuck;
