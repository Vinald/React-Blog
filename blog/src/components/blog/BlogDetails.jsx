import { useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch.jsx";
import { useHistory } from "react-router-dom";

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch("http://localhost:8000/blogs" + id);
    const history = useHistory();

    const handleDelete = (blog) => {
        fetch("http://localhost:8000/blogs" + blog.id, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        });
    };

    return (
        <div className={"blog-details"}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading ....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>{blog.content}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
