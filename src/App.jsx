import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Products/Card'
function App() {
 

  return (
    <>
      <NavBar />
      <main className='main-content'>
        <h1>Welcome to GeekStore!</h1>
        <p>Your one-stop shop for all things geeky. Explore our wide range of products, from collectibles to apparel, and find the perfect item to express your geek pride. Happy shopping!</p>
        <div className='product-grid'>
          <Card 
            name="Geeky T-Shirt"
            price={19.99}
          />
          <Card 
            name="Sci-Fi Novel"
            price={14.99}
          />
          <Card 
            name="Gaming Mouse"
            price={29.99}
          />

        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
