import "./Articles.css";

function Articles({ title, img, description, commentName, сomment }) {
  return (
    <div className="article">
      <div className="articles__title">{title}</div>
      <img src={img} alt=""></img>
      <div className="articles__desc">{description}</div>
      <div className="articles__comment">
        <h2>{commentName}</h2>
        {сomment}
      </div>
    </div>
  );
}

export default Articles;
