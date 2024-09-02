const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", () => {
  let token;
  let owner, address1, address2;
  beforeEach(async () => {
    [owner, address1, address2] = await ethers.getSigners();
    const hardhatToken = await ethers.getContractFactory("Token");
    token = await hardhatToken.deploy();
  });

  describe("Deployment", async () => {

    it("should set the right owner", async () => {
        expect(await token.owner()).to.equal(owner.address);
    });

    it("should same owner's token with total supply", async () => {
      let balance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(balance);
    });
  });

  describe("Transaction", async () => {
    
    it("should transfer tokens between accounts", async () => {
        await token.transfer(address1.address, 100);
        expect(await token.balanceOf(address1.address)).to.equal(100);
  
        await expect(token.transfer(address2.address, 200)).to.changeTokenBalances(token,[owner,address2],[-200, 200])
    });

    it("should fail if sender have not enough token", async () => {
        await expect(token.connect(address1).transfer(address2.address,100)).to.be.revertedWith("Not enough tokens");
  
        expect(await token.balanceOf(owner.address)).to.equal(await token.totalSupply())
    });
  });
});
