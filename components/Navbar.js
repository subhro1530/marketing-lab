import {
  Box,
  Flex,
  Link as ChakraLink,
  Image,
  Text,
  VStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const resultsRef = useRef(null);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const handleCaseStudyClick = () => {
    resultsRef.current.scrollIntoView({ behavior: "smooth" });
    onClose(); // Close the mobile menu if it's open
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        as="nav"
        marginTop="-85px"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="rgba(150, 80, 20, 0.1)" // Blackish color with alpha for transparency
        backdropFilter="blur(5px)"
        boxShadow="md"
        position="fixed"
        width="100%"
        zIndex="1"
      >
        <Flex align="center">
          <Image src="/logo.png" alt="Logo" width={180} mr={4} />
        </Flex>

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color="black"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
        </Box>

        <Box
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justify="flex-end"
        >
          <Box ml="auto">
            <NextLink href="/" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mr={4}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="#545454"
                textTransform="capitalize"
              >
                Home
              </ChakraLink>
            </NextLink>
            <NextLink href="/about" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mr={4}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="#545454"
                textTransform="capitalize"
              >
                About Us
              </ChakraLink>
            </NextLink>
            <ChakraLink
              fontSize="16px"
              mr={4}
              fontWeight="bold"
              fontFamily="sans-serif"
              pr={5}
              transition="0.5s ease-in-out"
              color="#545454"
              textTransform="capitalize"
              cursor="pointer"
              onClick={handleCaseStudyClick} // Smooth scroll to results section
            >
              Case Study
            </ChakraLink>
            <NextLink href="/services" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mr={4}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="#545454"
                textTransform="capitalize"
              >
                Services
              </ChakraLink>
            </NextLink>
            <NextLink href="/Blog" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mr={4}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="#545454"
                textTransform="capitalize"
              >
                Blog
              </ChakraLink>
            </NextLink>
          </Box>
        </Box>
      </Flex>

      {/* Sidebar for mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} color="white">
        <DrawerOverlay />
        <DrawerContent bg="rgba(150, 80, 20, 0.2)" backdropFilter="blur(10px)">
          <DrawerCloseButton color="orange" />
          <DrawerHeader color="orange">Menu</DrawerHeader>

          <VStack>
            <NextLink href="/" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mb={2}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="orange"
                textTransform="capitalize"
              >
                Home
              </ChakraLink>
            </NextLink>
            <NextLink href="/about" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mb={2}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="orange"
                textTransform="capitalize"
              >
                About Us
              </ChakraLink>
            </NextLink>
            <ChakraLink
              fontSize="16px"
              mb={2}
              fontWeight="bold"
              fontFamily="sans-serif"
              pr={5}
              transition="0.5s ease-in-out"
              color="orange"
              textTransform="capitalize"
              cursor="pointer"
              onClick={handleCaseStudyClick} // Smooth scroll to results section
            >
              Case Study
            </ChakraLink>
            <NextLink href="/services" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mb={2}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="orange"
                textTransform="capitalize"
              >
                Services
              </ChakraLink>
            </NextLink>
            <NextLink href="/Blog" passHref>
              <ChakraLink
                as="a"
                fontSize="16px"
                mb={2}
                _hover={{ color: "black" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                pr={5}
                transition="0.5s ease-in-out"
                color="orange"
                textTransform="capitalize"
              >
                Blog
              </ChakraLink>
            </NextLink>
          </VStack>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
