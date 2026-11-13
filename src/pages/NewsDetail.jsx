import { useParams, Link } from "react-router-dom";
import { newsList } from "./News";
import NotFound from "./NotFound";

function NewsDetail() {
  const { id } = useParams();
  const item = newsList.find((n) => n.id === Number(id));

  if (!item) return <NotFound />;

  return (
    <section>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
      <p>Yangilik ID: {id}</p>
      <Link to="/news">← Barcha yangiliklar</Link>
    </section>
  );
}

export default NewsDetail;