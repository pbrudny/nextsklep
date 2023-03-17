import {Rating} from "@/components/Rating";

interface ProductProps {
  data: {
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  }
}

export const Product = ({data}: ProductProps) => {
  return (
    <>
      <img
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
      />
      <h2 className={"p-4 text-2xl font-bold"}>{data.title}</h2>
      <p>
        {data.description}
      </p>
      <Rating rating={data.rating}/>
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
