import { useState } from "react";
import iconList from "../../assets/newsLetterSignUp/icon-list.svg";
import iconSuccess from "../../assets/newsLetterSignUp/icon-list.svg";
import illustrationSignUpDesktop from "../../assets/newsLetterSignUp/illustration-sign-up-desktop.svg";
import illustrationSignUpMobile from "../../assets/newsLetterSignUp/illustration-sign-up-mobile.svg";


const NewsLetterSignUp = () => {
  const [success, setSuccess] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setError(false);
      setSuccess(true);
    } else {
      setError(true);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[hsl(235,18%,26%)] sm:p-6 flex items-center justify-center font-roboto">
        <title>NewsLetter Sign up</title>
        <div className="bg-white p-10 md:p-12 sm:rounded-3xl rounded-4xl shadow-xl max-w-[375px] w-full">
          <img src={iconSuccess} alt="" className="w-10 mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(235,18%,26%)] mb-5">
            Thanks for subscribing!
          </h1>
          <p className="text-[13px] mb-5">
            A confirmation email has been sent to{" "}
            <span className="font-medium">{`${email ? email : "ash@loremcompany.com"}`}</span>
            Please open it and click the button inside to confirm your
            subscription.
          </p>

          <button
            type="submit"
            onClick={() => setSuccess(!success)}
            className="w-full p-4 bg-[hsl(234,29%,20%)] my-3 rounded-lg text-white text-[14px] cursor-pointer hover:bg-gradient-to-r from-[#ff527b] to-[#ff6a3a] hover:shadow-xl transition-all duration-300"
          >
              Thank You
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(235,18%,26%)] p-10 flex items-center justify-center font-roboto">
      <title>NewsLetter Sign up</title>
      <div className="bg-white p-0 md:p-4 rounded-none md:rounded-3xl shadow-xl flex flex-col-reverse lg:flex-row max-w-[375px] lg:max-w-[860px]">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-10 lg:p-14">
          <h1 className="text-4xl md:text-5xl font-[700] text-[hsl(234,29%,20%)] mb-6">
            Stay updated!
          </h1>
          <p className="text[16px] font-[400] text-[hsl(235,18%,26%)] mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          {/* Bulleted section */}
          <div className="flex flex-col gap-3 mb-10">
            {[
              "Product discovery and building what matters",
              "Measuring to ensure updates are a success",
              "And much more!",
            ].map((description) => (
              // One bulletin
              <div key={description} className="flex gap-4 items-start">
                <img src={iconList} alt="Icon List" className="mt-1" />
                <p className="text-[16px] text-[hsl(235,18%,26%)]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* form */}
          <form onSubmit={onsubmitHandler} noValidate>
            <div className="">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="text-[12px] font-semibold text-[hsl(234,29%,20%)]"
                >
                  Email Address
                </label>
                {error && (
                  <span className="text-[12px] text-[hsl(4,100%,67%)] font-semibold">
                    Valid Email Required
                  </span>
                )}
              </div>

              <input
                type="email"
                name="email"
                placeholder="ash#loremcompany.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className={`border text-[hsl(0,0%,58%)] w-full my-2 p-4 rounded-lg focus:outline-none transition-all duration-200 cursor-pointer ${error ? "border-[hsl(4,100%,67%)] bg-[hsla(4,100%,67%,.15) text-[hsl(4,100%,67%)]" : "border-[hsl(231,7%,60%,.5)] text-[hsl(234,29%,20%)] focus:border-[hsl(234,29%,20%)]}"} `}
              />
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-[hsl(234,29%,20%)] my-3 rounded-lg text-white text-[14px] cursor-pointer hover:bg-gradient-to-r from-[#ff527b] to-[#ff6a3a] hover:shadow-xl transition-all duration-300"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        {/* right side */}
        <div className="flex-1 overflow-hidden">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={illustrationSignUpDesktop}
            ></source>
            <img src={illustrationSignUpMobile} alt="" className="w-full h-full object-cover block rounded-xl" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSignUp;
