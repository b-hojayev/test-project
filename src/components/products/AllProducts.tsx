import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addProducts, selectProducts } from "../../reducers/productSlice";
import { getProducts } from "../../utils/getProducts";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const firstRender = useRef<boolean>(true);
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  console.log(products);

  useEffect(() => {
    if (!firstRender.current) return;

    if (products.length === 0) {
      const fetchProducts = async () => {
        console.log("fetch isledi");

        const products = await getProducts();
        if (products) {
          dispatch(addProducts(products));
        }
      };

      fetchProducts();
      firstRender.current = false;
    }
  }, []);

  return (
    <>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          desc={item.alt_description}
          imgUrl={item.urls.regular}
          isLiked={item.isLiked}
          productId={item.id}
        />
      ))}
    </>
  );
};

export default AllProducts;
