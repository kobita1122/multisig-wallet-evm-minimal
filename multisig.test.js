const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
  let MultiSigWallet, multisig;
  let owner1, owner2, owner3, account4;

  beforeEach(async function () {
    [owner1, owner2, owner3, account4] = await ethers.getSigners();
    MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
    multisig = await MultiSigWallet.deploy([owner1.address, owner2.address, owner3.address], 2);
  });

  it("Should configure constructor parameters correctly", async function () {
    expect(await multisig.numConfirmationsRequired()).to.equal(2);
    const storedOwners = await multisig.getOwners();
    expect(storedOwners.length).to.equal(3);
  });

  it("Should successfully process transaction submission workflows", async function () {
    await multisig.connect(owner1).submitTransaction(account4.address, 100, "0x");
    expect(await multisig.getTransactionCount()).to.equal(1);
  });
});
