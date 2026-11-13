function Categories() {
  const categories = ["Texnologiya", "Sport", "Ta'lim", "Sayohat"];

  return (
    <section>
      <h1>Categories</h1>
      <ul>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;