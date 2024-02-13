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
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";

const ServiceCard = ({ image, heading, description }) => (
  <Box p={6} borderRadius="md" boxShadow="md">
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
      <Box
        bgImage="url('https://img.freepik.com/free-photo/collage-finance-banner-concept_23-2150608848.jpg?w=1060&t=st=1707826463~exp=1707827063~hmac=b74dff8519c24de716eedac6d6192b9db712d86be2635ef3aad4c7591f10dd0a')"
        bgAttachment="fixed"
        bgSize="cover"
      >
        <Image mt="85px" src="/services.png" alt="Services" width="100%" />
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          p={6}
        >
          {services.map((service, index) => (
            <GridItem bgColor="rgba(255,255,255,0.5)" key={index}>
              <ServiceCard {...service} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer2 />
    </Box>
  );
};

export default Services;
