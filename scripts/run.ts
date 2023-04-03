const main = async () => {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();

  console.log("Counter deployed to:", counter.address);

  let counts: bigint = await counter.getCounts();
  console.log('counts(1): ', counts)

  await counter.add();
  counts = await counter.getCounts();
  console.log('counts(2): ', counts)
}

main().then(() => {
  console.log('success');
  process.exit(0);
}).catch(error => {
  console.log('error', error)
  process.exit(1);
})
