import TrendingPosts from "../components/TrendingPosts";

export default function Root() {
  let name: string = "Matteo";

  return (
    <>
      <div id="sidebar">
        <h1>Hello {name}</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>

        <div>
          <TrendingPosts />
        </div>
      </div>
    </>
  );
}
