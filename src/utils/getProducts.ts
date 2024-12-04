export type Product = {
  id: string;
  alt_description: string;
  isLiked: boolean;
  likes: number;
  created_at: string;
  urls: {
    regular: string;
  };
};

export const getProducts = async () => {
  const url = `${import.meta.env.VITE_API_HOST}/photos`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
      },
    });
    console.log("res:", response);

    const data: any = await response.json();
    console.log("data:", data);

    const extractedData: Product[] = data.map((item: any) => {
      return {
        id: item.id,
        alt_description: item.alt_description,
        isLiked: false,
        likes: item.likes,
        created_at: item.created_at,
        urls: {
          regular: item.urls.regular,
        },
      };
    });

    return extractedData;
  } catch (error) {
    console.log(error);
  }
};
