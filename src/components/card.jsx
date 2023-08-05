

export const Card = (props) => {
    let badgeText ;
    if(props.openSpots===0){
        badgeText='SOLD OUT';
    }
    else if(props.country === "online"){
        badgeText='ONLINE';
    }
  return (
    <div className="card">
        {badgeText && <div className="badge">{badgeText} </div>}
      <img
        src={require(`../images/${props.imagePath}`)}
        alt="tajmahal"
        className="card-img"
      />
      <div className="card-stats">
        <i class="fa-solid fa-star"></i>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) </span>
        <i class="fa-solid fa-location-dot"></i>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>
        <span className="bold">From ${props.price}</span> / Person
      </p>
    </div>
  );
};
