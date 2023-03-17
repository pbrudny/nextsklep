interface ProductDetails {
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

// Pick pozwala stworzyć now typ, który ma wybrane
// wskazane typy z istniejącego interfejsu
type ProductListItem = Pick<ProductDetails,
  "title" | "thumbnailUrl" | "thumbnailAlt">;

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
      <h2 className={"p-4 text-3xl font-bold"}>{data.title}</h2>
    </>
  )
};

// ProTip:
// Zakładka Elements wyświetla nam kod (DOM),
// który został wyrenderowany przez klienta –
// czyli najpierw zwrócony z serwera,
// a potem zmodyfikowany przez JavaScript.

//  Natomiast otwarcie "View Page Source"
//  powoduje wyświetlenie kodu w takiej postaci,
//  w jakiej dostarczył go nam serwer – bez zmian w JS.
// w standardowym JS owym SPA to by był sam <root></root>
// a NEXT juz to tam dostarcza html
