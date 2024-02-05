// quote.js

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Quote = () => {
  const quoteBgImage = "/bg_quote.png";

  const quoteSectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${quoteBgImage})`,
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
    <Box style={quoteSectionStyle}>
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
