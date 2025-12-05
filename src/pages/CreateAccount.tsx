import React, { useState, useRef } from "react";
import Button from "../components/Button";
import { auth, storage } from "../firebase"; // ← make sure storage is exported
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const CreateAccount: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Profile picture state
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  // Open file picker
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // Handle image selection + preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Optional: limit size
    if (file.size > 5 * 1024 * 1024) {
      setError("Image too large (max 5MB)");
      return;
    }

    setPhoto(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // 1. Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      let photoURL = null;

      // 2. Upload profile picture if selected
      if (photo) {
        const storageRef = ref(storage, `profilePictures/${user.uid}/avatar.jpg`);
        await uploadBytes(storageRef, photo);
        photoURL = await getDownloadURL(storageRef);
      }

      // 3. Save name + photo to Firebase Auth user profile
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      // 4. Sign out (your original flow)
      await signOut(auth);

      alert("Account created successfully! Please log in.");
      navigate("/login");
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered");
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else {
        setError("Failed to create account. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[url('/images/create-account.png')] bg-fixed bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col gap-[40px] max-w-[430px] min-h-screen items-center mx-auto">

        {/* Header */}
        <div className="flex flex-col self-stretch box-border pt-[80px] pr-[25px] pl-[24px] pb-[46px] justify-center items-center bg-[#151414] border-b-[0.25px] border-[#B3B4B4] border-solid">
          <div className="flex self-stretch justify-between items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.82497 13L12.725 17.9C12.925 18.1 13.021 18.3333 13.013 18.6C13.005 18.8667 12.9006 19.1 12.7 19.3C12.5 19.4833 12.2666 19.5793 12 19.588C11.7333 19.5967 11.5 19.5007 11.3 19.3L4.69996 12.7C4.59996 12.6 4.52896 12.4917 4.48696 12.375C4.44496 12.2583 4.42463 12.1333 4.42596 12C4.4273 11.8667 4.4483 11.7417 4.48896 11.625C4.52963 11.5083 4.6003 11.4 4.70096 11.3L11.301 4.7C11.4843 4.51667 11.7136 4.425 11.989 4.425C12.2643 4.425 12.5016 4.51667 12.701 4.7C12.901 4.9 13.001 5.13767 13.001 5.413C13.001 5.68834 12.901 5.92567 12.701 6.125L7.82497 11H19C19.2833 11 19.521 11.096 19.713 11.288C19.905 11.48 20.0006 11.7173 20 12C19.9993 12.2827 19.9033 12.5203 19.712 12.713C19.5206 12.9057 19.2833 13.0013 19 13H7.82497Z" fill="white"/>
            </svg>
            <p className="first-letter:uppercase text-[#FF0096] underline font-poppins text-[16px] font-normal">
              <a href="/how-it-works">see how it works</a>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full items-center max-w-[358px] gap-[23px] mb-[54px]">

          {/* Title */}
          <div className="flex flex-col items-center text-center gap-[14px]">
            <h1 className="capitalize font-bold text-[30px] bg-gradient-to-r from-[#FF0096] to-[#00BDF9] bg-clip-text text-transparent">
              create account
            </h1>
            <h2 className="text-white text-[20px] font-semibold font-poppins">welcome to NytMate</h2>
            <p className="text-[#A9A9A9] text-[16px] font-semibold leading-tight">
              Join our premier nightlife community.<br/>
              Create shared table bookings, split costs,<br/>
              and meet new people.
            </p>
          </div>

          {/* PROFILE PICTURE – Clickable + Preview */}
          <div className="flex flex-col items-center gap-[10px]">
            <button
              type="button"
              onClick={handleAvatarClick}
              className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-[#FF0096] shadow-lg focus:outline-none"
            >
              {photoPreview ? (
                <img src={photoPreview} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-white flex flex-col items-center justify-center">
                  <img src="/icons/camera.png" alt="Add photo" className="w-8 h-8" />
                  <p className="text-[#1A1A1A] text-xs font-medium mt-1">add photo</p>
                </div>
              )}
            </button>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="text-white text-center">
              <p className="text-sm">Add a profile picture</p>
              <p className="text-xs">Help others recognize you</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="w-full flex flex-col gap-[20px]">
            <input
              type="text"
              placeholder="Preferred Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-[35px] py-[20px] bg-[#F1F4FF] rounded-[10px] border-2 border-solid border-[#1F41BB] text-base"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-[35px] py-[20px] bg-[#F1F4FF] rounded-[10px] border-2 border-solid border-[#1F41BB] text-base"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-[35px] py-[20px] bg-[#F1F4FF] rounded-[10px] border-2 border-solid border-[#1F41BB] text-base"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-[35px] py-[20px] bg-[#F1F4FF] rounded-[10px] border-2 border-solid border-[#1F41BB] text-base"
            />

            {error && <p className="text-red-500 text-center font-bold">{error}</p>}

            <div className="flex flex-col gap-[10px]">
              <Button variant="solid" fullWidth type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
              <p className="text-center text-white font-semibold text-sm">
                Already have an account? <a href="/login" className="text-[#00BDF9]">Log In</a>
              </p>
            </div>
          </form>

          {/* Footer (unchanged) */}
          <div className="flex flex-col items-center gap-[14px] text-center">
            <p className="text-[#FF0096] font-semibold text-sm">or continue with</p>
            <p className="text-white text-xs">
              By clicking Sign Up or the Apple, Google or<br/>Facebook icons, you agree to NytMate’s<br/>
              <a href="#" className="text-[#00BDF9] underline font-semibold">Terms of Service</a> and <a href="#" className="text-[#00BDF9] underline font-semibold">Privacy Policy</a>.
            </p>
            <div className="flex gap-4">
              <div className="w-15 h-15 bg-[#ECECEC] rounded-xl flex items-center justify-center p-3">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M9.377 18.75..." fill="black"/></svg>
              </div>
              <div className="w-15 h-15 bg-[#ECECEC] rounded-xl flex items-center justify-center p-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M20 10..." fill="black"/></svg>
              </div>
              <div className="w-15 h-15 bg-[#ECECEC] rounded-xl flex items-center justify-center p-3">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M12.6371..." fill="black"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;