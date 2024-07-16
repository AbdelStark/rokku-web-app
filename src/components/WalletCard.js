import React from "react";
import { Box, Heading, Text, HStack, Tag, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { formatAmount } from "../utils/helpers";

const MotionBox = motion(Box);

const WalletCard = ({ wallet }) => {
  return (
    <MotionBox
      borderWidth={1}
      borderRadius="lg"
      p={6}
      bg="gray.800"
      boxShadow="xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <VStack align="stretch" spacing={4}>
        <Heading size="md" color="brand.300">
          {wallet.name}
        </Heading>
        <Text fontSize="3xl" fontWeight="bold">
          {formatAmount(wallet.balance, wallet.currency)}
        </Text>
        <HStack>
          {wallet.participants.map((participant) => (
            <Tag key={participant} colorScheme="brand" variant="subtle">
              {participant}
            </Tag>
          ))}
        </HStack>
        <Text fontSize="sm" color="gray.400">
          Required signatures: {wallet.requiredSignatures}
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default WalletCard;
