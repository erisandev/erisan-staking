// staking.js

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://#####/v3/YOUR_PROJECT_ID'));

// Contract ABIs
const stakingABI = [...];
const tokenABI = [...];

// Contract addresses
const stakingAddress = '0x...';
const tokenAddress = '0x...';

// Function to stake tokens
async function stakeTokens(amount) {
const stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);
const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);

// Approve the staking contract to spend the tokens
await tokenContract.methods.approve(stakingAddress, amount).send({ from: 'YOUR_WALLET_ADDRESS' });

// Stake the tokens
await stakingContract.methods.stake(amount).send({ from: 'YOUR_WALLET_ADDRESS' });
}

// Function to unstake tokens
async function unstakeTokens(amount) {
const stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);
const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);

// Unstake the tokens
await stakingContract.methods.unstake(amount).send({ from: 'YOUR_WALLET_ADDRESS' });

// Approve the staking contract to spend the tokens
await tokenContract.methods.approve(stakingAddress, 0).send({ from: 'YOUR_WALLET_ADDRESS' });
}

// Function to claim rewards
async function claimRewards() {
const stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);

// Claim the rewards
await stakingContract.methods.claimRewards().send({ from: 'YOUR_WALLET_ADDRESS' });
}

// Example usage
stakeTokens(100).then(() => {
console.log('Tokens staked successfully!');
});

unstakeTokens(50).then(() => {
console.log('Tokens unstaked successfully!');
});

claimRewards().then(() => {
console.log('Rewards claimed successfully!');
});
