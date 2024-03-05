import { useState, useEffect } from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomePageCarousel from "./HomePageCarousel/HomePageCarousel";
import Search from "../../components/Search/Search";
import FloatingButtons from "../../components/FloatingButtons/FloatingButtons";
import Footer from "../../components/Footer/Footer";
import CarService from "../../services/CarService";
import { CarData } from "../../constants/constants";
import WidgetBox from "../../components/WidgetBox/WidgetBox";
import "./Home.css";

const Home = () => {
  const [frontPageCars, setFrontPageCars] = useState<CarData[]>([]);

  useEffect(() => {
    const fetchFrontPageCars = async () => {
      try {
        const cars = await CarService.getFrontPageCars();
        setFrontPageCars(cars);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFrontPageCars();
  }, []);

  return (
    <div className="home-container">
      <HomeHeader />
      <HomePageCarousel carList={frontPageCars} />
      <Search />
      <WidgetBox />
      {/* <Footer /> */}
      <FloatingButtons />
    </div>
  );
};

export default Home;
