import Image from "./Image.jsx";
import PropTypes from "prop-types";

export default function PlaceImg({place,index=0,className=null}) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <Image className={className} src={place.photos[index]} alt=""/>
  );
}

PlaceImg.propTypes = {
    place: PropTypes.array.isRequired,
    index: PropTypes.array.isRequired,
    className: PropTypes.array.isRequired,
}