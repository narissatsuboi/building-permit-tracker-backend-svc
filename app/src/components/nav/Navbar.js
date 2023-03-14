import React from "react";
import logo from '../../public/trackilogo.png'
import { Image, Flex, Text, Box, Link } from "theme-ui";

const Navbar = () => {
  return (
    <Flex px={3} color="white" bg="black" alignItems="center">
      {/* <Text p={3} fontWeight="bold">
        tracki
      </Text> */}
      <Image src={logo} />
      <Box mx="auto" />
      <Link color="white" variant="nav" href="#!">
        Profile
      </Link>
    </Flex>
  );
};

export default Navbar;
