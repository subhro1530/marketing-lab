import { Box, Heading, Text, Button, Image, Link } from "@chakra-ui/react";

const ResultCard = ({ image, heading, description, link }) => (
  <Box
    bg="white"
    p={8}
    borderRadius="md"
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
    transition="transform 0.3s ease-in-out"
    _hover={{ transform: "scale(1.05)" }}
    cursor="pointer"
  >
    <Image src={image} alt="Result Image" borderRadius="8px" mb={4} />
    <Heading fontSize="xl" fontWeight="" mb={4} color="#FFAE34">
      {heading}
    </Heading>
    <Text fontSize="lg" color="#333333">
      {description}
    </Text>
    {/* Use Next.js Link component for client-side navigation */}
    <Link href={link}>
      <Button colorScheme="orange" size="md" mt={6}>
        Learn More
      </Button>
    </Link>
  </Box>
);

export default ResultCard;
