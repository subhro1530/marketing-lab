// trust.js

import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Trust = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const trustSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={trustSectionVariants}
    >
      <Box
        p={{ base: 4, md: 8 }}
        textAlign="center"
        border="2px solid rgba(0, 0, 0, 0.2)"
        borderRadius="md"
        mt={8}
      >
        <Text fontSize="xl" mb={4}>
          You Could Relate With Even A Single Point, Keep Reading.
        </Text>
        <Text fontSize="lg" mb={6}>
          But, Here Comes The Big Question.
        </Text>

        <Box borderBottom="2px solid orange" mb={8}>
          <Text fontSize="xl">
            Why should you even spend your time reading this any further and
            trusting us?
          </Text>
        </Box>

        <Text fontSize="xl" mb={6}>
          Let’s Talk About Some Real Numbers..
        </Text>

        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          color="black"
          display="inline-block"
          mr={4}
          fontWeight="bold"
        >
          5.6 Lacs
        </Heading>
        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          color="orange"
          display="inline-block"
          fontWeight="bold"
        >
          To 52.18 Lacs
        </Heading>
        <Text fontSize="xl" display="inline-block" ml={4} mb={8}>
          Within 120 Days
        </Text>

        <Box>
          <Image
            src="/trust-image1.jpg"
            alt="Trust Image 1"
            boxSize="300px"
            mr={4}
            mb={4}
          />
          <Image
            src="/trust-image2.jpg"
            alt="Trust Image 2"
            boxSize="300px"
            mb={4}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Trust;
