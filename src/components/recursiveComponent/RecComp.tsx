import style from './RecComp.module.css';

type Comment = {
  username: string;
  comment: string;
  subComments?: Comment[];
};

type RecCompParams = {
  data: Comment[];
  // level
};

function CommentItem({ username, comment, subComments }: Comment) {
  const isLastElement = !subComments || subComments.length == 0;

  return (
    <div key={comment} className={isLastElement ? style.red : undefined}>
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

  return (
    <div>
      <div className={style.container}>{commentsList}</div>
    </div>
  );
}

export default RecComp;
