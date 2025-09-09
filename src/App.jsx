import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './common/scrolltotop/ScrollToTop';
import ProtectedRoute from './route/ProtectedRoute';
import TermAndCondition from './pages/term-and-condition/TermAndCondition';

const LogIn = lazy(() => import('./authentication/login/LogIn'));
const Layout = lazy(() => import('./ui/layout/Layout'));

const Home = lazy(() => import('./pages/home/Home'));
const PartnerWithUs = lazy(() => import('./pages/partner-with-us/PartnerWithUs'));
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'));
const Account = lazy(() => import('./pages/account/Account'));
const Transaction = lazy(() => import('./pages/transactions/Transaction'));

const ContactUs = lazy(() => import('./common/contactus/ContactUs'));
const AboutUs = lazy(() => import('./common/aboutus/AboutUs'));
const PrivacyPolicy = lazy(() => import('./common/privacy-policy/PrivacyPolicy'));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/login" element={<LogIn />} />
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
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App;