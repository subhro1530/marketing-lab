// quote.js

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Quote = () => {
  const quoteBgImage =
    "https://img.freepik.com/free-photo/business-plan-concept-3d-rendering_23-2149439920.jpg?w=1380&t=st=1707826549~exp=1707827149~hmac=ea7436f84f985b327cd0987d94e5ffde7d5149acd13ab6ea84887dc615806bb2";

  const quoteSectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${quoteBgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "500px", // Adjust as needed
    color: "white",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  const quoteTextStyle = {
    maxWidth: "600px",
    fontSize: { base: "xl", md: "3xl" },
    fontWeight: "thin",
    lineHeight: { base: "1.5", md: "2" },
    fontStyle: "italic",
  };

  const quoteMarkStyle = {
    fontSize: { base: "2xl", md: "6xl" },
    color: "orange",
    fontWeight: "bold",
    marginRight: "10px",
  };

  return (
    <Box style={quoteSectionStyle} width="100vw" overflowX="hidden">
      <Text style={quoteMarkStyle} fontSize={{ base: "3xl", md: "6xl" }}>
        “
      </Text>
      <Text style={quoteTextStyle} fontSize={{ base: "lg", md: "3xl" }}>
        Only Way To Achieve True Growth Is To Have
        <Text as="span" color="orange" fontSize={{ base: "lg", md: "3xl" }}>
          {" "}
          A Holistic Approach To Marketing.
          <br />
        </Text>
        And They Start By Having <br />
        <Text as="span" color="orange" fontSize={{ base: "lg", md: "3xl" }}>
          {" "}
          A Holistic Approach To Measuring. <br />
        </Text>
        You Don&apos;t Need
        <Text as="span" color="orange" fontSize={{ base: "lg", md: "3xl" }}>
          {" "}
          Another Traffic Agency.
        </Text>
        You Need A Partner That Acts As Your
        <Text as="span" color="orange" fontSize={{ base: "lg", md: "3xl" }}>
          {" "}
          CMO And Executes Effective Strategies.
        </Text>
      </Text>
    </Box>
  );
};

export default Quote;
