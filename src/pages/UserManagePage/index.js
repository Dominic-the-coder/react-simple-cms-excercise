import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function UserManagePage() {
  const navigate = useNavigate();
  return (
    <div class="container mx-auto my-5">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h1 class="h1">Manage Users</h1>
        <div class="text-end">
          <Button
            color="primary"
            onClick={() => {
              navigate("/useraddpage");
            }}
          >
            Add New User
          </Button>
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
                <div class="d-flex justify-content-end gap-2">
                  <Button
                    color="green"
                    onClick={() => {
                      navigate("/usereditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="yellow"
                    onClick={() => {
                      navigate("/userchangepasswordpage");
                    }}
                  >
                    <i class="bi bi-key"></i>
                  </Button>
                  <Button
                    color="red"
                    onClick={() => {
                      navigate("#");
                    }}
                  >
                    <i class="bi bi-trash"></i>
                  </Button>
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
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    color="green"
                    onClick={() => {
                      navigate("/usereditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="yellow"
                    onClick={() => {
                      navigate("/userchangepasswordpage");
                    }}
                  >
                    <i class="bi bi-key"></i>
                  </Button>
                  <Button
                    color="red"
                    onClick={() => {
                      navigate("#");
                    }}
                  >
                    <i class="bi bi-trash"></i>
                  </Button>
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
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    color="green"
                    onClick={() => {
                      navigate("/usereditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="yellow"
                    onClick={() => {
                      navigate("/userchangepasswordpage");
                    }}
                  >
                    <i class="bi bi-key"></i>
                  </Button>
                  <Button
                    color="red"
                    onClick={() => {
                      navigate("#");
                    }}
                  >
                    <i class="bi bi-trash"></i>
                  </Button>
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
