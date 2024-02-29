// import
const Web3 = require('web3');

// evm node uri
const ethereumUri = 'NODE_URI';

// client
const web3 = new Web3(new Web3.providers.HttpProvider(ethereumUri));

// Block height
web3.eth.getBlockNumber().then(blockNumber => {
    console.log('Block height: ', blockNumber);
}).catch(error => {
    console.error('get block height error: ', error);
});

// get balance
const address = 'YOUR_ETH_ADDRESS';
web3.eth.getBalance(address).then(balance => {
    console.log('balance: ', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch(error => {
    console.error('get balance error: ', error);
});
