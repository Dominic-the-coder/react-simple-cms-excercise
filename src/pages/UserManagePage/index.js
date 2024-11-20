import { Link, useNavigate } from "react-router-dom";

function UserManagePage() {
  const navigate = useNavigate();
  return (
    <div class="container mx-auto my-5">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h1 class="h1">Manage Users</h1>
        <div class="text-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/useraddpage");
            }}
          >
            Add New User
          </button>
        </div>
      </div>
      <div class="card mb-2 p-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" class="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">3</th>
              <td>Jack</td>
              <td>jack@gmail.com</td>
              <td>
                <span class="badge bg-success">User</span>
              </td>
              <td class="text-end">
                <div class="buttons">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => {
                      navigate("/usereditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => {
                      navigate("/userchangepasswordpage");
                    }}
                  >
                    <i class="bi bi-key"></i>
                  </button>
                  <a href="#" class="btn btn-danger btn-sm">
                    <i class="bi bi-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jane</td>
              <td>jane@gmail.com</td>
              <td>
                <span class="badge bg-info">Editor</span>
              </td>
              <td class="text-end">
                <div class="buttons">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => {
                      navigate("/usereditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => {
                      navigate("/userchangepasswordpage");
                    }}
                  >
                    <i class="bi bi-key"></i>
                  </button>
                  <a href="#" class="btn btn-danger btn-sm">
                    <i class="bi bi-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>
                <span class="badge bg-primary">Admin</span>
              </td>
              <td class="text-end">
                <div class="buttons">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => {
                      navigate("/usereditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => {
                      navigate("/userchangepasswordpage");
                    }}
                  >
                    <i class="bi bi-key"></i>
                  </button>
                  <a href="#" class="btn btn-danger btn-sm">
                    <i class="bi bi-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center">
        <Link to="/dashboard">
          <i class="bi bi-arrow-left"></i> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default UserManagePage;
