import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { useState } from "react";

const HomeSectionCarosel = ({data,section}) => {
    const [activeState,setActiveState] = useState(0)

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = data.map((ele) => {
    return <HomeSectionCard ele={ele} key={ele.id}/>;
  });

  const handleLeft = ()=> setActiveState((pre)=>pre-1)
  const handleRight = ()=> setActiveState((pre)=>pre+1)

  const handleSlide = (index)=>{
    setActiveState(index.id)
  }

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 py-5">{section}</h2>
        {activeState >0 &&
        <Button
          className="z-50 bg-white"
          varient="contained"
          sx={{
            position: "absolute",
            top: "90px",
            left: "30px",
          }}
          color="white"
          aria-level="next"
          onClick={handleLeft}
        >
          <ChevronLeftIcon />
        </Button>}
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          responsive={responsive}
          onSlideChange={handleSlide}
          activeIndex={activeState}
        />
        {activeState < data.length+1 &&
        <Button
          className="z-50 bg-white"
          varient="contained"
          sx={{
            position: "absolute",
            top: "90px",
            right: "30px",
          }}
          color="white"
          aria-level="next"
          onClick={handleRight}
        >
          <ChevronRightIcon />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
