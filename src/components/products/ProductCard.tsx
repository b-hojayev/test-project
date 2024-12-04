import { Link } from "react-router";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteProduct, toggleLikes } from "../../reducers/productSlice";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

interface ProductCardType {
  productId: string;
  imgUrl: string;
  desc: string;
  isLiked: boolean;
}

const ProductCard = ({ productId, imgUrl, desc, isLiked }: ProductCardType) => {
  const dispatch = useAppDispatch();
  return (
    <Link
      to={`/products/${productId}`}
      className="w-full cursor-pointer hover:scale-105 transition-transform duration-150 relative group"
    >
      <div className="w-full h-[200px]">
        <img
          src={imgUrl}
          alt="img"
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <p className="truncate text-xs">{desc}</p>

      <div className="absolute bottom-[10%] left-[5%] flex items-center gap-1">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleLikes(productId));
          }}
          className="bg-white hover:bg-red-500 hover:text-white p-2 rounded-full z-40 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {isLiked ? <FaHeart className="text-red-600" /> : <CiHeart />}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteProduct(productId));
          }}
          className="bg-white hover:bg-red-500 hover:text-white p-2 rounded-full z-40 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <MdDelete />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
