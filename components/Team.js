import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Team = () => {
  // Define team members with their image names and positions
  const teamMembers = [
    { name: "Mintu", position: "Founder", image: "Founder.png" },
    { name: "Ashish", position: "Co Founder", image: "Co-Founder.png" },
    { name: "Vatsala", position: "Operations Manager", image: "1.png" },
    { name: "Srishti", position: "HR Manager", image: "2.png" },
    { name: "Sourav", position: "Media Buyer Lead", image: "3.png" },
    { name: "Sayan", position: "Sales Executive", image: "4.png" },
    { name: "Sausthab", position: "Junior Media Buyer", image: "5.png" },
    { name: "Ritabrata", position: "Junior Media Buyer", image: "6.png" },
    { name: "Rekha", position: "Ad Designer", image: "7.png" },
    { name: "Ratnesh", position: "Google Media Buyer Lead", image: "8.png" },
    { name: "Nilesh", position: "Google Sr. Media Buyer", image: "9.png" },
    { name: "Namrata", position: "Junior Ad Designer", image: "10.png" },
    { name: "Monalisa", position: "Copywriting Intern", image: "11.png" },
    { name: "Jhalak", position: "Junior Media Buyer", image: "14.png" },
    { name: "Ayushi", position: "Digital Marketing Intern", image: "16.png" },
    { name: "Avi", position: "Marketplace Team lead", image: "17.png" },
    { name: "Ananya", position: "Junior Media Buyer", image: "21.png" },
    { name: "Josh", position: "Account Manager", image: "22.png" },
    { name: "Namrata Bonder", position: "Senior Media Buyer", image: "25.png" },
    { name: "Somnath", position: "Media Buyer", image: "26.png" },
  ];

  return (
    <Box
      width="100vw"
      overflowX="hidden"
      py={8}
      px={5}
      textAlign="center"
      background="white"
    >
      <Heading as="h1" fontSize={50} mb={8}>
        Our Team
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={6}
        align="center"
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderColor="gray.200"
            p={4}
            borderRadius="md"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
          >
            <Image src={`/team/${member.image}`} alt={member.name} mb={4} />
            <Text fontSize="lg" fontWeight="medium">
              {member.name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {member.position}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Team;
