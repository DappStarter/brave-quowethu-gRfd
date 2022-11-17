require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strike rival saddle uncover inner dry equal gauge'; 
let testAccounts = [
"0x2f338c200334460229ac4591eb7f3c69abcd2a742a3a46d228064d433424012d",
"0x9ccea125e9051f5bb6cf5818643b47cb4a6084c97c1fc5ee065e85966ca650fe",
"0x461b0f74590409baaa1c916a808e6be7b34a571b2fcb416af5348c0b7f8198bd",
"0x1cfa2fba0776b41bb1fa8715257904629f95ee973cb358c067c2f7d36caff1c4",
"0x073bfe126d0892f7cd4957d43b8fc312551d9c8c47ecd22e1c5bc35f23a5ef9a",
"0xa98a890ca4fc06e11486dceba3be691d17955054eaf73e1404ed6e0056deeecb",
"0x24cd20acc5aed2d9113e688b4e0c2fd6b8db147248fc778cffc7c528e80c6ad2",
"0xb894dd5c440480209d69db5f51de299bc02de9a52e94afd136789c13669ecf3f",
"0x306d2dea440ba769ee92826bccf81b0588818ada970f657dacaf57940d861b04",
"0x3ebd917f4ffc5d8a2ef2a7aaa0c6ddb51f92890be306f22d99b4c279f77aa34b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

