import { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { addProducts, ProductDetails } from "../reducers/productSlice";
import { useNavigate } from "react-router";
import { getISO8601WithTimezone } from "../utils";

const initialState: ProductDetails = {
  id: "",
  alt_description: "",
  created_at: "",
  isLiked: false,
  likes: 0,
  urls: { regular: "" },
};

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [productDetails, setProductDetails] =
    useState<ProductDetails>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "img") {
      setProductDetails((prev) => ({ ...prev, urls: { regular: value } }));
      return;
    }

    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProductDetail: ProductDetails = {
      ...productDetails,
      created_at: getISO8601WithTimezone(),
    };

    dispatch(addProducts([newProductDetail]));
    navigate("/products");
  };

  console.log("details:", productDetails);

  return (
    <section>
      <h1>Create new product</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-4 max-w-screen-sm mx-auto border border-primary-1 rounded p-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="id">Id:</label>
          <input
            required
            max={20}
            type="text"
            name="id"
            id="id"
            placeholder="Type id..."
            className="border border-primary-1 p-2 rounded"
            value={productDetails?.id}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="alt_description">Description:</label>
          <input
            required
            max={50}
            type="text"
            name="alt_description"
            id="alt_description"
            placeholder="Type description"
            className="border border-primary-1 p-2 rounded"
            value={productDetails?.alt_description}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="alt_description">Img Url:</label>
          <input
            required
            type="text"
            name="img"
            id="img"
            placeholder="Type img url..."
            className="border border-primary-1 p-2 rounded"
            value={productDetails.urls.regular}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="bg-primary-2 text-white w-full mt-4 p-2 rounded hover:bg-primary-2/90 transition-colors duration-200"
        >
          Create
        </button>
      </form>
    </section>
  );
};

export default CreateProduct;
