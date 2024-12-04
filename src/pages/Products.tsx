import { useState } from "react";
import AllProducts from "../components/products/AllProducts";
import LikedProducts from "../components/products/LikedProducts";

const Products = () => {
  const [filter, setFilter] = useState<"all" | "liked">("all");

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">
          {filter === "all" ? "All Products" : "Liked Products"}
        </h1>
        <div className="flex items-center justify-between gap-1 border border-primary-1 overflow-hidden rounded-md  ">
          <button
            onClick={() => {
              if (filter === "liked") {
                setFilter("all");
              }
            }}
            className={`w-full px-2 ${filter === "all" ? "bg-primary-2" : ""}`}
          >
            All
          </button>
          <div className="w-[1px] h-[20px] bg-black" />
          <button
            onClick={() => {
              if (filter === "all") {
                setFilter("liked");
              }
            }}
            className={`w-full h-full px-2 ${
              filter === "liked" ? "bg-primary-2" : ""
            }`}
          >
            Liked
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-4">
        {filter === "all" ? <AllProducts /> : <LikedProducts />}
      </div>
    </section>
  );
};

export default Products;
