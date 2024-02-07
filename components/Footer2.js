import React from "react";
import { Box, Text, Input, Flex, Link, Image } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer2 = () => {
  return (
    <Box bg="gray.100" py={10} width="100vw" overflowX="hidden" px={8} borderTop="1px solid #eaeaea">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        align="center"
      >
        {/* Left side content */}
        <Flex
          flexDir="column"
          flex="1"
          mr={{ base: 0, md: 8 }}
          mb={{ base: 8, md: 0 }}
        >
          <Image src="/logo.png" alt="logo" w={300} mb={4} />
          <Text fontSize="lg" mb={4} color="#ffb135">
            Your Digital Marketing Partner: We Transform Dreams into Results.
          </Text>
          <Text fontSize="lg" mb={4}>
            Let&apos;s Grow Together.
          </Text>
          <Flex alignItems="center" mb={4}>
            <Link mr={4} _hover={{ color: "#ffb135" }}>
              <FaFacebookF />
            </Link>
            <Link mr={4} _hover={{ color: "#ffb135" }}>
              <FaInstagram />
            </Link>
            <Link _hover={{ color: "#ffb135" }}>
              <FaLinkedinIn />
            </Link>
          </Flex>
        </Flex>

        {/* Right side content */}
        <Flex flexDir="column" flex={{ base: "1", md: "auto" }}>
          <Flex flexDir="column" alignItems="flex-end" mb={4}>
            <Flex direction="column">
              <Input
                type="email"
                placeholder="Enter your email"
                flex="1"
                mr={4}
                bg="white"
                py={2}
                px={3}
                border="none"
                borderRadius="md"
                _focus={{ outline: "none" }}
              />
              <Box>
                <Text fontSize="md" mb={2}>
                  <Link color="#ffb135">
                    Subscribe to get our monthly Newsletter
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex flexDir={{ base: "column", md: "row" }} mb={4}>
            <Box flex="1" pr={{ md: 4 }}>
              <Text fontSize="lg" mb={2} color="#ffb135">
                Helpful Links
              </Text>
              <Box>
                <Text fontSize="md" mb={2}>
                  <Link
                    color="black"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    About Us
                  </Link>
                </Text>
                <Text fontSize="md" mb={2}>
                  <Link
                    color="black"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Blogs
                  </Link>
                </Text>
              </Box>
            </Box>
            <Box flex="1">
              <Text fontSize="lg" mb={2} color="#ffb135">
                More Links
              </Text>
              <Box>
                <Text fontSize="md" mb={2}>
                  <Link
                    color="black"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Case Studies
                  </Link>
                </Text>
                <Text fontSize="md" mb={2}>
                  <Link
                    color="black"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Career
                  </Link>
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex flexDir="column">
            <Text fontSize="lg" mb={2} color="#ffb135">
              Legal
            </Text>
            <Box>
              <Text fontSize="md" mb={2}>
                <Link
                  color="black"
                  _hover={{ color: "#ffb135", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </Text>
              <Text fontSize="md" mb={2}>
                <Link
                  color="black"
                  _hover={{ color: "#ffb135", textDecoration: "none" }}
                >
                  Terms & Condition
                </Link>
              </Text>
              <Text fontSize="md" mb={2}>
                <Link
                  color="black"
                  _hover={{ color: "#ffb135", textDecoration: "none" }}
                >
                  Sitemap
                </Link>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {/* Bottom content */}
      <Flex justifyContent="space-between" alignItems="center" mt={8}>
        <Text fontSize="md" color="gray.600">
          © 2023 Marketing Lab. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer2;
