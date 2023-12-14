import Post from './Post';
import style from './Posts.module.css';
import { useEffect, useState } from 'react';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const POSTS_PER_PAGE = 4;

const Posts = () => {
  const [postsData, setPostsData] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const pagesQuantity = Math.ceil(postsData.length / POSTS_PER_PAGE);
  const postsToIgnore = POSTS_PER_PAGE * (page - 1);
  const postsForRender = postsData?.slice(
    postsToIgnore,
    postsToIgnore + POSTS_PER_PAGE
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const data: IPost[] = await res.json();
        setPostsData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const pageChangeHandler = (name: 'left' | 'right') => {
    if (name === 'left' && page > 1) {
      setPage((prev) => prev - 1);
    } else if (name === 'right' && page < pagesQuantity) {
      setPage((prev) => prev + 1);
    }
  };

  const renderedPosts = postsForRender?.map((post) => (
    <Post title={post.title} body={post.body} key={post.id} />
  ));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className={style.postsList}>{renderedPosts}</div>
      <div className={style.pageChangeContainer}>
        <button
          className={style.pageChangeBtn}
          name='left'
          onClick={() => pageChangeHandler('left')}
        >
          👈🏽
        </button>
        <span>{page}</span>
        <button
          className={style.pageChangeBtn}
          name='right'
          onClick={() => pageChangeHandler('right')}
        >
          👉🏽
        </button>
      </div>
    </div>
  );
};
export default Posts;
