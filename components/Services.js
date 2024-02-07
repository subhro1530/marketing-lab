import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Services = () => {
  const sectionStyle = {
    backgroundImage:
      "url('https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/other/ul/g/90/34/90341b6b-a78f-404d-a77d50a280840189.component.xl.ts=1698154123345.png/content/adobe-cms/us/en/topics/iaas/_jcr_content/root/leadspace')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <Box
      id="services"
      py={16}
      textAlign="center"
      color="white"
      width="100vw"
      overflowX="hidden"
      style={sectionStyle}
    >
      <VStack spacing={8}>
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          color="orange"
          fontWeight={300}
        >
          What We Offer?
        </Heading>
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
      </VStack>
    </Box>
  );
};

const ServiceItem = ({ title, description }) => (
  <Box
    bg="rgba(30, 10, 70, 0.5)"
    backdropFilter="blur(15px)"
    p={8}
    borderRadius="md"
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.3)"
    w={{ base: "90%", md: "80%", lg: "60%" }}
  >
    <Heading fontSize="2xl" mb={4}>
      {title}
    </Heading>
    <Text fontSize="lg">{description}</Text>
  </Box>
);

export default Services;
