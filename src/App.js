import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import NextContent from './nextContent/nextContent';
import ThirdContent from './thirdContent/thirdContent';
import FourthContent from './fourthContent/fourthContent';
import Footer from './Footer/Footer';
import './Header/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='App-Header'>
        <Header />
        <Content /> <br />
        <div className="mainbody">
          <NextContent />
          <ThirdContent />
          <FourthContent />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
