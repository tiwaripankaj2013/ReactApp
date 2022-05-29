import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from "./component/header";
import { HigherOrderComponent } from './component/HOC/HigherOrder';
import { Home } from "./pages";
import PageNotFound from './pages/pageNotFound';
import { User } from "./pages/user";
import { UserDetails } from './pages/userDetails';

function App() {
  // class component

  return (
    <main>    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/user" element={<User />}>
        <Route path=":id" element={<UserDetails />} />
        </Route>
        <Route exact path="/hoc"  element={<HigherOrderComponent />} />
        
        <Route path="*"  element={<PageNotFound/>} />
           
      </Routes>
    </BrowserRouter>
    
    </main>
  );
}

export default App;
