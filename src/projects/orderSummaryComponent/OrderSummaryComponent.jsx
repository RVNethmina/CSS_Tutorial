import illustrationHero from '../../assets/orderSummary/illustration-hero.svg'
import iconMusic from '../../assets/orderSummary/icon-music.svg'

const OrderSummaryComponent = () => {
    return (
        <div className="min-h-screen w-full bg-order-pattern-mobile md:bg-order-pattern-desktop bg-no-repeat bg-top bg-contain bg-[#e0e8ff] font-infer p-6 flex items-center justify-center">

            <div className="bg-white flex flex-col w-full  max-w-[340px] md:max-w-[450px] rounded-[20px] overflow-hidden shadow-2xl">
                {/*  top side */}
                <div className="w-full">
                    <img className="w-full h-auto" src={illustrationHero} alt="" />
                </div>
                {/*  bottom side */}
                <div className="p-6 md:p-10 space-y-3 text-center flex flex-col items-center">
                    <h1 className="text-2xl md:text-3xl font-[900] text-[#1f2f56]">Order Summary</h1>
                    <p className="text-[15px] text-[#7280a7] font-medium leadin-relaxed mb-6 px-2">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

                    {/* middle section */}
                    <div className="bg-[#f5f7ff] rounded-xl p-4 md:p-6 w-full flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <img src={iconMusic} alt="" className="mr-5" />
                            <div className="text-left">
                                <p className="text-[14px] md:text[16px] font-[900] text-[#1f2f56]">Annual Plan</p>
                                <p className="text-14px text-[#7280a7] font-medium">$59.99/year</p>
                            </div>
                        </div>

                        <a href='#' className="text-[#3829e0] hover:bg-[#766cf1] hover:no-underline font-bold underline text-[13px] md:text-[14px]">Change</a>
                    </div>
                    
                    {/* buttons */}
                    <div className="w-full flex flex-col gap-4">
                        <button className="bg-[#3829e0] hover:bg-[#766cf1] py-4 text-white font-[900] rounded-xl w-full shadow-2xl transition-colors duration-200">Proceed to Payment</button>
                        <div className="text-[#7280a7] hover:text-[#1f2f56] py-2 transition-colors duration-200 font-[900] ">Cancel Order</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummaryComponent