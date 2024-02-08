import React from "react";
import { Box, Heading, Text, VStack, Grid } from "@chakra-ui/react";

const Services = () => {
  const sectionStyle = {
    backgroundImage:
      "url('https://img.freepik.com/premium-vector/full-color-gradient-abstract-background-orange-backgrounds-vector-illustration_542898-61.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <Box
      id="services"
      py={16}
      px={10}
      textAlign="center"
      color="white"
      width="100vw"
      overflowX="hidden"
      style={sectionStyle}
    >
      <VStack spacing={8}>
        <Heading
          fontSize={{ base: "6xl", md: "6xl" }}
          color="white"
          fontWeight={300}
        >
          What We Offer?
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          justifyContent="center"
        >
          <ServiceItem
            title="Media Planning & Buying"
            description="Everything from tailoring strategies to the target audience, to optimizing campaigns for specific objectives like brand awareness, engagement, conversions, or sales."
          />
          <ServiceItem
            title="Retention Marketing"
            description="Through personalized WhatsApp & Email campaigns to engagement strategies, we help you build lasting connections with your existing customers."
          />
          <ServiceItem
            title="Campaign Setup & Optimization"
            description="Elevate your brand’s performance and achieve optimal results through our expertise in targeted setup and ongoing optimization."
          />
          <ServiceItem
            title="Analytics & Reporting"
            description="From comprehensive data analysis to concise regular reports, we turn raw data into strategic decisions."
          />
        </Grid>
      </VStack>
    </Box>
  );
};

const ServiceItem = ({ title, description }) => (
  <Box
    bg="rgba(255, 165, 0, 0.4)"
    backdropFilter="blur(15px)"
    p={8}
    borderRadius="md"
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.3)"
    textAlign="left"
    height="100%"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Heading fontSize="2xl" mb={4} color="white">
      {title}
    </Heading>
    <Text fontSize="lg" color="white">
      {description}
    </Text>
  </Box>
);

export default Services;
