import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    const bundleModuleAddress = '0xdD286B1Ce2372c86e594dD17f97f208C8712C7Df'; // your bundle module address
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0xa28cc8e0E5459E5834256F847222D8bDa95d4924'; // your pack module address
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Getting all NFTs from bundle...');
    const nftsInBundle = await bundleModule.getAll();

    console.log('NFTs in bundle:');
    console.log(nftsInBundle);

    console.log('Creating a pack containing the NFTs from bundle...');
    const hangmanImg = readFileSync('./assets/images/win.png')
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: 'Hangman Pack!',
            image: hangmanImg,
        },
        assets: nftsInBundle.map(nft => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        })),
    });

    console.log('Pack created!')
    console.log(created);
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}