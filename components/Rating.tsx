interface RatingProps {
  rating: number;
}

// typescript zwykle jest w stanie sam rozpoznać typy
// za wyjątkiem paremetrów funkcji tam często trzeba podawać typ
export const Rating = ({rating}: RatingProps) => {
  return <div className={"text-blue-500 font-bold"}>{rating}</div>
};
