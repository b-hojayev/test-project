import { Link, useParams } from "react-router";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { formatDateToDDMMYYYY } from "../utils";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectProducts, toggleLikes } from "../reducers/productSlice";
import { CiHeart } from "react-icons/ci";

const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useAppSelector(selectProducts).find(
    (prod) => prod.id === productId
  );
  const dispatch = useAppDispatch();

  console.log("product:", product);

  if (!product) {
    return <p>product not found</p>;
  }

  return (
    <section className="w-full">
      <div className="py-5">
        <Link to={"/products"} className="flex items-center gap-1">
          <FaArrowLeft />
          back
        </Link>
      </div>

      <div className="max-w-[400px] w-full h-[400px] mx-auto mt-4 relative">
        <img
          src={product.urls.regular}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-2">
        <div className="flex items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleLikes(product.id));
            }}
            className="bg-white hover:bg-red-500 hover:text-white p-2 rounded-full z-40  transition-all duration-300"
          >
            {product.isLiked ? (
              <FaHeart className="text-red-600" />
            ) : (
              <CiHeart />
            )}
          </button>
          {product.likes}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <p>{product.alt_description}</p>
        <p>{formatDateToDDMMYYYY(String(product?.created_at))}</p>
      </div>
    </section>
  );
};

export default SingleProduct;
