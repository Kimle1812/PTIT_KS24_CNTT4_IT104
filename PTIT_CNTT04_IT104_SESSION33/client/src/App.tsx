import "./App.css"
import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"
export default function App() {
  return (
    <div>
      <>
        <div className="container">
          <div className="page-header">
            <h1>Shopping Cart</h1>
          </div>
          <div className="row">
            <ProductList></ProductList>
            <ShoppingCart></ShoppingCart>
          </div>
        </div>
      </>

    </div>
  )
}
