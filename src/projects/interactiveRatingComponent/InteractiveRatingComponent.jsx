import { useState } from "react";
import iconStar from "../../assets/interactiveRatingComponent/icon-star.svg";
import thankYou from "../../assets/interactiveRatingComponent/illustration-thank-you.svg";

const InteractiveRatingComponent = () => {
  const [submitValue, setSubmitValue] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const OnsubmitHandler = () => {
    setSubmitValue(true);
  };

  const feedback = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  if (submitValue) {
    return (
      <div className="bg-[hsl(216,12%,8%)] min-h-screen flex items-center justify-center p-6 font-overpass">
        <div className="bg-[hsl(213,19%,18%)] max-w-[400px] p-10 rounded-[30px] flex flex-col items-center text-center">
          <img src={thankYou} alt="" className="mb-8" />

          <div className="bg-[hsl(216,12%,22%)] px-4 py-1 rounded-full mb-8">
            <p className="text-[hsl(25,97%,53%)] text-[15px]">You selected { selectedRating || 0 } out of 5</p>
          </div>

          <h2 className="text-white text-3xl font-bold mb-4">Thank you!</h2>

          <p className="text-[hsl(217,12%,63%)] leading-relaxed">
            we appreciate you taking the time to give a rating. If you ever need
            more support, dont't hesitate to get in touch!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-[hsl(216,12%,8%)] min-h-screen p-6 font-overpass">
      <div className="bg-[hsl(213,19%,18%)] max-w-[375px] md:max-w-[400px] p-8 rounded-[30px] shadow-2xl space-y-3">
        <div className="bg-[hsl(216,12%,22%)] w-12 h-12 rounded-full flex items-center justify-center mb-8">
          <img src={iconStar} alt="" />
        </div>

        <h1 className="text-[hsl(0,100%,100%)] text-3xl font-bold mb-4">How did we do?</h1>

        <p className="text-[hsl(217,12%,63%)] text-[15px] leading-relaxed mb-8">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="flex items-center justify-between mb-8">
          {feedback.map((item) => (
            <button 
                key={item.id} 
                onClick={() => setSelectedRating(item.value)}
                className={`w-12 h-12 rounded-full
                    ${selectedRating === item.value
                        ? "bg-[hsl(25,97%,53%)] text-white]"
                        : "bg-[hsl(216,12%,22%)] text-[hsl(217,12%,63%)] hover:bg-[hsl(217,12%,63%)] hover:text-white transition-color duration-200"
                    }
                `}
            >
              {item.value}
            </button>
          ))}
        </div>

        <button onClick={ () => selectedRating && setSubmitValue(true) } type="submit" className="w-full bg-[hsl(25,97%,53%)] hover:bg-white hover:text-[hsl(25,97%,53%)] text-white font-bold py-3 rounded-full tracking-[2px] uppercase transition-all duration-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InteractiveRatingComponent;
