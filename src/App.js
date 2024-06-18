import { Container } from 'react-bootstrap'
import { NavbarC } from './components/Navbar';
import { Header } from './components/Header';
import { Catigory } from './components/Catigory';
import { Cards } from './components/Cards';
import { items } from './components/Data';
import { useState } from 'react';


function App() {
  const [dataitems, setdataitems] = useState(items);
  const filterbycatigory = (cat) => {
       if (cat === "الكل") {
         setdataitems(items);
       } else {
         const newArr = items.filter((item) => item.category === cat);
         console.log(newArr)
         setdataitems(newArr);
       }
  }
  const filterbysearsh = (word) => {
    if (word !== "") {
      const newarr = items.filter((item) => {
        return item.title === word;
      })
      setdataitems(newarr)
    }
  }
  const allcat = [
    "الكل",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];
 
  return (
    <div className="App ">
      <NavbarC filterbysearsh={ filterbysearsh} />
      <Container>
        <Header />
        <Catigory filterbycatigory={filterbycatigory} allcat={allcat} />
        <Cards dataitems={dataitems} />
     
      </Container>

      
    </div>
  );
}

export default App;
