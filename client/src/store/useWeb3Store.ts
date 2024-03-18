import { AbstractProvider, ethers } from "ethers";
import {create} from "zustand";

interface IWeb3State {
  address: string | null;
  currentChain: number | null;
  signer: ethers.JsonRpcSigner | null;
  provider: AbstractProvider | null;
  isAuthenticated: boolean;
  connectWallet: () => Promise<void>;
  disconnect: () => void;
}

export const useWeb3Store = create<IWeb3State>((set, get) => ({
  address: null,
  currentChain: null,
  signer: null,
  provider: null,
  isAuthenticated: false,
  connectWallet: async () => {
    const state = get();
    if (state.isAuthenticated) return;

    // const { toast } = useToast()

    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Error")
        return;
        // toast({
        //   status: "error",
        //   position: "top-right",
        //   title: "Error",
        //   description: "No ethereum wallet found",
        // });
      }

      const provider = new ethers.BrowserProvider(ethereum);
      const accounts: string[] = await provider.send("eth_requestAccounts", []);

      if (accounts.length > 0) {
        const signer = await provider.getSigner();
        const chain = Number((await provider.getNetwork()).chainId);

        set({
          address: accounts[0],
          signer,
          currentChain: chain,
          provider,
          isAuthenticated: true,
        });

        localStorage.setItem("isAuthenticated", "true");
      }
    } catch (error) {
      console.error('Error connecting to the wallet:', error);
    }
  },
  disconnect: () => {
    set({ address: null, currentChain: null, signer: null, provider: null, isAuthenticated: false });
    localStorage.removeItem("isAuthenticated");
  },
}));

