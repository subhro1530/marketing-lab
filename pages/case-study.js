// pages/case-study.js
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
const Footer2 = dynamic(() => import("@/components/Footer2"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Results = dynamic(() => import("@/components/Results"), {
  ssr: false,
});

const CaseStudy = () => {
  return (
    <Box>
      <Navbar />
      <Image mt="85px" src="/case.png" alt="CaseStudy" width="100%" />
      <Results />
      <Footer2 />
    </Box>
  );
};

export default CaseStudy;
