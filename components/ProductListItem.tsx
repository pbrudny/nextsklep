import Link from "next/link";
import Image from "next/image";

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

// Image-Component
// rozwiazujemy problem layout shift tego, że w trakcie ładowania strony
// najpierw jest tekst a potem layout się rozsypuje jak się załaduje obrazek
//
// Jak mamy layout= responsive to możemy podać
// width and height jako proporcje
// ale wtedy obrazki będą rozciągnięte
// objectFit (contain/cover)
// contain pokazuje cały obrazek zachowując proporcję
// cover zachowuje proporcje ale obcina obrazek grunt zeby zakryć cały obszar
export const ProductListItem = ({data}: ProductListItemProps) => {
  return (
    <>
      <div className={"bg-white p-4"}>
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        layout={"responsive"}
        width={16}
        height={9}
        objectFit={"contain"}
      />
      <Link href={`/products/${data.id}`}>
        <h2 className={"p-4 text-3xl font-bold"}>{data.title}</h2>
      </Link>
      </div>
    </>
  )
};
