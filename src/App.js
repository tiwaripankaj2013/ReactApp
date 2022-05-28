import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from "./component/header";
import { HigherOrderComponent } from './component/HOC/HigherOrder';
import { Home } from "./pages";
import { User } from "./pages/user";

function App() {
  // class component

  return (
    <main>
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<User />} />
        <Route path="/hoc" element={<HigherOrderComponent />} />
      </Routes>
    </BrowserRouter>
    
    </main>
  );
}

export default App;
