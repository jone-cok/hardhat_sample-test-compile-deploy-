require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */

const {vars}=require('hardhat/config');

const INFURA_API_KEY = '1cc8a39be27344e395af4b18f8a5413e';

const SEPOLIA_PRIVATE_KEY = 'ec6fa1d9b31e8b4d22297f4604d7b3c46ca3b4bd7614d7ac9eff1fab9c74ba21';

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
