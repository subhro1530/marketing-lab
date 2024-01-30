// src/components/Navbar.js
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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="rgba(0, 0, 0, 0.6)" // Blackish color with alpha for transparency
        backdropFilter="blur(5px)"
        boxShadow="md"
        position="fixed"
        width="100%"
        zIndex="1"
      >
        <Flex align="center">
          <Image src="/logo.png" alt="Logo" width={180} mr={4} />{" "}
          {/* Responsive logo size */}
        </Flex>

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color="white"
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
            {/* Ensures links are at the rightmost */}
            <NextLink href="/" passHref>
              <ChakraLink
                as="a"
                mr={4}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Home
              </ChakraLink>
            </NextLink>
            <NextLink href="/about" passHref>
              <ChakraLink
                as="a"
                mr={4}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                About Us
              </ChakraLink>
            </NextLink>
            <NextLink href="/case-study" passHref>
              <ChakraLink
                as="a"
                mr={4}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Case Study
              </ChakraLink>
            </NextLink>
            <NextLink href="/services" passHref>
              <ChakraLink
                as="a"
                mr={4}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Services
              </ChakraLink>
            </NextLink>
            <NextLink href="/Blog" passHref>
              <ChakraLink
                as="a"
                mr={4}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Blog
              </ChakraLink>
            </NextLink>
            <NextLink href="/contact" passHref>
              <ChakraLink
                as="a"
                _hover={{ textDecoration: "2px underline" }}
                color="#ffae34"
                textTransform="capitalize"
              >
                Contact Us
              </ChakraLink>
            </NextLink>
          </Box>
        </Box>
      </Flex>

      {/* Sidebar for mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} color="white">
        <DrawerOverlay />
        <DrawerContent bgColor="rgba(0,0,0,.8)" backdropFilter="blur(10px)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Menu</DrawerHeader>

          <VStack>
            <NextLink href="/" passHref>
              <ChakraLink
                as="a"
                mb={2}
                _hover={{ textDecoration: "2px underline"}}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Home
              </ChakraLink>
            </NextLink>
            <NextLink href="/about" passHref>
              <ChakraLink
                as="a"
                mb={2}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                About Us
              </ChakraLink>
            </NextLink>
            <NextLink href="/case-study" passHref>
              <ChakraLink
                as="a"
                mb={2}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Case Study
              </ChakraLink>
            </NextLink>
            <NextLink href="/services" passHref>
              <ChakraLink
                as="a"
                mb={2}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Services
              </ChakraLink>
            </NextLink>
            <NextLink href="/Blog" passHref>
              <ChakraLink
                as="a"
                mb={2}
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Blog
              </ChakraLink>
            </NextLink>
            <NextLink href="/contact" passHref>
              <ChakraLink
                as="a"
                _hover={{ textDecoration: "2px underline" }}
                transition="2s ease-in-and-out"
                color="#ffae34"
                textTransform="capitalize"
              >
                Contact Us
              </ChakraLink>
            </NextLink>
          </VStack>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
