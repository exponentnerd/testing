import React, { useState } from "react";
import Button from "../components/Button";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Forgot password modal state
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [resetError, setResetError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/tables-and-venues");
    } catch (err: any) {
      setError(
        err.code === "auth/user-not-found" || err.code === "auth/wrong-password"
          ? "Wrong email or password"
          : err.code === "auth/invalid-email"
          ? "Please enter a valid email"
          : "Login failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError("");
    setResetSent(false);

    if (!resetEmail) {
      setResetError("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetSent(true);
    } catch (err: any) {
      setResetError(
        err.code === "auth/user-not-found"
          ? "No account found with this email"
          : "Failed to send reset email. Try again."
      );
    }
  };

  return (
    <>
      {/* Main Login Screen */}
      <div className="relative w-full min-h-screen overflow-hidden bg-[url('/images/loginimg.png')] bg-fixed bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col gap-[40px] max-w-[430px] min-h-screen items-center mx-auto">
          {/* Header */}
          <div className="flex flex-col self-stretch pt-[80px] pr-[25px] pl-[24px] pb-[46px] bg-[#151414] border-b border-[#B3B4B4]">
            <div className="flex justify-between items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7.82497 13L12.725 17.9C12.925 18.1..." fill="white"/>
              </svg>
              <a href="/how-it-works" className="text-[#FF0096] underline text-sm">see how it works</a>
            </div>
          </div>

          <div className="flex flex-col w-full items-center max-w-[358px] gap-[40px] mb-[54px]">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF0096] to-[#00BDF9] bg-clip-text text-transparent">
              sign in to NytMate
            </h1>

            <form onSubmit={handleLogin} className="w-full space-y-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-9 py-5 bg-[#F1F4FF] rounded-xl border-2 border-[#1F41BB]"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-9 py-5 bg-[#F1F4FF] rounded-xl border-2 border-[#1F41BB]"
              />

              {/* Forgot Password Link */}
              <p
                onClick={() => setShowResetModal(true)}
                className="text-[#00BDF9] font-semibold text-sm text-right cursor-pointer hover:underline"
              >
                forgot your password?
              </p>

              {error && <p className="text-red-500 text-center font-bold">{error}</p>}

              <Button variant="solid" fullWidth type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>

              <Button variant="outline" fullWidth onClick={() => navigate("/create-account")}>
                Create Account
              </Button>
            </form>

            {/* Social Login Footer */}
            <div className="text-center text-white text-xs space-y-3">
              <p className="text-[#FF0096] font-semibold">or continue with</p>
              <div className="flex justify-center gap-4">
                {/* Your social icons */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6">
          <div className="bg-[#151414] rounded-2xl p-8 max-w-sm w-full space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Reset Password</h2>
            
            {resetSent ? (
              <div className="text-center space-y-4">
                <p className="text-green-400 font-semibold">Check your email!</p>
                <p className="text-gray-300 text-sm">
                  We sent a password reset link to<br/><strong>{resetEmail}</strong>
                </p>
                <Button variant="solid" fullWidth onClick={() => setShowResetModal(false)}>
                  Back to Login
                </Button>
              </div>
            ) : (
              <form onSubmit={handlePasswordReset} className="space-y-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-[#F1F4FF] rounded-xl border-2 border-[#1F41BB] text-black"
                />
                {resetError && <p className="text-red-500 text-sm text-center">{resetError}</p>}
                <div className="flex gap-3">
                  <Button variant="outline" fullWidth onClick={() => setShowResetModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="solid" fullWidth type="submit">
                    Send Reset Link
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;