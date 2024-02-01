import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Appbar.css";
import { useAuth } from "./Authcontext";
const Coursera = () => {
  const navigate = useNavigate();
  return (
    <div
      className="coursera"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src="/freshkite_logo.jpg" alt="Logo not found" width={150} />
    </div>
  );
};

export const Signinup = () => {
  const navigate = useNavigate();
  return (
    <div className="sbtn">
      <div>
        <Button
          style={{ backgroundColor: "#4CAF50" }}
          variant="contained"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </Button>
      </div>
      <div className="signin">
        <Button variant="contained" onClick={() => {
            navigate("/signin");
          }}>Signin</Button>
      </div>
    </div>
  );
};

const Addcourse = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate("/")
    }
    const {logout} = useAuth();
    return (
      <div>
        <Button onClick={() => {navigateToHome()}}>Add course</Button>
        <Button >Courses</Button>
        <Button variant="contained" onClick={() => {logout(); navigateToHome()}}>Logout</Button>
      </div>
    )
}

export const Appbar = () => {
  const {isLoggedIn} = useAuth();
  return (
    <div className="appbar">
      <Coursera />
      {isLoggedIn ? <Addcourse /> : <Signinup />}
    </div>
  );
};
