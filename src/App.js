import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/card";
import cardData from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards">
        {cardData.map((place) => {
          return (
            <Card
              imagePath={place.coverImg}
              rating={place.stats.rating}
              reviewCount={place.stats.reviewCount}
              country={place.location}
              title={place.title}
              description={place.description}
              price={place.price}
              openSpots={place.openSpots}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
