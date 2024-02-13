import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import {
  FaRegLightbulb,
  FaBullhorn,
  FaChartLine,
  FaCheckCircle,
  FaMoneyBillAlt,
} from "react-icons/fa";

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
        background: " center center/cover no-repeat",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(10px)",
      }}
    >
      <Box
        color="dark"
        p={8}
        textAlign="center"
        borderRadius="md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100vw"
        bg="rgba(255,255,255,0.6)"
        // boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      >
        <Heading
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="normal"
          mb={10}
          color="orange"
        >
          Aiming For an Improved ROAS?
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={8} color="dark">
          We are here to make it happen. Most of our clients experience a 40%
          improved ROAS within 30 days.
        </Text>

        <VStack
          spacing={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          justify="center"
        >
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
              icon={<FaRegLightbulb />}
            />
            <Question
              title="Want To Stay Informed Without Constant Follow-Ups?"
              description="We make sure that you are always in the loop with detailed analytics & regular updates"
              icon={<FaBullhorn />}
            />
            <Question
              title="Tired Of All Talk, No Delivery?"
              description="No vague promises here - only numbers that speak for themselves"
              icon={<FaChartLine />}
            />
          </Box>
          <Box
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            <Question
              title="Failed Execution Resulting In Campaign Failure?"
              description="From strategy to execution, our team has expertise in it all"
              icon={<FaCheckCircle />}
            />
            <Question
              title="Ad Spends Not Matching Expected Outcomes?"
              description="Well, we work hard to not just meet but exceed your expectations"
              icon={<FaMoneyBillAlt />}
            />
          </Box>
        </VStack>

        <a
          href="https://tidycal.com/mintu/30-mins-discovery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button colorScheme="orange" size="lg" px={10} py={8} mt="80px">
            Schedule A Free Strategy Call
          </Button>
        </a>
      </Box>
    </animated.div>
  );
};

const Question = ({ title, description, icon }) => {
  return (
    <Box
      color="dark"
      p={6}
      borderRadius="md"
      
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backdropFilter="blur(5px)"
      bgColor="rgba(255,255,255,0.8)"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
    >
      <Box
        mb={2}
        border="2px solid orange"
        borderRadius="50px"
        padding={5}
        color="orange"
        fontSize="4xl"
        textAlign="center"
      >
        {icon}
      </Box>
      <Heading color="orange" fontSize="xl" fontWeight="" mb={2}>
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
    </Box>
  );
};

export default Questions;
