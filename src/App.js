import React from "react"
import './App.css';
import Row from "./components/Row"
import request from "./requests";
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row_container">
        <Row title="Netflix original" fetchUrl={request.fetchNetflixOriginals} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
