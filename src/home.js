import { useState } from "react";
import BlogList from "./blogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "me", body: "lorem ipsum....", author: "mario", id: 1 },
    { title: "you", body: "lorem ipsum....", author: "luigi", id: 2 },
    { title: "meyou", body: "lorem ipsum....", author: "bowser", id: 3 },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="Our blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
