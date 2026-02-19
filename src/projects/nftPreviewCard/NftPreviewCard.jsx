import iconClock from '../../assets/nftPreviewCard/icon-clock.svg';
import iconEthereum from '../../assets/nftPreviewCard/icon-ethereum.svg';
import iconView from '../../assets/nftPreviewCard/icon-view.svg';
import imageAvatar from '../../assets/nftPreviewCard/image-avatar.png';
import imageEquilibrium from '../../assets/nftPreviewCard/image-equilibrium.jpg';

const NftPreviewCard = () => {
    return (
        <div className="bg-[hsl(217,54%,11%)] min-h-screen p-6 md:p-30 flex items-center justify-center font-outfit">
            <div className="bg-[hsl(216,50%,16%)] w-full max-w-[327px] md:max-w-[350px] p-5 md:p-7 rounded-2xl shadow-2xl flex flex-col">
                {/* image container */}
                <div className="relative group rounded-xl overflow-hidden">
                    <img src={imageEquilibrium} alt="" className="w-full h-auto block" />

                    <div className="absolute inset-0 bg-[hsl(178,100%,50%,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <img src={iconView} alt="View Icon" />
                    </div>
                </div>

                <div className="mt-6 flex flex-col space-y-4">
                    <h1 className="text-2xl text-white font-semibold hover:text-[hsl(178,100%,50%)] cursor-pointer transition-color duration-200">Equilibrium #3429</h1>

                    <p className="text-[14px] md:text-[18px] font-light text-[hsl(215,51%,70%)] leading-relaxed ">Our Equilibrium collection promotes balanace and calm.</p>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <img className="" src={iconEthereum} alt="" />
                            <span className="text-[hsl(178,100%,50%)] font-semibold">0.041 ETH</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img className="" src={iconClock} alt="" />
                            <span className="text-[hsl(215,51%,70%)]">3 days left</span>
                        </div>
                    </div>

                    <hr className='border-[hsl(215,32%,27%)]'/>

                    <div className="flex items-center gap-4">
                        <div className="rounded-full border-2 border-white">
                            <img src={imageAvatar} alt="" className="w-8 h-8" />
                        </div>
                        <p className="text-[14px] md:text-[18px] text-[hsl(215,51%,70%)] font-light">Creation of <span className="text-white hover:text-[hsl(178,100%,50%)] cursor-pointer transition-colors">Jules Wyvern</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftPreviewCard