import styles from "../components/BlogSection.module.css";
import img1 from "../images/blog-page/arabic-businessman.png";
import img2 from "../images/blog-page/woman-in-white-sleeveless.png";
import img3 from "../images/blog-page/apple-monitors.png";
import { Link } from "react-router-dom";

const blogHomePageArr = [
  { id: 1, img: img1, date: "20 Dec 2021" },
  { id: 2, img: img2, date: "17 Apr 2022" },
  { id: 3, img: img3, date: "24 Jul 2022" },
];

export default function BlogSection() {
  return (
    <div className={styles.blogStn}>
      <section className="pd-128">
        <h2 className="fs-48-600">Our blog</h2>

        <BlogBox data={blogHomePageArr} />
      </section>
    </div>
  );
}

function BlogBox({ data }) {
  return (
    <div className={styles.blogBox}>
      {data.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

function BlogPost({ post }) {
  return (
    <div className={styles.blogPost}>
      <div className={styles.imgHolder}>
        <img src={post.img} alt="" />
      </div>

      <div className={styles.blogDetails}>
        <p className={`fs-16-500`}>{post.date}</p>
        <h4 className="fs-24-500">
          How one Webflow user grew his single person consultancy from $0-100K in 14 months
        </h4>
        <p className="fs-16-400">
          See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
        </p>
      </div>

      <Link className="fs-16-500">Read more &rarr;</Link>
    </div>
  );
}
