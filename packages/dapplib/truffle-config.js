require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rice pizza pudding inflict kangaroo army gate'; 
let testAccounts = [
"0xec14cee71adc783589d59805561512c59abd0ac4eba0cdfd088edcef6bd89a0f",
"0x1c254aed93512ba1f1c2e5b03e073d57a8328c65bc61dac2106d0923ca990cb5",
"0x51c8e571545ca506e3d4f86e1a8bc98b308d649fe5d996aa9165a2a92afd2361",
"0x5e19d06b743a03843066aeb7b12d9ea51ec6494737c486d668292db91e7524ba",
"0xf312fb3600d92ceb18feeff5bcc739f3badb10e6e01e9915d4b8b56a82473f0b",
"0xa7a998e1375916a084898f0a48e84599d72e6a3880b6cc60af2416f596f62958",
"0x8642b072293a99b496fced7e0bca04e09fd49625e66f445cbce8ae096e6c346c",
"0x7b9b000f91d0542cd6dc33f9680d39bb42777092435b5957bfd73ac0be8082e0",
"0x9bf09a0c4f9122c4c91bdfc54439e1774ce872359218b813b2a3e5dcd8f1ce95",
"0xb3434ada37f67893384b83506a727639b06691da12e65369ac111b59294b2782"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

