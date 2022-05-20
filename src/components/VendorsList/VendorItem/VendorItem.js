const VendorItem = (props) => {
  let { id, title, logo, rate, description, backgroundImage: background } = props.detail;
  return (
    <li data-id={id} className="vendors__item">
      <img className="vendors__item--cover" style={{backgroundImage:`url(${background})`}} />
      <img className="vendors__item--logo" src={logo} />
      <h1 className="vendors__item--title">{title}</h1>
      <span className="vendors__item--rate">{rate}</span>
      <p className="vendors__item--des">{description}</p>
    </li>
  );
};

export default VendorItem;
