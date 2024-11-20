import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div class="container mx-auto my-5">
      <h1 class="h1 mb-4 text-center">Dashboard</h1>
      <div class="row">
        <div class="col">
          <div class="card mb-2">
            <div class="card-body">
              <h5 class="card-title text-center">
                <div class="mb-1">
                  <i class="bi bi-pencil-square"></i>
                </div>
                Manage Posts
              </h5>
              <div class="text-center mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/postmanagepage");
                  }}
                >
                  Access
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-2">
            <div class="card-body">
              <h5 class="card-title text-center">
                <div class="mb-1">
                  <i class="bi bi-people"></i>
                </div>
                Manage Users
              </h5>
              <div class="text-center mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/usermanagepage");
                  }}
                >
                  Manage Users
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 text-center">
        <Link to="/">
          <i class="bi bi-arrow-left"></i> Back
        </Link> 
      </div>
    </div>
  );
}

export default Dashboard;
