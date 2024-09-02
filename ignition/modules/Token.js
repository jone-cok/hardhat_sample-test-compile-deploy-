const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract('Token');

  return { token };
});

module.exports = TokenModule;





// module.exports = buildModule("TokenModule", (m) => {
//   // const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   // const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   // const lock = m.contract("Lock", [unlockTime], {
//   //   value: lockedAmount,
//   // });

//   const token = m.contract("Token");
//   return { token };
// });