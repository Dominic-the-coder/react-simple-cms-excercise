import { Link, useNavigate } from "react-router-dom";

function UserChangePasswordPage() {
  const navigate = useNavigate();
  return (
    <div class="container mx-auto my-5">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h1 class="h1">Change Password</h1>
      </div>
      <div class="card mb-2 p-4">
        <form>
          <div class="mb-3">
            <div class="row">
              <div class="col">
                <label for="password" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="col">
                <label for="confirm-password" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confirm-password"
                />
              </div>
            </div>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">
              Change Password
            </button>
          </div>
        </form>
      </div>
      <div class="text-center">
        <Link to="/usermanagepage">
          <i class="bi bi-arrow-left"></i> Back to Users
        </Link>
      </div>
    </div>
  );
}

export default UserChangePasswordPage;
