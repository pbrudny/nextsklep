import {InferGetStaticPropsType} from "next";
import {Product} from "@/components/Product";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <ul className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
    {data.map((product) => {
      return <li key={product.id}>
        <Product data = {
          {
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

fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))


export default ProductsPage;

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    }
  }
}

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

