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
