const ThanksContract = artifacts.require("ThanksContract");

module.exports = function (deployer) {
    deployer.deploy(ThanksContract);
}