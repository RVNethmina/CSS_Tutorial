import drawers from "../../assets/articlePreviewComponent/drawers.jpg";
import avatarMichelle from "../../assets/articlePreviewComponent/avatar-michelle.jpg";
import iconFacebook from "../../assets/articlePreviewComponent/icon-facebook.svg";
import iconPinterest from "../../assets/articlePreviewComponent/icon-pinterest.svg";
import iconShare from "../../assets/articlePreviewComponent/icon-share.svg";
import iconTwitter from "../../assets/articlePreviewComponent/icon-twitter.svg";
import { useState } from "react";

// ... (imports remain the same)

const ArticlePreviewComponent = () => {
  const [activeState, setActiveState] = useState(false);

  return (
    <div className="min-h-screen bg-[hsl(210,46%,95%)] flex items-center justify-center font-manrope p-6">
      <div className="flex flex-col md:flex-row rounded-xl shadow-xl overflow-visible max-w-[327px] md:max-w-[730px] bg-white">
        <div className="md:w-[40%]">
          <img
            src={drawers}
            alt="drawers"
            className="w-full h-full object-cover md:rounded-l-xl rounded-t-xl"
          />
        </div>

        <div className="md:w-[60%] p-8 md:p-10 relative">
          <h1 className="font-bold text-[hsl(217,19%,35%)] text-[16px] md:text-[20px] leading-snug mb-4">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>

          <p className="text-[13px] leading-relaxed font-medium text-[hsl(214,17%,51%)] mb-8">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <img
                src={avatarMichelle}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-[13px] font-bold text-[hsl(217,19%,35%)]">
                  Michelle Appleton
                </h2>
                <p className="text-[13px] text-[hsl(212,23%,69%)]">
                  28 Jun 2020
                </p>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setActiveState(!activeState)}
                className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors z-20 relative ${activeState ? "bg-[hsl(217,19%,35%)]" : "bg-[hsl(210,46%,95%)]"}`}
              >
                <img
                  src={iconShare}
                  alt=""
                  className={activeState ? "brightness-200" : ""}
                />
              </button>

              {/* FIX: Wrap this in a condition using activeState */}
              {activeState && (
                <div
                  className="
                        /* Mobile Styles: Covers the bottom of the content area */
                        absolute bottom-0 left-0 w-full h-[80px] md:h-auto
                        flex gap-4 items-center px-8 bg-[hsl(217,19%,35%)] z-10 
                        
                        /* Desktop Styles: Becomes a floating tooltip */
                        md:bottom-[90px] md:left-1/2 md:-translate-x-1/2 md:w-max md:rounded-xl md:py-4 md:shadow-2xl 
                        
                        /* Animation */
                        animate-in fade-in slide-in-from-bottom-2 md:zoom-in duration-200
                    "
                >
                  <p className="text-[13px] tracking-[5px] uppercase text-[hsl(212,23%,69%)]">
                    Share
                  </p>
                  <div className="flex gap-4 items-center">
                    <img
                      src={iconFacebook}
                      alt="Facebook"
                      className="cursor-pointer hover:brightness-200 transition-all"
                    />
                    <img
                      src={iconTwitter}
                      alt="Twitter"
                      className="cursor-pointer hover:brightness-200 transition-all"
                    />
                    <img
                      src={iconPinterest}
                      alt="Pinterest"
                      className="cursor-pointer hover:brightness-200 transition-all"
                    />
                  </div>

                  {/* Triangle Tip: Only visible on Desktop */}
                  <div className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[hsl(217,19%,35%)] rotate-45"></div>

                  {/* Mobile-only Close/Share button sync */}
                  <button
                    onClick={() => setActiveState(false)}
                    className="md:hidden ml-auto bg-[hsl(214,17%,51%)] rounded-full p-2"
                  >
                    <img
                      src={iconShare}
                      alt="close"
                      className="w-4 h-4 brightness-200"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreviewComponent;
