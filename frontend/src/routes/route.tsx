import TrendingPosts from "../components/TrendingPosts";
import PostDetailed from "../components/PostDetailed";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Hello *user*</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </nav>

        <div>
          <TrendingPosts />
        </div>
        <div>
          <PostDetailed />
        </div>
      </div>
    </>
  );
}
