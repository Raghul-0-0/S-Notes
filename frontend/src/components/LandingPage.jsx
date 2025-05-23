import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <GoogleLogin onSuccess={(CredentialResponse) => {
                console.log(CredentialResponse)
                navigate("/home")
            }} onError={() => console.log("Login Failed")}/>
        </>
    )
}

export default LandingPage;