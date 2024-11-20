import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div class="container my-5 mx-auto">
      <h1 class="h1 mb-4 text-center">Login</h1>

      <div class="card p-4">
        <form method="GET" action="dashboard.html">
          <div class="mb-2">
            <label for="email" class="visually-hidden">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div class="mb-2">
            <label for="password" class="visually-hidden">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="d-grid">
            <button
            className="btn btn-primary"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <div class="d-flex justify-content-between align-items-center gap-3 mx-auto pt-3">
        <Link to="/">
          <i class="bi bi-arrow-left-circle"></i> Go back
        </Link>
        <Link to="/signup">
          Don't have an account? Sign up here
          <i class="bi bi-arrow-right-circle"></i>
        </Link>
      </div>
    </div>
  );
}

export default Login;
