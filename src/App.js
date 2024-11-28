
import './index.css';
import Header from './components/header';
import AllRoutes from './routes/allRoutes';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <AllRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
