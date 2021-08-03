import './App.css';
import Productlist from './Component/Productlist';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const products = [
    {
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.pxmujo7t5fBi707jneVRRQHaJ8&pid=Api&P=0&w=300&h=300",
      name: "iphone",
      price: "1000dt",
    },
    {
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.pxmujo7t5fBi707jneVRRQHaJ8&pid=Api&P=0&w=300&h=300",
      name: "iphone",
      price: "1000dt",
    },
    {
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.pxmujo7t5fBi707jneVRRQHaJ8&pid=Api&P=0&w=300&h=300",
      name: "iphone",
      price: "1000dt",
    },
  ];
  return (
    <div>
      <Productlist produits={products}/>
    </div>
  );
}

export default App;
