import React from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import WalletCard from "../components/WalletCard";
import { mockWallets } from "../mocks/data";

const Wallets = () => {
  return (
    <div>
      <Heading mb={6}>Wallets</Heading>
      <SimpleGrid columns={2} spacing={6}>
        {mockWallets.map((wallet) => (
          <WalletCard key={wallet.id} wallet={wallet} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Wallets;
