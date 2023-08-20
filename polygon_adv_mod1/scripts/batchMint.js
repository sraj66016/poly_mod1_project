const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("System_NFT");
  const myNFT = await MyNFT.attach("0x6D1BE3D7bf91bd825497C931f10d465e4C82c24B");

  // Generate an array of recipient addresses
  const recipient = "0x7c8aDc3d3C8a0a73CfbB77fD3D214824Ff114013";
   
    
 

  // Generate an array of token URIs corresponding to the recipients
  const tokenURIs = [
    "ipfs://QmX3TRtNdPsiuKDcovcHMG1EPe88X5KFqTnnKUKA8zQuwj",
    "ipfs://QmdGgKyom6Svivko8cyckxJ6t5HZLHCveFodNg1EAaXQPT",
    "ipfs://Qme1j7bJtvLy2F5eVHEsrLWDSgPUv8ysBSeVhSEbXvBGnf",
    "ipfs://QmQmhsfiFq8n5iACvPRAXJMy63keTkmaoPy1zBS3o7sBEb",
    "ipfs://QmaAbobLqVPMBJocaCt2GnvZgi6fGZkpqtR4p6PCxJC7hC",
    // Add more token URIs as needed
  ];

  // Batch mint NFTs
  const batchMint = await myNFT.batchMint(recipient, tokenURIs);

  // Wait for the transaction to be mined
  await batchMint.wait();

  console.log("You have successfully minted NFTS");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
