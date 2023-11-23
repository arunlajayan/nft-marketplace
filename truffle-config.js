const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKry = "9114e3e6067c4298a9630cc71278a9dc";

const fs = require('fs');
const mnemonic = "2c5eea217af0609cd3f4e8d50b73f86380e036817582bd5d856f6870703f1693"

module.exports = {

  networks: {
    /* development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //match any network id
    }, */
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic, 
        `https://arbitrum-goerli.infura.io/v3/${infuraKry}` // Url to an Ethereum node
      ),
      network_id: 421613,       // Ropsten's id
      gas: 5500000,
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true 
    }
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.8.0" 
    }
  }
};