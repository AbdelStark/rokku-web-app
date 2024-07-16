import React from "react";
import {
  Heading,
  SimpleGrid,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import WalletCard from "../components/WalletCard";
import TransactionList from "../components/TransactionList";
import { mockWallets, mockTransactions } from "../mocks/data";

const DashboardStat = ({ label, value, change }) => (
  <Stat>
    <StatLabel>{label}</StatLabel>
    <StatNumber fontSize="2xl">{value}</StatNumber>
    <StatHelpText>
      <StatArrow type={change > 0 ? "increase" : "decrease"} />
      {Math.abs(change)}%
    </StatHelpText>
  </Stat>
);

const Dashboard = () => {
  return (
    <Box>
      <Heading mb={8} size="2xl" color="brand.300">
        Dashboard
      </Heading>

      <SimpleGrid columns={3} spacing={10} mb={12}>
        <DashboardStat label="Total Balance" value="$1,050,000" change={5.4} />
        <DashboardStat label="Monthly Transactions" value="37" change={-2.3} />
        <DashboardStat label="Active Wallets" value="2" change={0} />
      </SimpleGrid>

      <Heading size="xl" mb={6} color="brand.400">
        Your Wallets
      </Heading>
      <SimpleGrid columns={2} spacing={8} mb={12}>
        {mockWallets.map((wallet) => (
          <WalletCard key={wallet.id} wallet={wallet} />
        ))}
      </SimpleGrid>

      <Heading size="xl" mb={6} color="brand.400">
        Recent Transactions
      </Heading>
      <TransactionList transactions={mockTransactions.slice(0, 5)} />
    </Box>
  );
};

export default Dashboard;
