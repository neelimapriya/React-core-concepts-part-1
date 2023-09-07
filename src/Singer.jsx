export default function Singer({ singer }) {
  console.log(singer);
  return (
    <div style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid purple",
        borderRadius: "10px"
      }}>
      <h2>My Fav singers ❤️</h2>

      <h3>Singer:{singer.name} </h3>
      <p> Age: {singer.age} </p>
    </div>
  );
}
