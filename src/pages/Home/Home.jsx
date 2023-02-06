import React, { useState } from "react";
import styles from "./Home.module.scss";
import Posts from "../../components/Posts";
import { useDispatch, useSelector } from "react-redux";
// import Pagination from "../../components/Pagination";
import PaginateItems from "./PaginateItems";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [itemOffset, setItemOffset] = useState(0);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <Posts posts={currentPosts} />
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
      <PaginateItems
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
