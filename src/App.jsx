import Square from "./Components/Square";


function App() {
  const plans = [
    { 
      name: 'Free',
      price: 0,
      features: [
        { name: 'Single User' },
      { name: '50GB Storage' },
      { name: 'Unlimited Public Projects' },
      { name: 'Community Access' },
      { name: 'Unlimited Private Projects', secondary: true ,isAvailable: true},
      { name: 'Dedicated Phone Support', secondary: true ,isAvailable: true },
      { name: 'Free Subdomain', secondary: true ,isAvailable: true },
      { name: 'Monthly Status Reports', secondary: true ,isAvailable: true }
    ]
  },
  {
    name: 'Plus',
    price: 9,
    features: [
      { name: 'Single User' },
      { name: '50GB Storage' },
      { name: 'Unlimited Public Projects' },
      { name: 'Community Access' },
      { name: 'Unlimited Private Projects', secondary: false ,isAvailable: false },
      { name: 'Dedicated Phone Support', secondary: false ,isAvailable: false },
      { name: 'Free Subdomain', secondary: false ,isAvailable: false },
      { name: 'Monthly Status Reports', secondary: true ,isAvailable: true }
    ]
  },{
    name: 'Pro',
      price: 49,
      features: [
        { name: 'Single User' },
        { name: '50GB Storage' },
        { name: 'Unlimited Public Projects' },
        { name: 'Community Access' },
        { name: 'Unlimited Private Projects', secondary: false ,isAvailable: false },
        { name: 'Dedicated Phone Support', secondary: false ,isAvailable: false },
        { name: 'Free Subdomain', secondary: false ,isAvailable: false },
        { name: 'Monthly Status Reports', secondary: false ,isAvailable: false }
      ]
  }
];
  return( 
    <div className="container">
    <div className="row d-flex  justify-content-between">
      {plans.map((plan, index) => (
        <Square key={index} name={plan.name} price={plan.price} features={plan.features} />
      ))}
    </div>
  </div>
  );
}
export default App;