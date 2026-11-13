import { Link } from "react-router-dom";

export const newsList = [
  { id: 1, title: "React yangi versiyasi chiqdi", text: "React'da yangi imkoniyatlar qo'shildi." },
  { id: 2, title: "Vite tezligi", text: "Vite loyihani juda tez ishga tushiradi." },
  { id: 3, title: "React Router haqida", text: "Sahifalar orasida navigatsiya qilish uchun ishlatiladi." },
];

function News() {
  return (
    <section>
      <h1>News</h1>
      <ul>
        {newsList.map((item) => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default News;