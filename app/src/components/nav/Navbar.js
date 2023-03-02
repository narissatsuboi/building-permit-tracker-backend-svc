import React from "react";
import { Flex, Text, Box, Link } from "rebass";
const Navbar = () => {
  return (
    <Flex px={3} color="white" bg="black" alignItems="center">
      <Text p={3} fontWeight="bold">
        tracki
      </Text>
      <Box mx="auto" />
      <Link color="white" variant="nav" href="#!">
        Profile
      </Link>
    </Flex>
  );
};

export default Navbar;
