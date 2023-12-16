import useApi from '../../hooks/useApi';
import Post from './Post';
import style from './Posts.module.css';
import { useState } from 'react';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface PostApiResult {
  data: IPost[] | null;
  isLoading: boolean;
  isError: boolean;
}

const POSTS_PER_PAGE = 4;
const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const { data, isLoading, isError }: PostApiResult = useApi(postsApiUrl);
  const [page, setPage] = useState(1);

  const pagesQuantity = data ? Math.ceil(data?.length / POSTS_PER_PAGE) : 0;
  const postsToIgnore = POSTS_PER_PAGE * (page - 1);
  const postsForRender = data?.slice(
    postsToIgnore,
    postsToIgnore + POSTS_PER_PAGE
  );

  const pageChangeHandler = (name: 'left' | 'right') => {
    if (name === 'left' && page > 1) {
      setPage((prev) => prev - 1);
    } else if (name === 'right' && page < pagesQuantity) {
      setPage((prev) => prev + 1);
    }
  };

  const renderedPosts = postsForRender?.map((post: IPost) => (
    <Post title={post.title} body={post.body} key={post.id} />
  ));

  if (isError) {
    return (
      <div>
        <p>Something went wrong while fetching data.</p>
        <p>Please try again later or contact support.</p>
      </div>
    );
  }

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
          disabled={page <= 1}
        >
          👈🏽
        </button>
        <span>{page}</span>
        <button
          className={style.pageChangeBtn}
          name='right'
          onClick={() => pageChangeHandler('right')}
          disabled={page >= pagesQuantity}
        >
          👉🏽
        </button>
      </div>
    </div>
  );
};
export default Posts;
