import style from './RecComp.module.css';

type Comment = {
  username: string;
  comment: string;
  subComments?: Comment[];
};

type RecCompParams = {
  data: Comment[];
};

function CommentItem({ username, comment, subComments }: Comment) {
  return (
    <div key={comment}>
      <p>{username}</p>
      <p>{comment}</p>
      {subComments && <RecComp data={subComments} />}
    </div>
  );
}

function RecComp({ data }: RecCompParams) {
  const commentsList = data.map((item) => (
    <CommentItem key={item.comment} {...item} />
  ));
  return <div className={style.container}>{commentsList}</div>;
}
export default RecComp;
