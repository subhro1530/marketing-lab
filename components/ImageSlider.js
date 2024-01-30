// components/ImageSlider.js

import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ImageSlider = ({ images, activeIndex }) => {
  return (
    <Box overflow="hidden" position="relative" height="200px">
      {images.map((image, index) => (
        <Box
          key={index}
          display={index === activeIndex ? "block" : "none"}
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
        >
          <Image
            src={image}
            alt={`Partner ${index + 1}`}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageSlider;
