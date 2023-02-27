import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";

const DATA = {
  description: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Nam sollicitudin ex sit amet neque tempor, ac
          congue nisi tempus. Quisque vestibulum ac ex a
          accumsan. Pellentesque cursus diam eget auctor auctor.
          Integer accumsan dolor in sem posuere varius. Mauris consequat, augue vel facilisis placerat, ante velit efficitur diam, eu tempus nisl dui in justo. Nulla sed arcu congue, accumsan dolor sed, gravida ligula. Nunc et semper dolor. Nunc vel erat eu diam consectetur venenatis. Duis purus lectus, sodales id semper sit amet, finibus id ex. In id nunc eu nunc fringilla commodo. Donec malesuada justo et dignissim ultricies.
        `,
  thumbnailUrl: `https://picsum.photos/id/1060/536/354`,
  thumbnailAlt: `Barista nalewa kawę`,
  rating: 4.5,

};

interface RatingProps {
  rating: number;
}

// typescript zwykle jest w stanie sam rozpoznać typy
// za wyjątkiem paremetrów funkcji tam często trzeba podawać typ
const Rating = ({rating}: RatingProps) => {
  return <div className={"text-blue-500 font-bold"}>{rating}</div>
};

interface ProductProps {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  }
};

const Product = ({data}: ProductProps) => {
  return (
    <>
      <img
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
      />
      <p>
        {data.description}
      </p>
      <Rating rating={data.rating}/>
    </>
  )
};
export default function Home() {
  return (
    <div className="flex flex-col bg-teal-100 min-h-screen">
      <Header/>
      <main className={"flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2"}>
        <Product data={DATA}/>
      </main>
      <Footer/>
    </div>
  )
}
