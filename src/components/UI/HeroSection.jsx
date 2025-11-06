import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
Explore the World, One Country at a Time — where 823 crore people share one planet.          </h1>
          <p className="paragraph">
           Embark on a journey across the globe! Discover the history, culture, and wonders of every nation. Sort, search, and filter through countries to explore unique facts in a world of 823 crore people and endless stories.
          </p>
          <NavLink to="/country" className="hero-expo">
              Start Exploring <FaLongArrowAltRight />
          </NavLink>
        
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
