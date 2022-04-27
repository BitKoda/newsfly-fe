import { Link } from "react-router-dom";
import truncateText from "../utils/truncateText";
import formatDate from "../utils/formatDate";

const ArticlesListCard = ({
  article_id,
  body,
  title,
  author,
  created_at,
  topic,
  comment_count,
  votes,
}) => {
  return (
    <article className="article__card">
      <header className="article__card-header">
        <div className="article--metadata__date">
          {formatDate(created_at)}
          <Link to={`/articles/?topic=${topic}`}>
            <span className="topic--metadata__article">{topic}</span>
          </Link>
        </div>
        <Link to={`/article/${article_id}`}>
          <h2 className="article__h2">{title}</h2>
        </Link>
        <div className="article--metadata">
          <span className="author--metadata__article">By {author} // </span>
          <span className="comment-count--metadata__article">
            {comment_count} comments //
          </span>
          <span className="comment-count--metadata__article">
            {votes} votes
          </span>
        </div>
      </header>
      <p>{truncateText(body)}</p>
    </article>
  );
};

export default ArticlesListCard;
