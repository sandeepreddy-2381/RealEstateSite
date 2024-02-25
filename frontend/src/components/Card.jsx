import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ,");
  };
 // console.log(props);
  return (
    <div className="card">
      <h3 className="card__title ">{props.title}</h3>
      <div className="card__header">
        <img
          className="card__header__photo"
          src={props.photo_main}
          alt="house"
        />
      </div>
      <p className="card__location ">{props.address}</p>
      <div className="row">
        <div className="col-2-of-3">
          <p className="card__info">Price : ${numberWithCommas(props.price)}</p>
          <p className="card__info">BedRooms :{props.bedrooms}</p>
          <p className="card__info">BathRooms :{props.bathrooms}</p>
        </div>
        <div className="col-1-of-3">
          <p className="card__saletype">{props.sale_type}</p>
          <p className="card__hometype">{props.home_type}</p>
          <p className="card__sqft">{props.sqft}</p>
        </div>
      </div>
      <Link className ='card__link' to = {`/listings/${props.slug}`} >View</Link>
    </div>
  );
};

Card.propTypes = {
  title : PropTypes.string.isRequired,
  photo_main : PropTypes.string.isRequired,
  adderss : PropTypes.string.isRequired,
  city : PropTypes.string.isRequired,
  state : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  bedrooms : PropTypes.number.isRequired,
  bathrooms : PropTypes.string.isRequired,
  sale_type : PropTypes.string.isRequired,
  home_type : PropTypes.string.isRequired,
  sqft : PropTypes.number.isRequired,
  slug : PropTypes.string.isRequired,


}

export default Card;
