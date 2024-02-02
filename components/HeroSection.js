import React from "react";
import { Box } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      height={{ base: "45vh", md: "105vh" }}
      mt="85px"
      width="100vw"
      position="relative"
    >
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
        <source
          src="https://www.marketinglab.in/wp-content/uploads/2023/05/Market-lab.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "0",
          background: "linear-gradient(135deg, transparent, #fdae83)",
        }}
      />
    </Box>
  );
};

export default HeroSection;
