/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: Function to mint NFTs
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object with the provided metadata
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    // Store the NFT object in the nfts array
    nfts.push(nft);
}

// Step 3: Function to list all NFTs
function listNFTs() {
    // Loop through the nfts array and print metadata of each NFT
    for (let i = 0; i < nfts.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + nfts[i].name);
        console.log("Eye Color: " + nfts[i].eyeColor);
        console.log("Shirt Type: " + nfts[i].shirtType);
        console.log("Bling: " + nfts[i].bling);
        console.log("-------------------------");
    }
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
    // Return the total number of NFTs in the nfts array
    return nfts.length;
}

// Mint some NFTs
mintNFT("CoolCat", "Blue", "T-Shirt", "Gold Chain");
mintNFT("SmartDog", "Brown", "Sweater", "Silver Ring");
mintNFT("ChillMonkey", "Green", "Hoodie", "Diamond Bracelet");

// List all NFTs
listNFTs();

// Print the total supply of NFTs to the console
console.log("Total Supply: " + getTotalSupply());
