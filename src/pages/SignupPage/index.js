import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div class="container my-5 mx-auto">
      <h1 class="h1 mb-4 text-center">Sign Up a New Account</h1>

      <div class="card p-4">
        <form method="GET" action="dashboard.html">
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="name" name="name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="email" name="email" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
            />
          </div>
          <div class="mb-3">
            <label for="confirm_password" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="confirm_password"
              name="confirm_password"
            />
          </div>
          <div class="d-grid">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Signup
            </button>
          </div>
        </form>
      </div>

      <div class="d-flex justify-content-between align-items-center gap-3 mx-auto pt-3">
        <Link to="/">
          <i class="bi bi-arrow-left-circle"></i> Go back
        </Link>
        <Link to="/login">
          Already have an account? Login here
          <i class="bi bi-arrow-right-circle"></i>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
