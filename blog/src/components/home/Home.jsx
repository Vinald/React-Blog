import BlogList from "../blog/BlogList.jsx";
import useFetch from "../useFetch/useFetch.jsx";

function Home() {
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className={"home"}>
            {error && <div>Error: {error.message}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;
