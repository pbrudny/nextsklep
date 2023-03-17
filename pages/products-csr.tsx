import {Product} from "@/components/Product";
import {useQuery} from "react-query";

// NOTE: react-query zostało przemianowane na @tanstack/react-query

// yarn add react-query
// to ułatwia robienie requestów z Reacta
// hook obudowuje w inne hooki i zapisuje stan
// useQuery rozwiązuje problem z asynchronicznością fetcha
// bo zwraca nam np. .isLoading
const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { isLoading, data, error } = useQuery('products', getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Coś poszło nie tak</div>
  }

  return <ul className={"grid grid-cols-1 sm:grid-cols-3 md:grip-cols-3 gap-4"}>
    {data.map((product) => {
      return <li key={product.id} className={"shadow-xl border-2"}>
        <Product data = {
          {
           title: product.title,
           description: product.description,
           thumbnailUrl: product.image,
           thumbnailAlt: product.title,
           rating: product.rating.rate,
          }
        }
        />
      </li>;
    })}
  </ul>
};

export default ProductsCSRPage;

//quicktype.io
// paste Json from Inspect -> console
export interface StoreApiResponse {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      {
    rate:  number;
    count: number;
  };
}

