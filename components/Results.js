import { Box, Heading, Grid } from "@chakra-ui/react";
import ResultCard from "../components/ResultCard";

const Results = () => {
  const sectionStyle = {
    background:
      "radial-gradient(circle, rgba(255, 206, 34, 0.5) 0%, rgba(255, 255, 255, 1) 100%)",
  };

  return (
    <Box
      id="results"
      width="100vw"
      overflowX="hidden"
      py={16}
      px={5}
      textAlign="center"
      style={sectionStyle}
    >
      <Heading fontSize={{ base: "4xl", md: "5xl" }} color="gray.700" mb={8}>
        Take a Look at How Our Result-Driven Approach Has Helped Our Clients
        Grow
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={8}
        justifyContent="center"
      >
        <ResultCard
          image="cs1.png"
          heading="From Baby Steps to Giant Leaps: How Rosada Baby Rocked the Revenue Charts"
          description="Rosada is a brand engaged in designing, manufacturing and selling Personalised gifts."
          link="/rosada-baby"
        />
        <ResultCard
          image="cs2.png"
          heading="Dorje Achieves 103% Surge in Sessions, and 85% Return Customer Rate"
          description="We left our jobs to revive our family’s heritage Selim Hill Tea."
          link="/dorje"
        />
        <ResultCard
          image="cs3.png"
          heading="Driving 12x Increased Revenue and An 342% Improved ROAS Within 4 Months"
          description="Indulgent. Luxurious. Organic – AULI isn’t just about the products that pamper."
          link="/auli"
        />
      </Grid>
    </Box>
  );
};

export default Results;
