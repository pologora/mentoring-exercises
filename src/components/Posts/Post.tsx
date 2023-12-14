import style from './Posts.module.css';

type PostProps = {
  title: string;
  body: string;
};

const Post = ({ title, body }: PostProps) => {
  return (
    <div className={style.post}>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};
export default Post;
