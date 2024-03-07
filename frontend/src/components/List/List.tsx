import React, { useState, useEffect } from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import CarDetails from "../CarDetails/CarDetails";
import { CarData } from "../../constants/constants";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import ExpandingInput from "../ExpandingInput/ExpandingInput";

interface ListProps {
  carsData: CarData[];
}

const List: React.FC<ListProps> = ({ carsData }) => {
  const [selectedCar, setSelectedCar] = useState<CarData | null>(null);

  const handleCarClick = (car: CarData) => {
    setSelectedCar(car);
  };

  const [itemWidth, setItemWidth] = useState<string>("");
  const windowDimensions = useWindowDimensions();
  useEffect(() => {
    windowDimensions.width <= 767
      ? setItemWidth("75%")
      : windowDimensions.width <= 1365
      ? setItemWidth("calc(50% - 1rem)")
      : setItemWidth("calc(25% - 1rem)");
  }, [windowDimensions]);

  const [sortList, setSortList] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>("");
  //   const setSort = () => {

  //   }

  return (
    <>
      <div className="list-outer-container">
        <h2 className="section-title">רכבים למכירה</h2>
        <div className="flex-row">
          <div>
            <span className="mini-title">מציג {carsData.length} תוצאות</span>
          </div>
          <div className="flex-row">
            <span className="sub-text">מיין לפי</span>
            <ExpandingInput
              placeHolder="רגיל"
              isExpanded={sortList}
              setIsExpanded={setSortList}
              value={sortType}
              setValue={setSortType}
              listToRender={["מהגבוה לנמוך", "מהנמוך לגבוה"]}
              style={{ gap: "1rem", padding: ".5rem", margin: "0" }}
            ></ExpandingInput>
          </div>
        </div>
        <div
          className="list"
          style={
            windowDimensions.width <= 767 ? { justifyContent: "center" } : {}
          }
        >
          {carsData.map((car: CarData, index: number) => (
            <ListItem
              carData={car}
              onPress={() => handleCarClick(car)}
              key={index}
              //   minWidth="20%"
              //   maxWidth="25%"
              //   flex={1}
              //   width="calc(25% - 1rem)"
              width={itemWidth}
            ></ListItem>
          ))}
        </div>
      </div>

      {selectedCar && (
        <CarDetails
          carData={selectedCar}
          closePopUp={() => setSelectedCar(null)}
        ></CarDetails>
      )}
    </>
  );
};

export default List;
