import Card from "../../components/PostCard";
import Nav from "../../components/Nav"

function Home() {
  return (
    <div>
      <h1 className="d-flex justify-content-center fw-bold mt-4">My Blog</h1>
      <Card title="Post 4" desc="Here's some content about post 4" buttonLabel="Read More" buttonColor="primary" />
      <Card title="Post 3" desc="This is for post 3" buttonLabel="Read More" buttonColor="primary" />
      <Card title="Post 2" desc="This is about post 2" buttonLabel="Read More" buttonColor="primary" />
      <Card title="Post 1" desc="This is a post" buttonLabel="Read More" buttonColor="primary" />
      <Nav />
    </div>
  );
}

export default Home;