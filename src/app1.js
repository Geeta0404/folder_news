import logo from './logo.svg';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './CardComponent';



function App() {
  return (
    <>
    
    <div className="container mt-5">
      <h1 className="text-center">Welcome to My Website</h1>
      <div className="row">
        <div className="col-md-4">
          <CardComponent
            title="Card Title 1"
            text="Some quick example text to build on the card title."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
        <div className="col-md-4">
          <CardComponent
            title="Card Title 2"
            text="Some quick example text to build on the card title."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
        <div className="col-md-4">
          <CardComponent
            title="Card Title 3"
            text="Some quick example text to build on the card title."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
      </div>
    </div>



   {/* <Header />
      <main>
        <h2>Welcome to My Website</h2>
        <p>This is the content of the page.</p>
      </main> */}
    
    
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
