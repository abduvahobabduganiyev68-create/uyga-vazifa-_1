import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <h2>Sahifa topilmadi</h2>
      <p>Siz izlayotgan sahifa mavjud emas yoki manzil noto'g'ri kiritilgan.</p>
      <Link to="/">Bosh sahifaga qaytish</Link>{" | "}
      <Link to="/news">Yangiliklarni ko'rish</Link>
    </section>
  );
}

export default NotFound;