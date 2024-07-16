import React from "react";
import { Box, Flex, VStack, Heading, Link, Icon } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiHome, FiCreditCard, FiList } from "react-icons/fi";

const NavItem = ({ icon, children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      as={RouterLink}
      to={to}
      display="flex"
      alignItems="center"
      p={2}
      borderRadius="md"
      _hover={{ bg: "whiteAlpha.200" }}
      bg={isActive ? "brand.500" : "transparent"}
    >
      <Icon as={icon} mr={3} />
      {children}
    </Link>
  );
};

const Layout = ({ children }) => {
  return (
    <Flex minHeight="100vh">
      <Box width="250px" bg="gray.800" p={4} boxShadow="2xl">
        <VStack align="stretch" spacing={8}>
          <Heading size="xl" color="brand.300">
            Rokku
          </Heading>
          <VStack align="stretch" spacing={2}>
            <NavItem icon={FiHome} to="/">
              Dashboard
            </NavItem>
            <NavItem icon={FiCreditCard} to="/wallets">
              Wallets
            </NavItem>
            <NavItem icon={FiList} to="/transactions">
              Transactions
            </NavItem>
          </VStack>
        </VStack>
      </Box>
      <Box flex={1} p={8} bg="gray.900">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
