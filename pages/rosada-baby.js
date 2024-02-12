import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import { Box, Heading, Text, Image, Grid, GridItem } from "@chakra-ui/react";

const RosadaBaby = () => {
  return (
    <Box>
      <Navbar />
      <Box mt="85px" p={8}>
        <Image
          src="/rosada.png"
          alt="Rosada Baby Image"
          mb={4}
          borderRadius="md"
        />
        <Heading as="h1" fontSize="4xl" mb={4}>
          Rosada Baby
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          <GridItem>
            <Box>
              <Heading as="h2" fontSize="xl" mb={4}>
                Their Story
              </Heading>
              <Text mb={4}>
                Rosada is a brand engaged in designing, manufacturing, and
                selling personalized gift items primarily for babies and kids.
                They also have a small section for grownups focusing on the fact
                that "every person has a child within". The sole objective of
                the brand is to create high-quality simple day-to-day products
                and groom them with the eyes of an expert and the emotions of a
                child. This makes their products unique and personalized. Every
                product is a bundle of happiness, smiles, and memories for
                loving babies, kids, and their parents.
              </Text>
              <Heading as="h2" fontSize="xl" mb={4}>
                Campaign Objective
              </Heading>
              <ul>
                <li>
                  Campaign Setup on both Meta and Google for comprehensive
                  audience coverage.
                </li>
                <li>
                  Appealing creatives to capture the audience's attention.
                </li>
                <li>Monitor and optimize campaigns for maximum ROAS.</li>
                <li>
                  Targeting parents of Tier 1 and Tier 2 cities, the most
                  converting audience segments.
                </li>
              </ul>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="/ros1.png"
              alt="Rosada Baby Image 1"
              mb={4}
              borderRadius="md"
            />
          </GridItem>
        </Grid>
        <Box mt={8}>
          <Image
            src="/rosada-baby-campaign.jpg"
            alt="Rosada Baby Campaign Image"
            mb={4}
            borderRadius="md"
          />
          <Heading as="h2" fontSize="xl" mb={4}>
            Actionable Strategies
          </Heading>
          <ul>
            <li>Leveraging MOF/BOF Audience</li>
            <li>Crafting Perfect Creatives</li>
            <li>Tailored Audiences</li>
            <li>Testing and Scaling</li>
            <li>Proper Campaign Setup with Google and Meta</li>
          </ul>
        </Box>
      </Box>
      <Footer2 />
    </Box>
  );
};

export default RosadaBaby;
