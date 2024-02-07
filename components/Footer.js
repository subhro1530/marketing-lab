// footer.js

import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      p={4}
      textAlign="center"
      width="100vw"
      overflowX="hidden"
      bg="gray.800"
      color="white"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-around"
      alignItems="center"
    >
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={200} />

      {/* Copyright */}
      <Box my={8}>
        <Text fontSize="sm" color="#feae33">
          Copyright 2024 - Marketing Lab
        </Text>

        {/* Description */}
        <Text fontSize="lg" maxWidth="300px">
          Your Digital Marketing Partner: We Transform Dreams into Results.
          Let&apos;s Grow Together.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
