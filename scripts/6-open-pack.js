import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = '0xa28cc8e0E5459E5834256F847222D8bDa95d4924';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack...');
    const opened = await packModule.open('0');
    console.log('Opened the pack!');
    console.log(opened);
}

try {
    await main();
} catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}