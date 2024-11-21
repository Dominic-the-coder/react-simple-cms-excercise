import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function PostManagePage() {
  const navigate = useNavigate();
  return (
    <div class="container mx-auto my-5">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h1 class="h1">Manage Posts</h1>
        <div class="text-end">
          <Button
            color="primary"
            onClick={() => {
              navigate("/postaddpage");
            }}
          >
            Add New Post
          </Button>
        </div>
      </div>
      <div class="card mb-2 p-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col" class="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">5</th>
              <td>Post 5</td>
              <td>
                <span class="badge bg-warning">Pending Review</span>
              </td>
              <td class="text-end">
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    color="primary"
                    onClick={() => {
                      navigate("/singlepostpage");
                    }}
                  >
                    <i class="bi bi-eye"></i>
                  </Button>
                  <Button
                    color="grey"
                    onClick={() => {
                      navigate("/posteditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
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
              <th scope="row">4</th>
              <td>Post 4</td>
              <td>
                <span class="badge bg-success">Publish</span>
              </td>
              <td class="text-end">
                <div className="buttons d-flex justify-content-end gap-2">
                  <Button
                    color="primary"
                    onClick={() => {
                      navigate("/singlepostpage");
                    }}
                  >
                    <i class="bi bi-eye"></i>
                  </Button>
                  <Button
                    color="grey"
                    onClick={() => {
                      navigate("/posteditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
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
              <th scope="row">3</th>
              <td>Post 3</td>
              <td>
                <span class="badge bg-success">Publish</span>
              </td>
              <td class="text-end">
                <div className="buttons d-flex justify-content-end gap-2">
                  <Button
                    color="primary"
                    onClick={() => {
                      navigate("/singlepostpage");
                    }}
                  >
                    <i class="bi bi-eye"></i>
                  </Button>
                  <Button
                    color="grey"
                    onClick={() => {
                      navigate("/posteditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
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
              <td>Post 2</td>
              <td>
                <span class="badge bg-success">Publish</span>
              </td>
              <td class="text-end">
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    color="primary"
                    onClick={() => {
                      navigate("/singlepostpage");
                    }}
                  >
                    <i class="bi bi-eye"></i>
                  </Button>
                  <Button
                    color="grey"
                    onClick={() => {
                      navigate("/posteditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
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
              <td>Post 1</td>
              <td>
                <span class="badge bg-success">Publish</span>
              </td>
              <td class="text-end">
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    color="primary"
                    onClick={() => {
                      navigate("/singlepostpage");
                    }}
                  >
                    <i class="bi bi-eye"></i>
                  </Button>
                  <Button
                    color="grey"
                    onClick={() => {
                      navigate("/posteditpage");
                    }}
                  >
                    <i class="bi bi-pencil"></i>
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

export default PostManagePage;
