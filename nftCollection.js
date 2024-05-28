/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/


let nfts = [];


function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object with the provided metadata
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
   
    nfts.push(nft);
}


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


function getTotalSupply() {
    // Return the total number of NFTs in the nfts array
    return nfts.length;
}


mintNFT("CoolCat", "Blue", "T-Shirt", "Gold Chain");
mintNFT("SmartDog", "Brown", "Sweater", "Silver Ring");
mintNFT("ChillMonkey", "Green", "Hoodie", "Diamond Bracelet");


listNFTs();


console.log("Total Supply: " + getTotalSupply());
