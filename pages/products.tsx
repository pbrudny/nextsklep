
const ProductsPage = () => {
  return <div>Siemka</div>
};

fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))


export default ProductsPage;

// to się wykonuje raz w trakcie buildowania aplikacji
// czyli ta funkcja już nie jest widoczna w przeglądarce
// czyli Next sobie trzyma te propsy
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

