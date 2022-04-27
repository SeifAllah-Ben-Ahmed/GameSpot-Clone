import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./screens/Shop";
import Home from "./screens/Home";
import Layout from "./components/Layout";
import SingleProduct from "./screens/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/product" element={<SingleProduct />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
