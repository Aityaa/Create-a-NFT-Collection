# Create-a-NFT-Collection
# NFT Collection Project

This project simulates the minting of NFTs (Non-Fungible Tokens) using JavaScript. It demonstrates creating, storing, listing, and getting the total supply of NFTs. 

## Project Description

This project contains a simple JavaScript implementation for minting NFTs and managing an NFT collection. Each NFT is represented by an object that holds metadata such as name, eye color, shirt type, and bling. The project includes functions to mint new NFTs, list all NFTs, and get the total number of NFTs minted.

## Features

- Mint new NFTs with custom metadata.
- Store minted NFTs in an array.
- List all NFTs and their metadata to the console.
- Get the total supply of minted NFTs.

## Code Explanation

### 1. Variable to Hold NFTs

We use an array to hold all the NFT objects.

```javascript
let nfts = [];
2. mintNFT Function
This function creates an NFT object with the provided metadata and stores it in the nfts array.

javascript

function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nfts.push(nft);
}
Parameters: The function accepts parameters for the NFT's name, eye color, shirt type, and bling.
NFT Object: It creates an object with these properties.
Store NFT: The object is added to the nfts array using push().
3. listNFTs Function
This function loops through the nfts array and prints the metadata of each NFT to the console.

javascript

function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + nfts[i].name);
        console.log("Eye Color: " + nfts[i].eyeColor);
        console.log("Shirt Type: " + nfts[i].shirtType);
        console.log("Bling: " + nfts[i].bling);
        console.log("-------------------------");
    }
}
Loop: It loops through each NFT in the nfts array.
Print Metadata: For each NFT, it prints the metadata (name, eye color, shirt type, bling) to the console.
4. getTotalSupply Function
This function returns the total number of NFTs that have been minted.

javascript

function getTotalSupply() {
    return nfts.length;
}
Return Length: It returns the length of the nfts array, which represents the total number of NFTs minted.
Usage
To use this project, you need to run the JavaScript code in a JavaScript runtime environment (like a browser's console or Node.js). Follow these steps:

Clone the repository or copy the nftCollection.js file content to your local environment.
Run the JavaScript code in a browser console or using Node.js.
Example
Below is an example of how to mint NFTs, list them, and get the total supply:

javascript

// Mint some NFTs
mintNFT("CoolCat", "Blue", "T-Shirt", "Gold Chain");
mintNFT("SmartDog", "Brown", "Sweater", "Silver Ring");
mintNFT("ChillMonkey", "Green", "Hoodie", "Diamond Bracelet");

// List all NFTs
listNFTs();

// Print the total supply of NFTs to the console
console.log("Total Supply: " + getTotalSupply());
Conclusion
This project provides a basic simulation of minting and managing an NFT collection using JavaScript. Feel free to extend the functionality or customize the metadata as needed. Contributions and suggestions are welcome!

css


This README file provides a comprehensive overview of your project, including its purpose, features, how to use it, and a detailed explanation of the code. It should help anyone who views your repository understand and run your project.





