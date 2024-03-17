/* eslint-disable @typescript-eslint/no-explicit-any */
// At the top of your component file or in a globals.d.ts file

export {};
interface EthereumProvider {
  isMetaMask?: boolean;
  request: (request: { method: string, params?: Array<any> }) => Promise<any>;
}


declare global {
  interface Window {
    ethereum?: EthereumProvider
  }
}