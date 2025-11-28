function ArrayEx() {
  const movies = [{id: 111, title:"Shawshank Redemption" , rating: 9.3 },
    {id: 112, title:"The Godfather" , rating: 7 },
    {id: 113, title:"The Dark Knight" , rating: 6.0 },
    {id: 114, title:"Pulp Fiction" , rating: 5.9 },
    {id: 115, title:"Forrest Gump" , rating: 8.8 },]

  return (
    <div>
      <h2>Movies having rating 7+</h2>
      <ul>
        {movies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayEx;