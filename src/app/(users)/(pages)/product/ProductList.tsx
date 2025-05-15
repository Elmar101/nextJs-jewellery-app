import Image from 'next/image';

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch('https://dummyjson.com/products?limit=100');
  const data: {
    limit: number;
    skip: number;
    total: number;
    products: IProduct[];
  } = await response.json();
  return data.products;
};

const ProductList = async () => {
  let products: IProduct[] = [];
  try {
    products = await getProducts();
  } catch (e) {
    console.log(e);
    products = [];
  }
  console.log(products);

  return (
    <div className="grid grid-cols-4 gap-4">
      {products?.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src={product.images[0]}
            alt={product.title}
            className="w-full h-48 object-cover"
            width={200}
            height={200}
          />
          <h2 className="text-lg font-semibold dark: text-black">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-600">Price: ${product.price}</p>
          <p className="text-gray-600">Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
