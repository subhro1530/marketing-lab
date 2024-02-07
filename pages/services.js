// pages/services.js

import {
  Box,
  Image,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import Link from "next/link";
const Footer2 = dynamic(() => import("@/components/Footer2"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const ServiceCard = ({ image, heading, description }) => (
  <Box p={6} borderWidth="1px" borderRadius="md" boxShadow="md">
    <Image src={`/${image}`} alt={heading} />
    <Heading mt={4} fontSize="xl">
      {heading}
    </Heading>
    <Text mt={2}>{description}</Text>
    <NextLink href="https://tidycal.com/mintu/30-mins-discovery" passHref>
      <Button mt={4} colorScheme="orange">
        Schedule A Call
      </Button>
    </NextLink>
  </Box>
);

const Services = () => {
  const services = [
    {
      image: "serv1.png",
      heading: "Email Marketing Automation",
      description:
        "Empower engagement with trends, boost brand positioning, and ensure recall via our email solutions. Retention strategies drive highest ROAS, fostering substantial revenue growth for your brand.",
    },
    {
      image: "serv2.png",
      heading: "Performance Marketing - Amazon, Myntra, Flipkart",
      description:
        "Tap into Amazon, Myntra, Flipkart, and more with our expertise in online marketplaces. Amplify brand visibility and drive sales effectively in top platforms.",
    },
    {
      image: "serv3.png",
      heading: "Performance Marketing - Google",
      description:
        "Tailoring Google strategies for D2C brands, we assess profitability and advise on ad presence, budget, and optimal strategies. Our aim: Surpass your expectations with Google results in 90 days.",
    },
    {
      image: "serv4.png",
      heading: "Performance Marketing - Meta",
      description:
        "Drive D2C growth via streamlined, potent ad solutions. Leveraging Meta for businesses globally, our track record of 29+ crores in revenue demonstrates success. With a daily ad spend of 3k+, expect guaranteed results.",
    },
    {
      image: "serv5.png",
      heading: "WhatsApp Marketing Automation",
      description:
        "Unlock enhanced customer interaction through WhatsApp Marketing Automation with our expertise. Elevate brand visibility and stay ahead in the digital marketing landscape with our support!",
    },
  ];

  return (
    <Box>
      <Navbar />
      <Image mt="85px" src="/services.png" alt="Services" width="100%" />
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        p={6}
      >
        {services.map((service, index) => (
          <GridItem key={index}>
            <ServiceCard {...service} />
          </GridItem>
        ))}
      </Grid>
      <Footer2 />
    </Box>
  );
};

export default Services;
