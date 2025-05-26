import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse) => {
    const idToken = credentialResponse.credential;
    try {
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();
      console.log("Backend response:", data);
      if (data.success) {
        navigate("/home");
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onError={() => console.log("Login Failed")}
    />
  );
};

export default LandingPage;
