import React from "react";
import { Box, Text, Input, Flex, Link, Image, Button } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer2 = () => {
  return (
    <Box bg="gray.800" py={10} px={8} borderTop="1px solid #eaeaea">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        align="center"
      >
        {/* Left side content */}
        <Flex
          flexDir="column"
          flex={{ base: "1", md: "auto" }}
          mb={{ base: 8, md: 0 }}
        >
          <Image src="/logo.png" alt="logo" w={300} mb={4} />
          <Text fontSize="lg" mb={4} color="#ffb135">
            Your Digital Marketing Partner: We Transform Dreams into Results.
          </Text>
          <Text fontSize="lg" mb={4} color="white">
            Let&apos;s Grow Together.
          </Text>
          <Flex alignItems="center" mb={4}>
            <Link
              href="https://www.facebook.com/marketinglab.in"
              mr={4}
              color="white"
              border="1px solid white"
              borderRadius="50px"
              padding={2}
              _hover={{ color: "#ffb135", border: "1px solid orange" }}
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/marketinglab.in"
              mr={4}
              color="white"
              border="1px solid white"
              borderRadius="50px"
              padding={2}
              _hover={{ color: "#ffb135", border: "1px solid orange" }}
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://in.linkedin.com/company/marketing-lab-in"
              _hover={{ color: "#ffb135", border: "1px solid orange" }}
              color="white"
              border="1px solid white"
              borderRadius="50px"
              padding={2}
            >
              <FaLinkedinIn />
            </Link>
          </Flex>
        </Flex>

        {/* Right side content */}
        <Flex flexDir="column" flex={{ base: "1", md: "auto" }}>
          <Flex flexDir="column" alignItems="flex-start" mb={4}>
            <Input
              type="email"
              placeholder="Enter your email"
              flex="1"
              color="white"
              _placeholder={{ color: "white" }}
              mr={4}
              bg="rgba(255,255,255,0.2)"
              py={2}
              px={3}
              border="none"
              borderRadius="md"
              _focus={{ outline: "none" }}
            />
            <Button
              colorScheme="orange"
              variant="solid"
              py={2}
              px={4}
              borderRadius="md"
              mt={2}
            >
              Subscribe
            </Button>
          </Flex>
          <Flex flexDir={{ base: "column", md: "row" }} mb={4} color="white">
            <Box flex="1" pr={{ md: 4 }}>
              <Text fontSize="lg" mb={2} color="#ffb135">
                Our Services
              </Text>
              <Box>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="/services"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Email Marketing Automation
                  </Link>
                </Text>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="/services"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Performance Marketing - Google
                  </Link>
                </Text>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="/services"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Performance Marketing – Meta
                  </Link>
                </Text>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="/services"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    WhatsApp Marketing Automation
                  </Link>
                </Text>
              </Box>
            </Box>
            <Box flex="1">
              <Text fontSize="lg" mb={2} color="#ffb135">
                Helpful Links
              </Text>
              <Box>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="/about"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    About Us
                  </Link>
                </Text>
                {/* <Text fontSize="md" mb={2}>
                  <Link
                    href="#"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Blogs
                  </Link>
                </Text> */}
                <Text fontSize="md" mb={2}>
                  <Link
                    href="/case-study"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Case Studies
                  </Link>
                </Text>
                {/* <Text fontSize="md" mb={2}>
                  <Link
                    href="#"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Career
                  </Link>
                </Text> */}
              </Box>
            </Box>
            <Box flex="1">
              <Text fontSize="lg" mb={2} color="#ffb135">
                Legal
              </Text>
              <Box>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="#"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Privacy Policy
                  </Link>
                </Text>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="#"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Terms & Condition
                  </Link>
                </Text>
                <Text fontSize="md" mb={2}>
                  <Link
                    href="#"
                    _hover={{ color: "#ffb135", textDecoration: "none" }}
                  >
                    Sitemap
                  </Link>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {/* Bottom content */}
      <Flex justifyContent="space-between" alignItems="center" mt={8}>
        <Text fontSize="md" color="gray.300">
          © 2023 Marketing Lab. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer2;
