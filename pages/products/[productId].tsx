import {StoreApiResponse} from "@/pages/products";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {ProductDetails} from "@/components/ProductDetails";
import Link from "next/link";

const ProductIdPage = ({
                         data
                       }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>
  }

  return <div>
    <Link href={"/products"}>
      Wróć na stronę główną
    </Link>
    <ProductDetails data={{
      id: data.id,
      title: data.title,
      thumbnailUrl: data.image,
      thumbnailAlt: data.title,
      description: data.description,
      rating: data.rating.rate,
    }}/>
  </div>
};

export default ProductIdPage;

export type InferGetStaticPathsType<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
  }>
  ? R
  : never;

// chcemy ograniczyć liczbę możliwych id
// zgodnie z tym ile rzeczywiście istnieje produktów

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        }
      }
    }),
    fallback: false,
  }
};

export const getStaticProps = async ({
                                       params
                                     }: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    }
  }
  const res = await fetch(
    `https://fakestoreapi.com/products/${params?.productId}`
  )
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    }
  }
}
