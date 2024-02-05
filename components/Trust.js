// trust.js

import React from "react";
import { Box, Text, Heading, Image, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NextLink from "next/link";

const Trust = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : ""}
    >
      <Box
        p={{ base: 4, md: 8 }}
        textAlign="center"
        bg="rgba(255, 255, 255, 0.9)"
        color="rgba(0, 0, 0, 0.8)"
        mt={8}
        border="2px solid #FFAE34"
        borderRadius="10px"
      >
        <Box p={4} bg="rgba(255, 255, 255, 0.7)" borderRadius="10px">
          <Text fontSize="lg" mb={4} fontStyle={"italic"}>
            You Could Relate With Even A Single Point, Keep Reading. But, Here
            Comes The Big Question.
          </Text>
          <Text
            fontSize="3xl"
            borderBottom="2px solid orange"
            color="black"
            pb={8}
          >
            Why should you even spend your time reading this any further and
            trusting us?
          </Text>
        </Box>
        <Text fontSize="3xl" mt={6}>
          Enough of words, now let&apos;s talk in numbers, shall we?
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "5xl" }}
          color="#FFAE34"
          fontWeight="bold"
          display="inline-block"
          mr={4}
          ml={4}
        >
          {" "}
          5.6 Lacs To 52.18 Lacs{" "}
        </Text>
        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          fontWeight=""
          mt={2}
          textTransform="uppercase"
          color="black"
          display="inline-block"
        >
          Within 120 Days
        </Heading>{" "}
        <Flex
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          mt={8}
        >
          {/* Image 1 */}
          <Box m={2}>
            <Image src="/ad1.png" alt="Ad 1" height={800} />
          </Box>
          {/* Image 2 */}
          <Box m={2}>
            <Image src="/ad2.png" alt="Ad 2" height={800} />
          </Box>
        </Flex>
        <Box mt={8}>
          <NextLink href="https://tidycal.com/mintu/30-mins-discovery" passHref>
            <Button
              as="a"
              variant="solid"
              colorScheme="orange"
              size="lg"
              _hover={{ transform: "scale(1.1)" }}
            >
              SCHEDULE YOUR FREE AUDIT
            </Button>
          </NextLink>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Trust;
