// 1.Import Area
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Aside from './Components/Aside';
import Section from './Components/Section';


//2.function defination area
function App() {
  return (
    <>
      <Header />
      <main>
      <Aside />
      <Section />
      </main>
      <Footer />
    </>
  );
}

//3.Export Area
export default App;
