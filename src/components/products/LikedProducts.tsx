import { useAppSelector } from "../../hooks/hooks";
import { selectLikedProducts } from "../../reducers/productSlice";
import ProductCard from "./ProductCard";

const LikedProducts = () => {
  const likedProducts = useAppSelector(selectLikedProducts);

  if (!likedProducts.length) {
    return <p>no liked products found</p>;
  }

  return (
    <>
      {likedProducts.map((product) => (
        <ProductCard
          key={product.id}
          desc={product.alt_description}
          imgUrl={product.urls.regular}
          isLiked={product.isLiked}
          productId={product.id}
        />
      ))}
    </>
  );
};

export default LikedProducts;
