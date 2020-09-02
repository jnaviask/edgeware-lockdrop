const Lockdrop = artifacts.require("Lockdrop.sol");
const utility = require('../helpers/util');
const JUNE_1ST_UNIX_TIME = 1559347200;

module.exports = async function(deployer, network, accounts) {
  if (network === 'ropsten' || network === 'development') {
    let time = await utility.getCurrentTimestamp(web3);
    console.log(`Current time: ${time}.`);
    const lockdrop = await deployer.deploy(Lockdrop, time);
    const startTime = await lockdrop.LOCK_START_TIME();
    const endTime = await lockdrop.LOCK_END_TIME();
    console.log(`Start time: ${startTime}, end time: ${endTime}.`);
  } else {
    await deployer.deploy(Lockdrop, JUNE_1ST_UNIX_TIME);
  }
};
