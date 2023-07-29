import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  NavBar,
  Checkout,
  SearchResults,
  ProductPage,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>

      <section class="footer">
        <div class="backtop">
          <span><a href="/">Back to Top</a></span>
        </div>
        <div class="detail">
          <div class="table">
            <div>
              <div class="t-head">Get to Know Us</div>
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">About Amazon</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Amazon Advices</a></li>
                <li><a href="#">Amazon Science</a></li>
              </ul>
            </div>

            <div>
              <div class="t-head">Make Money with Us</div>
              <ul>
                <li><a href="#">Sell Products on Amazon</a></li>
                <li><a href="#">Sell on Amazon Business</a></li>
                <li><a href="#">Sell Apps on Amazon</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Advertise your Products</a></li>
                <li><a href="#">Host an Amazon Hub</a></li>
              </ul>
            </div>

            <div>
              <div class="t-head">Amazon Payment Products</div>
              <ul>
                <li><a href="#">Amazon Business Cards</a></li>
                <li><a href="#">Shop with Points</a></li>
                <li><a href="#">Reload your Balance</a></li>
                <li><a href="#">Amazon Currency Converter</a></li>
              </ul>
            </div>

            <div>
              <div class="t-head">Let Us Help You</div>
              <ul>
                <li><a href="#">Amazon and COVID-19</a></li>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Shipping Rates and Policies</a></li>
                <li><a href="#">Returns and Replacements</a></li>
                <li><a href="#">Manage your Content & Devices</a></li>
                <li><a href="#">Amazon Assistant</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="copy">
          <span>&copy; Designed by Rushikesh Shinde</span>
        </div>
      </section>
    </>
  );
};

export default App;
