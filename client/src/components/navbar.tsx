/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import viteLogo from '/vite.svg'
import { MenuIcon, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { AbstractProvider, JsonRpcSigner, ethers } from "ethers"
import "./navbar.css"

export function Navbar() {
    // State variables for wallet connection status and address
    const [connected, setConnected] = useState(false);
    const [provider, setProvider] = useState<AbstractProvider>();
    const [signer, setSigner] = useState<JsonRpcSigner>();
    const [walletAddress, setWalletAddress] = useState("");



    // Function to connect/disconnect the wallet
    const connectToWallet = async () => {
        if (window.ethereum) {

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const walletAddress = await signer.getAddress();
            setProvider(provider);
            setSigner(signer);
            setWalletAddress(walletAddress);
            setConnected(true);
        } else {
            console.log("Meta Mask not installed");
            setConnected(false);
        }
        
    }

    

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" size="icon" variant="outline">

                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link className="mr-6 hidden lg:flex" to="/">
                        <a href="https://vitejs.dev" target="_blank" className="h-6 w-6">
                            <img src={viteLogo} className="logo" alt="Vite logo" />
                        </a>
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="grid gap-2 py-6">
                        <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/">
                            Home
                        </Link>
                        <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/verify">
                            Verify
                        </Link>

                    </div>
                </SheetContent>
            </Sheet>
            <Link className="mr-6 hidden lg:flex" to="#">
                <a href="https://vitejs.dev" target="_blank" className="h-10 w-10">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <span className="sr-only">TrustTrade</span>
            </Link>
            <nav className="ml-auto hidden lg:flex gap-6">
                <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-white px-10 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-500 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-green-500 dark:data-[state=open]:bg-gray-800/50"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-white px-10 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-500 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-green-500 dark:data-[state=open]:bg-gray-800/50"
                    to="/verify"
                >
                    Verify
                </Link>

            </nav>
            <div className="ml-auto space-x-4 flex flex-row gap-x-1 items-center justify-center">
                <button  onClick={connectToWallet}  className="btn">{connected ? `${walletAddress}` : "Connect Wallet"}</button>
                <ShoppingCart className="text-white" />
            </div>
        </header>
    )
}

const CustomButton = ({ btnType, title, handleClick, styles }: any) => {
    return (
        <button
            type={btnType}
            className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default CustomButton