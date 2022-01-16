import "./styles.css";
import Row from "./components/Row";
import request from "./requests";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
function App() {
  return (
      <div className="App">
      <NavBar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default App;
