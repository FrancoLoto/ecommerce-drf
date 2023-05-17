import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home';
import Error404 from './containers/Error404';

import Signup from './containers/auth/Signup';
import Login from './containers/auth/Login';
import Activate from './containers/auth/Activate';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';

import Shop from './containers/Shop';
import ProductDetail from './containers/ProductDetail';
import Search from './containers/Search';
import Cart from './redux/reducers/cart';
import Checkout from './containers/Checkout';
import ThankYou from './containers/ThankYou';
import Dashboard from './containers/Dashboard';
import DashboardPayments from './containers/DashboardPayments';
import DashboardPaymentDetail from './containers/DashboardPaymentDetail';
import DashboardProfile from './containers/DashboardProfile';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>} />

          <Route exact path='/' element={<Home/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/checkout' element={<Checkout/>} />

          {/* Authentication */}
          <Route exact path='/registro' element={<Signup/>} />
          <Route exact path='/ingresar' element={<Login/>} />
          <Route exact path='/activate/:uid/:token' element={<Activate/>} />
          <Route exact path='/cambiar_contrasena' element={<ResetPassword/>} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />

          {/* Ecommerce */}
          <Route exact path='/tienda' element={<Shop/>} />
          <Route exact path='/product/:productId' element={<ProductDetail/>} />
          <Route exact path='/search' element={<Search/>} />
          <Route exact path='/thankyou' element={<ThankYou/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/dashboard/payments' element={<DashboardPayments/>} />
          <Route exact path='/dashboard/payment/:transaction_id' element={<DashboardPaymentDetail/>} />
          <Route exact path='/dashboard/profile' element={<DashboardProfile/>} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
