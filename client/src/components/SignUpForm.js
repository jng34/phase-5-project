import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function SignUpForm({ onSignUp }) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [profileImg, setProfileImg] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    
    let history = useHistory();

    function handleSubmitSignUp(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                profile_img: profileImg,
                email,
                password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((res) => {
            setIsLoading(false);
            if (res.ok) {
                res.json().then((user) => onSignUp(user));
                setUserName("")
                setProfileImg("")
                setEmail("")
                setPassword("")
                setPasswordConfirmation("")
                history.push("/")
            } else {
                res.json().then((err) => setErrors(err.errors));
            }
            
        });
    }

  return (
    <div>
        <h1 className="text-center mt-2" style={{fontSize: '44px', cursor: 'pointer'}} onClick={() => history.push("/")}>MATH is a Joke!</h1>
        <div className="card text-start border border-dark border-2 mt-4" style={{width: "25rem", margin: "auto"}}>
            <form className="px-5 py-3" onSubmit={handleSubmitSignUp}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">UserName</label>
                  <input 
                      type="text"
                      className="form-control" 
                      autoComplete="off"
                      value={username}
                      placeholder="Enter username..." 
                      onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input 
                      type="text"
                      className="form-control" 
                      autoComplete="off"
                      value={email}
                      placeholder="Enter email..." 
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="profile-img" className="form-label fw-bold">Profile Picture</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      autoComplete="off"
                      placeholder="Enter image url..." 
                      value={profileImg}
                      onChange={(e) => setProfileImg(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      autoComplete="current-password"
                      placeholder="Enter password..." 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">Password Confirmation</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      autoComplete="current-password"
                      placeholder="Confirm password..." 
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">SIGN UP</button>
                </div>

                {errors.map((err) => (
                  <p key={err} style={{color: "red"}}>{err}</p>
                 ))}
                <br />
                <p className="text-center">
                    Already have an account? &nbsp;
                    <Link to='/login'>Log In</Link>
                </p> 
            </form>
        </div>   
        <br />
    </div>
  )
}

export default SignUpForm