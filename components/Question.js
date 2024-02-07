import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";

const Questions = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        ...fadeIn,
        background: "url('bg2.png') center center/cover no-repeat",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(10px)",
      }}
    >
      <Box
        color="dark"
        p={8}
        textAlign="center"
        borderRadius="md"
        bg="rgba(255,255,255,0.6)"
        // boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      >
        <Heading
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="normal"
          mb={10}
          color="dark"
        >
          Aiming For an Improved ROAS?
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={8} color="dark">
          We are here to make it happen. Most of our clients experience a 40%
          improved ROAS within 30 days.
        </Text>

        <VStack spacing={6} align="stretch" justify="center">
          <Box
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            <Question
              title="Wishing For Tailor-Made Ideas That Set Your Brand Apart?"
              description="We turn your vision into reality with custom-crafted strategies for a Brand Journey that’s uniquely yours"
            />
            <Question
              title="Want To Stay Informed Without Constant Follow-Ups?"
              description="We make sure that you are always in the loop with detailed analytics & regular updates"
            />
            <Question
              title="Tired Of All Talk, No Delivery?"
              description="No vague promises here - only numbers that speak for themselves"
            />
            <Question
              title="Failed Execution Resulting In Campaign Failure?"
              description="From strategy to execution, our team has expertise in it all"
            />
            <Question
              title="Ad Spends Not Matching Expected Outcomes?"
              description="Well, we work hard to not just meet but exceed your expectations"
            />
          </Box>
        </VStack>

        <a
          href="https://tidycal.com/mintu/30-mins-discovery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button colorScheme="orange" size="lg" mt={8}>
            Schedule A Free Strategy Call
          </Button>
        </a>
      </Box>
    </animated.div>
  );
};

const Question = ({ title, description }) => {
  return (
    <Box
      color="dark"
      p={6}
      borderRadius="md"
      mt={4}
      backdropFilter="blur(5px)"
      bgColor="rgba(255,255,255,0.8)"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
    >
      <Heading fontSize="xl" fontWeight="" mb={2}>
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
    </Box>
  );
};

export default Questions;
