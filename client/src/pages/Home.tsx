import { ProductCard } from "@/components/product-card"
import { productList } from "@/data"


const Home = () => {
    return (
        <div className="pt-10">
        <div className="grid mt-[20px] gap-[26px] h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* Loading and empty state messages commented out */}
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              productData={product}
            />
          ))}
        </div>
      </div>
    )
}

export default Home