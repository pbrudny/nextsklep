import Link from "next/link";

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

// Pick pozwala stworzyć now typ, który ma wybrane
// wskazane typy z istniejącego interfejsu
type ProductListItem = Pick<ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt">;

interface ProductListItemProps {
  data: ProductListItem;
};

export const ProductListItem = ({data}: ProductListItemProps) => {
  return (
    <>
      <img
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
      />
      <Link href={`/products/${data.id}`}>
        <h2 className={"p-4 text-3xl font-bold"}>{data.title}</h2>
      </Link>
    </>
  )
};
