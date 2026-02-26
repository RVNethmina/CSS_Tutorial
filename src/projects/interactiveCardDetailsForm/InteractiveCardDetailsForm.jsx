import InteractiveCardDesktop from "../../assets/interactiveCardDetailsForm/bg-main-desktop.png";
import InteractiveCardMobile from "../../assets/interactiveCardDetailsForm/bg-main-mobile.png";
import bgCardBack from "../../assets/interactiveCardDetailsForm/bg-card-back.png";
import bgCardFront from "../../assets/interactiveCardDetailsForm/bg-card-front.png";
import cardLogo from "../../assets/interactiveCardDetailsForm/card-logo.svg";
import iconComplete from "../../assets/interactiveCardDetailsForm/icon-complete.svg";
import { useState } from "react";

const InteractiveCardDetailsForm = () => {
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(true);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for empty fields
    if (!name) newErrors.name = "Can't be blank";
    if (!number) newErrors.number = "Can't be blank";
    else if (!/^\d+$/.test(number.replace(/\s/g, "")))
      newErrors.number = "Wrong format, numbers only"; //

    if (!month || !year) newErrors.date = "Can't be blank";
    if (!cvc) newErrors.cvc = "Can't be blank";

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setError([]);
    } else {
      setError(newErrors); // Store specific error messages
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        <title>Interactive Card</title>
      {/* Left side: Background and Cards */}
      <div className="md:w-1/3 h-[240px] md:h-screen relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={InteractiveCardDesktop} />
          <img
            src={InteractiveCardMobile}
            alt=""
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Front Card: Positioned to overlap the background edge */}
        <div className="absolute -bottom-10 left-4 md:top-[15%] md:left-[45%] z-20 w-[285px] md:w-[447px]">
          <img src={bgCardFront} alt="Front" className="w-full" />
          <img
            src={cardLogo}
            alt="Logo"
            className="absolute top-6 left-6 w-12 md:w-20"
          />
          <div className="absolute bottom-6 left-6 right-6 md:top-40 text-white uppercase tracking-widest">
            <p className="text-lg md:text-2xl mb-4">
              {number || "0000 0000 0000 0000"}
            </p>
            <div className="flex justify-between text-[10px] md:text-sm">
              <p>{name || "Jane Appleseed"}</p>
              <p>
                {month || "00"}/{year || "00"}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-5 top-8 md:top-[55%] md:left-[55%] z-10 w-[285px] md:w-[447px]">
          <img src={bgCardBack} alt="" className="w-full" />
          <p className="absolute top-[45%] right-10 md:right-14 text-white text-xs md:text-sm">
            {cvc || "000"}
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 flex items-center justify-center p-6 mt-24 md:mt-0">
        {/* form */}
        {!success ? (
          <form
            onSubmit={onSubmitHandler}
            className="w-full max-w-[400px] flex flex-col gap-6"
          >
            {/* Cardholder name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[16px] font-bold tracking-widest uppercase"
              >
                Cardholder name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Jane Appleseed"
                className={`border border-black p-3 rounded-md active:border-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)] ${error ? "border-[hsl(0,100%,66%)]" : ""}`}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                autocomplete
              />
              {error && (
                <span className="text-[12px] text-[hsl(0,100%,66%)] font-semibold mt-1">
                  {error.name}
                </span>
              )}
            </div>
            {/* Card Number */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="number"
                className="text-[16px] font-bold tracking-widest uppercase"
              >
                Card Number
              </label>
              <input
                type="text"
                name="number"
                placeholder="e.g. J1234 678 9123 0000"
                className={`border border-black p-3 rounded-md active:border-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)] ${error ? "border-[hsl(0,100%,66%)]" : ""}`}
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
                autocomplete
              />
              {error && (
                <span className="text-[12px] text-[hsl(0,100%,66%)] font-semibold mt-1">
                  {error.number}
                </span>
              )}
            </div>
            {/* exp. date and cvc */}
            <div className="flex gap-3">
              {/* exp. date */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="date"
                  className="text-[15px] font-bold tracking-widest uppercase"
                >
                  Exp. Date (MM/yy)
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="date"
                    placeholder="mm"
                    className={`border border-black p-3 rounded-md active:border-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)] max-w-[70px] ${error ? "border-[hsl(0,100%,66%)]" : ""}`}
                    onChange={(event) => {
                      setMonth(event.target.value);
                    }}
                    autocomplete
                  />
                  <input
                    type="text"
                    name="date"
                    placeholder="yy"
                    className={`border border-black p-3 rounded-md active:border-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)] max-w-[70px] ${error ? "border-[hsl(0,100%,66%)]" : ""}`}
                    onChange={(event) => {
                      setYear(event.target.value);
                    }}
                    autocomplete
                  />
                </div>
                {error && (
                  <span className="text-[12px] text-[hsl(0,100%,66%)] font-semibold mt-1">
                    {error.date}
                  </span>
                )}
              </div>
              {/* cvc */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="date"
                  className="text-[16px] font-bold tracking-widest uppercase"
                >
                  cvc
                </label>
                <input
                  type="text"
                  name="date"
                  placeholder="e.g. 123"
                  className={`border border-black p-3 rounded-md active:border-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)] ${error ? "border-[hsl(0,100%,66%)]" : ""}`}
                  onChange={(event) => {
                    setCvc(event.target.value);
                  }}
                  autocomplete
                />
                {error && (
                  <span className="text-[12px] text-[hsl(0,100%,66%)] font-semibold mt-1">
                    {error.cvc}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[hsl(278,68%,11%)] text-white p-4 rounded-lg"
            >
              Confirm
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center w-full max-w-[400px] animate-in fade-in zoom-in duration-300">
            <img src={iconComplete} alt="Complete" className="mb-8 w-20 h-20" />

            <h1 className="text-3xl uppercase tracking-[4px] text-[hsl(278,68%,11%)] font-bold mb-4">
              Thank you!
            </h1>

            <p className="text-[hsl(279,6%,55%)] text-lg mb-10">
              We've added your card details
            </p>

            <button
              onClick={() => {
                setSuccess(false); // Go back to form
                setError({}); // Clear errors
              }}
              className="w-full bg-[hsl(278,68%,11%)] text-white p-4 rounded-lg hover:bg-[hsl(278,68%,20%)] transition-colors"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCardDetailsForm;
