import React from "react";
import { Heading } from "@chakra-ui/react";
import TransactionList from "../components/TransactionList";
import { mockTransactions } from "../mocks/data";

const Transactions = () => {
  return (
    <div>
      <Heading mb={6}>Transactions</Heading>
      <TransactionList transactions={mockTransactions} />
    </div>
  );
};

export default Transactions;
