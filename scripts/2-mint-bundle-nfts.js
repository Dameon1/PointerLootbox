import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    // Paste in the address from when you created the bundle collection module
    const bundleModuleAddress = '0xdD286B1Ce2372c86e594dD17f97f208C8712C7Df';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log('Creating NFT batch...');

    //store to Arweave before passing?
    const image0 = readFileSync('./assets/images/start.png');
    const image1 = readFileSync('./assets/images/pic1.png');
    const image2 = readFileSync('./assets/images/pic2.png');
    const image3 = readFileSync('./assets/images/pic3.png');
    const image4 = readFileSync('./assets/images/pic4.png');
    const image5 = readFileSync('./assets/images/lose.png');





    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Starter',
                description: 'Structural',
                image: image0,
                properties: {
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Head and Shoulders',
                description: 'Head',
                image: image1,
                properties: {
                    //used to display traits
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Arm One',
                description: 'First Arm',
                image: image2,
                properties: {
                    rarity: 'super rare!',
                    fanciness: 10,
                }
            },
            supply: 10,
        },
        {
            metadata: {
                name: 'Arm Two',
                description: 'Second Arm',
                image: image3,
                properties: {
                    rarity: 'super rare!',
                    fanciness: 10,
                }
            },
            supply: 10,
        },
        {
            metadata: {
                name: 'One foot in the Grave',
                description: 'First Leg',
                image: image4,
                properties: {
                    rarity: 'super rare!',
                    fanciness: 10,
                }
            },
            supply: 5,
        },
        {
            metadata: {
                name: 'Game Over',
                description: 'Death',
                image: image5,
                properties: {
                    rarity: 'only-two!',
                    fanciness: 10,
                }
            },
            supply: 2,
        }
    ]);

    console.log('NFTs created!')
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}