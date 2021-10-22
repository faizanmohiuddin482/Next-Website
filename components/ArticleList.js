import articleStyles from "../styles/article.module.css";
import ArticleItem from "./ArticleItem";
const Article = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((item) => (
        <ArticleItem article={item} key={item.id} />
      ))}
    </div>
  );
};

export default Article;
