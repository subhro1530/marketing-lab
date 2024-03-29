import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Center,
  useDisclosure,
} from "@chakra-ui/react";

const generatePartnerImagePaths = (count) => {
  return Array.from({ length: count }, (_, index) => `${index + 1}.png`);
};

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const partnerImages = generatePartnerImagePaths(4);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % partnerImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex, partnerImages.length]);

  const imageSize = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const slideHeight = "500px";
  const slideWidth = `calc(100% / ${Math.min(partnerImages.length, 4)})`;

  // React-spring animations
  const { opacity } = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust animation duration as needed
  });

  return (
    <Box
      maxWidth="100vw"
      height={{ base: "auto", md: "80vh" }}
      overflow="hidden"
    >
      <animated.div style={{ opacity }}>
        <Box
          bg="#f0eeeb"
          p={{ base: 1, md: 8 }}
          height={{ base: "35vh", md: "auto" }}
          textAlign="center"
          zIndex={50}
        >
          <Heading
            mt={5}
            fontSize={{ base: "xl", md: "3xl" }}
            fontWeight="bold"
            pb={3}
          >
            GROWTH PARTNERS TO SOME OF TOP D2C BRANDS IN INDIA
          </Heading>
          <Text
            fontSize={{ base: "2xl", md: "5xl" }}
            mt={-2}
            pb={2}
            color="#FFAE34"
            display="inline-block"
          >
            <Text>INCLUDING 12</Text> <br></br>
            <Text mt={{ base: "-45px", md: "-90px" }}>
              SHARK TANK BRANDS
            </Text>{" "}
          </Text>

          <Box
            mt={{ base: "40px", md: "0" }}
            position="relative"
            height={slideHeight}
            overflow="hidden"
          >
            <Flex
              zIndex={80}
              width={`${partnerImages.length * 100}%`}
              transform={`translateX(-${
                activeIndex * (100 / partnerImages.length)
              }%)`}
              transition="transform 0.5s ease-in-out"
            >
              {partnerImages.map((image, index) => (
                <Box key={index} flex={`0 0 ${slideWidth}`} boxSize="100%">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    {...imageSize}
                  />
                </Box>
              ))}
            </Flex>

            <Center position="absolute" bottom="-50px" width="100%">
              {partnerImages.map((_, index) => (
                <Box
                  key={index}
                  boxSize="4"
                  zIndex={{ base: "-10", md: "100" }}
                  mx={1}
                  bg={index === activeIndex ? "orange.500" : "gray.200"}
                  borderRadius="full"
                  onClick={() => setActiveIndex(index)}
                  cursor="pointer"
                />
              ))}
            </Center>
          </Box>
        </Box>
      </animated.div>
    </Box>
  );
};

export default Partners;
