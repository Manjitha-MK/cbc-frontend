import './App.css'
import Productcard from './components/productCard'


function App() {


  return (
    <>
     <Productcard name="Laptop" price="$999.99" discount="10%"/>
     <Productcard name="iPhone 16" price="$499.99" discount="10%"/>
     <Productcard name="Samsung Galaxy S22" price="$499.99" discount="5%"/>
    </>
  )
}

export default App
