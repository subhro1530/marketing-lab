import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Team = () => {
  // Define team members with their image names and positions
  const teamMembers = [
    {
      name: "Ananya",
      position: "Junior Media Buyer",
      image: "Ananya-JuniorMediaBuyer.jpg",
    },
    {
      name: "Avi",
      position: "Media Buyer Team Leader",
      image: "Avi-MediaBuyerTeamLeader.png",
    },
    {
      name: "Ayushi",
      position: "Digital Marketing Intern",
      image: "Ayushi-DigitalMarketingIntern.jpg",
    },
    {
      name: "Jhalak",
      position: "Junior Media Buyer",
      image: "Jhalak-JuniorMediaBuyer.png",
    },
    {
      name: "Josh",
      position: "Account Manager",
      image: "Josh-AccountManager.jpeg",
    },
    {
      name: "Monalisa",
      position: "Copywriting Intern",
      image: "Monalisa-CopywritingIntern.png",
    },
    {
      name: "Namrata Bonder",
      position: "Senior Media Buyer",
      image: "NamrataBonder-SrMediaBuyer.jpg",
    },
    {
      name: "Namrata",
      position: "Junior Ad Designer",
      image: "Namrata-JuniorAdDesigner.JPG",
    },
    {
      name: "Nilesh",
      position: "Senior Media Buyer",
      image: "NILESH-SeniorMedaBuyer.jpg",
    },
    {
      name: "Ratnesh",
      position: "Media Buyer Team Leader",
      image: "Ratnesh-MediaBuyerTeamLeader.jpeg",
    },
    { name: "Rekha", position: "Ad Designer", image: "Rekha-AdDesigner.jpg" },
    {
      name: "Ritabrata",
      position: "Junior Media Buyer",
      image: "Ritabrata-JuniorMediaBuyer.png",
    },
    {
      name: "Saini",
      position: "Junior Media Buyer",
      image: "Saini-JuniorMediaBuyer.JPG",
    },
    {
      name: "Sausthab",
      position: "Junior Media Buyer",
      image: "Sausthab-JuniorMediaBuyer.JPG",
    },
    {
      name: "Sayan",
      position: "Sales Executive",
      image: "Sayan-SalesExecutive.jpg",
    },
    {
      name: "Sourav",
      position: "Media Buyer Lead",
      image: "Sourav-MediaBuyerLead.jpg",
    },
    {
      name: "Srishti",
      position: "HR Manager",
      image: "Srishti-HRManager.jpeg",
    },
  ];

  return (
    <Box py={8} px={5} textAlign="center">
      <Heading mb={8}>Our Team</Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={6}
      >
        {teamMembers.map((member, index) => (
          <Box key={index} borderWidth="1px" borderColor="gray.200" p={4}>
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
