import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostDetail from "./components/posts/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/posts",
    element: (
      <Layout>
        <NewPost />
      </Layout>
    ),
  },
  {
    path: "/posts/:id",
    element: (
      <Layout>
        <PostDetail />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
