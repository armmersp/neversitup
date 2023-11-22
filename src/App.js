import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Permutation from './routes/permutation/Permutation'
import FindOddInt from './routes/findOddInt/FindOddInt'
import CountSmile from './routes/countSmile/CountSmile'


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/permutation" element={<Permutation />} />
        <Route path="/find-odd" element={<FindOddInt />} />
        <Route path="/count-smiley" element={<CountSmile />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
