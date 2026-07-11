# Multi-Signature Wallet (Minimal)

An elegant, highly secure, gas-optimized Solidity multi-signature wallet. It requires a threshold of $M$ confirmations out of $N$ owners before an arbitrary EVM transaction can be successfully executed.

## Features
- **Flexible M-of-N Control:** Set customizable signature thresholds.
- **Arbitrary Transactions:** Execute native value transfers and arbitrary contract calls.
- **Transaction Flow:** Clear lifecycle metrics (Submit -> Confirm -> Execute).
- **Flat Layout:** Simple integration without nested complexities.

## Setup & Deployment

### Dependencies
- Node.js (v18+ recommended)
- Hardhat or Foundry

### Commands
```bash
# Clean install packages
npm install

# Compile contracts
npx hardhat compile

# Run unit test framework
npx hardhat test
