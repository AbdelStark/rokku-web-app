import { format } from "date-fns";

export const mockWallets = [
  {
    id: "1",
    name: "Company Treasury",
    balance: "1000000",
    currency: "USDC",
    participants: ["Alice", "Bob", "Charlie"],
    requiredSignatures: 2,
  },
  {
    id: "2",
    name: "Marketing Budget",
    balance: "50000",
    currency: "USDC",
    participants: ["Alice", "David", "Eve"],
    requiredSignatures: 2,
  },
];

export const mockTransactions = [
  {
    id: "1",
    walletId: "1",
    type: "outgoing",
    amount: "10000",
    currency: "USDC",
    recipient: "0x1234...5678",
    status: "completed",
    date: format(new Date("2024-07-10"), "yyyy-MM-dd"),
    signatures: ["Alice", "Bob"],
  },
  {
    id: "2",
    walletId: "1",
    type: "incoming",
    amount: "50000",
    currency: "USDC",
    sender: "0x9876...5432",
    status: "completed",
    date: format(new Date("2024-07-08"), "yyyy-MM-dd"),
    signatures: [],
  },
  {
    id: "3",
    walletId: "2",
    type: "outgoing",
    amount: "5000",
    currency: "USDC",
    recipient: "0x2468...1357",
    status: "pending",
    date: format(new Date("2024-07-15"), "yyyy-MM-dd"),
    signatures: ["Alice"],
  },
];
