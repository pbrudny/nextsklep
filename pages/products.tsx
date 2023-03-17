import {InferGetStaticPropsType} from "next";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{data[0].title}</div>
};

fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))


export default ProductsPage;

// w trybie produkcyjnym to się wykonuje raz w trakcie buildowania
// aplikacji czyli ta funkcja już nie jest widoczna w przeglądarce
// czyli Next sobie trzyma te propsy
// w trybie developerskim dzieje się to przy każdej zmianie kodu
export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data: StoreApiResponse[] = await res.json();

  const inneDate = {
    // tu można by pobierać inne dane o swoim kształcie
    // getStaticProps nam by to scalił
    // InferGetStaticProps by ogarnąć typy (kształt), który już by odbiegał
    // od samego StoreApiRespons
  }

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

