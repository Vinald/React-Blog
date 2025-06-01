import styles from "./BlogList.module.css";
import { Link } from "react-router-dom";

function BlogList({ blogs, title }) {
    return (
        <div className={styles.blogList}>
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div key={blog.id} className={styles.blogPreview}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>
                            <strong>Author:</strong> {blog.author}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
