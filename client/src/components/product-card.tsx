import { IProduct } from "@/types/product-type";
import { BackgroundGradient } from "./ui/background-gradient";

type IProductProps = {
    productData: IProduct
}


export function ProductCard(props: IProductProps) {
    const { name, image, description, price, } = props.productData;
    return (
        <div className="h-2/3 max-w-sm">
            <BackgroundGradient className="rounded-[22px] h-full max-w-sm p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
                
                <img
                    src={image}
                    alt="jordans"
                    className="w-full h-[250px] object-cover"
                />
                <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                    {name}
                </p>

                <p className="text-sm line-clamp-3 text-gray-500 dark:text-neutral-400">
                    {description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        ${price}
                    </span>
                </button>
            </BackgroundGradient>
        </div>
    );
}
