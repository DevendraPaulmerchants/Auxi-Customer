import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react';
import {Slide, ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './common/scrolltotop/ScrollToTop';
import Loading from './common/loading/Loading';

const Layout = lazy(() => import('./ui/layout/Layout'));
const Home = lazy(() => import('./pages/home/Home'));
const PartnerWithUs = lazy(() => import('./pages/partner-with-us/PartnerWithUs'));
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'));
const Account = lazy(() => import('./pages/account/Account'));
const Transaction = lazy(() => import('./pages/transactions/Transaction'));
const ProtectedRoute = lazy(() => import('./route/ProtectedRoute'));
const TermAndCondition = lazy(() => import('./pages/term-and-condition/TermAndCondition'));
const AuthLayout = lazy(() => import('./authentication/auth-format/AuthLayout'))

const ContactUs = lazy(() => import('./common/contactus/ContactUs'));
const AboutUs = lazy(() => import('./common/aboutus/AboutUs'));
const PrivacyPolicy = lazy(() => import('./common/privacy-policy/PrivacyPolicy'));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<AuthLayout />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermAndCondition />} />
              <Route
                path="/portfolio"
                element={
                  <ProtectedRoute>
                    <Portfolio />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/transactions"
                element={
                  <ProtectedRoute>
                    <Transaction />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
          <ToastContainer position="top-center" transition={Slide} autoClose={2000} />
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App;