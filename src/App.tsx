import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import TableDetails from "./pages/TableDetails";

// Lazy imports
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const Verification = lazy(() => import("./pages/Verification"));
const VerificationCode = lazy(() => import("./pages/VerificationCode"));
const Verified = lazy(() => import("./pages/Verified"));
const TablesAndVenues = lazy(() => import("./pages/TablesAndVenues"));
const ConfirmJoinRequest = lazy(() => import("./pages/ConfirmJoinRequest"));
const BookingConfirmed = lazy(() => import("./pages/BookingConfirmed"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const VenueDetails = lazy(() => import("./pages/VenueDetails"));
const ForBusiness = lazy(() => import("./pages/ForBusiness"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      }
    >
      <Routes>
        {/* Your real routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/tables-and-venues" element={<TablesAndVenues />} />
        <Route path="/table-details" element={<TableDetails />} />
        <Route path="/confirm-join-request" element={<ConfirmJoinRequest />} />
        <Route path="/booking-confirmed" element={<BookingConfirmed />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/venue-details" element={<VenueDetails />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* THIS LINE FIXES THE "/nytmate" ERROR FOREVER */}
        <Route path="/nytmate" element={<Navigate to="/" replace />} />

        {/* Optional: redirect any unknown route to home (recommended) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;