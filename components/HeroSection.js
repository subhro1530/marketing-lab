import React from "react";
import { Box } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <video
        autoPlay
        muted
        loop
        preload="auto"
        aria-label="Market Lab Video"
        loading="lazy"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      >
        <source src="/vdo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default HeroSection;
