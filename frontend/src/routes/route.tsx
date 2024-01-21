import TrendingPosts from "../components/TrendingPosts";
import PostDetailed from "../components/PostDetailed";
import Navbar from "../components/Navbar.tsx";
import PostForm from "../components/PostForm.tsx";

export default function Root() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div id="sidebar">

        <div>
          <TrendingPosts/>
        </div>
        <div>
          <PostDetailed/>
        </div>
        <div>
          <PostForm/>
        </div>
      </div>
    </>
  );
}
