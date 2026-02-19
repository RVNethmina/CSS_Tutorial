import iconSedans from '../../assets/threeColumnPreviewCard/icon-sedans.svg';
import iconSuvs from '../../assets/threeColumnPreviewCard/icon-suvs.svg';
import iconLuxury from '../../assets/threeColumnPreviewCard/icon-luxury.svg';

const ThreeColumnPreviewCard = () => {
    return (
        <div className="min-h-screen p-6 md:p-10 bg-[hsl(0,0%,95%)] flex items-center justify-center font-lexend">
            <div className="flex flex-col md:flex-row w-full max-w-[920px] rounded-lg overflow-hidden gap-0">
                {/* 1 card */}
                <div className="flex-1 bg-[hsl(31,77%,52%)] p-12 flex flex-col justify-center">
                    <div className="">
                        <img src={iconSedans} alt="" className="w-16" />
                        <h1 className="mt-8 font-bold uppercase  text-[hsl(0,0%,95%)] font-big-shoulders text-4xl">Sedans</h1>

                        <p className="mt-6 font-normal text-[15px] text-[hsla(0,0%,100%,0.75)] leading-relaxed">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or an your next road trip.</p>

                        <div className="mt-20 border-2 border-white py-2  text-center rounded-full text-[hsl(31,77%,52%)] md:text-white max-w-35 hover:cursor-pointer bg-white md:bg-transparent ">
                            <a href="" className="font-semibold">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* 2 card */}
                <div className="flex-1 bg-[hsl(184,100%,22%)] p-12 flex flex-col justify-center">
                    <div className="">
                        <img src={iconSuvs} alt="" className="w-16" />
                        <h1 className="mt-8 font-bold uppercase  text-[hsl(0,0%,95%)] font-big-shoulders text-4xl">Suvs</h1>
                        
                        <p className="mt-6 font-normal text-[15px] text-[hsla(0,0%,100%,0.75)] leading-relaxed">Take a SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

                        <div className="mt-20 border-2 border-white py-2  text-center rounded-full text-[hsl(184,100%,22%)] md:text-white max-w-35 hover:cursor-pointer bg-white md:bg-transparent ">
                            <a href="" className="font-semibold">Learn More</a>
                        </div>
                    </div>
                </div>


                {/* 3 card */}
                <div className="flex-1 bg-[hsl(179,100%,13%)] p-12 flex flex-col justify-center">
                    <div className="">
                        <img src={iconLuxury} alt="" className="w-16" />
                        <h1 className="mt-8 font-bold uppercase  text-[hsl(0,0%,95%)] font-big-shoulders text-4xl">Luxury</h1>
                        <p className="mt-6 font-normal text-[15px] text-[hsla(0,0%,100%,0.75)] leading-relaxed">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

                        <div className="mt-20 border-2 border-white py-2  text-center rounded-full text-[hsl(179,100%,13%)] md:text-white max-w-35 hover:cursor-pointer bg-white md:bg-transparent ">
                            <a href="" className="font-semibold">Learn More</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThreeColumnPreviewCard