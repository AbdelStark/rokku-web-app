import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Tag, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { formatAmount, formatAddress } from "../utils/helpers";

const MotionTr = motion(Tr);

const TransactionList = ({ transactions }) => {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Recipient/Sender</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((tx) => (
            <MotionTr
              key={tx.id}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Td>{tx.date}</Td>
              <Td>{tx.type}</Td>
              <Td color={tx.type === "incoming" ? "green.300" : "red.300"}>
                {formatAmount(tx.amount, tx.currency)}
              </Td>
              <Td>{formatAddress(tx.recipient || tx.sender)}</Td>
              <Td>
                <Tag
                  colorScheme={tx.status === "completed" ? "green" : "yellow"}
                >
                  {tx.status}
                </Tag>
              </Td>
            </MotionTr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TransactionList;
