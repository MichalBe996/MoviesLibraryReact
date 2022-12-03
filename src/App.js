import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { apiKey } from "./components/apiKey"
import React from "react";
import Card from './components/Card';


function App() {
  const [data, setData] = React.useState(
    {genre: "",
    year: "",
    })
  const [visible, setVisible] = React.useState([])
 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prevValues=> ({...prevValues, [name]:value}))
  }
  const handleSubmit = (event) => {
    if(!data.genre || !data.year){
      event.preventDefault();
      alert("You must choose year and genre!")
    }else {
      event.preventDefault();
      fetch(`https://api.themoviedb.org/3/movie/top_rated?with_genres=${data.genre}&primary_release_year=${data.year}&api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setVisible(data.results);
      })
    }
    
    
      
  }
  console.log(visible)
  let moviesList = visible.map(item => {
    return <Card
    key={item.id}
    title={item.original_title}
    date={item.release_date}
    imgSrc={item.poster_path}
    over={item.overview}
    rating={item.vote_average}/>
  })
  return (
    
    <div className="App">
      <Navbar />
      <div className="form--div">
        <form onSubmit={handleSubmit}>
          <div className="select--div">
          <select onChange={handleChange} name="genre" id="selectGenre">
            <option value={false}>--Choose genre--</option>
            <option
            value={"28"}>Action</option>
            <option
            value={"12"}>Adventure</option>
            <option
            value={"16"}>Animation</option>
            <option
            value={"35"}>Comedy</option>
            <option
            value={"80"}>Crime</option>
            <option
            value={"99"}>Documentary</option>
            <option
            value={"18"}>Drama</option>
            <option
            value={"10751"}>Family</option>
            <option
            value={"14"}>Fantasy</option>
            <option
            value={"36"}>History</option>
            <option
            value={"27"}>Horror</option>
            <option
            value={"10402"}>Music</option>
            <option
            value={"9648"}>Mystery</option>
            <option
            value={"10749"}>Romance</option>
            <option
            value={"878"}>Science Fiction</option>
            <option
            value={"10770"}>TV Movie</option>
            <option
            value={"53"}>Thriller</option>
            <option
            value={"10752"}>War</option>
            <option
            value={"37"}>Western</option>

          </select>
          <select onChange={handleChange} name="year" id="selectYear"> 
            <option value={false}>--Choose year--</option>
            <option value={"1980"}>1980</option>
            <option value={"1981"}>1981</option>
            <option value={"1982"}>1982</option>
            <option value={"1983"}>1983</option>
            <option value={"1984"}>1984</option>
            <option value={"1985"}>1985</option>
            <option value={"1986"}>1986</option>
            <option value={"1987"}>1987</option>
            <option value={"1988"}>1988</option>
            <option value={"1989"}>1989</option>
            <option value={"1990"}>1990</option>
            <option value={"1991"}>1991</option>
            <option value={"1992"}>1992</option>
            <option value={"1993"}>1993</option>
            <option value={"1994"}>1994</option>
            <option value={"1995"}>1995</option>
            <option value={"1996"}>1996</option>
            <option value={"1997"}>1997</option>
            <option value={"1998"}>1998</option>
            <option value={"1999"}>1999</option>
            <option value={"2000"}>2000</option>


          </select>
          </div>
          <button type="submit" className="submit--button">Submit</button>
        </form>
        <div className="movie--cards">
          {moviesList}
        </div>
      </div>
    </div>
  );
}

export default App;
