import styles from "./style";
import {Navbar,Hero,Admin,Register,Check, Wallet} from "./components";
import { Routes,Route } from 'react-router-dom'

const App = () => (
  
  <><div>
    <Wallet />
  </div>
  <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/check' element={<Check />} />
      </Routes>


    </div></>
);

export default App;
