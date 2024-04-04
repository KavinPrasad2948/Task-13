import PropTypes from "prop-types";

export default function PricingPlan({ name, price, features }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div
          className={`card-header  text-secondary text-center my-0`}
        >
          {name}
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">${price}/month</h5>
          <ul className="list-group mt-3 mb-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`list-group-item py-2 ${
                  feature.secondary ? "text-secondary" : ""
                }`}
              >
                 {feature.isAvailable ? '✘  ' :'✔  ' }
   
                { feature.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer text-center">
          <button className="btnbtn-lg btn-block btn-primary">Choose Plan</button>
        </div>
      </div>
    </div>
  );
}
PricingPlan.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.array,
};
