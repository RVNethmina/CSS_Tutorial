import  imageHeaderDesktop from '../../assets/statsPreviewCard/image-header-desktop.jpg'
const StatsPreviewCard = () => {
    return (
        <div className="bg-[#090b1a] min-h-screen p-6 flex items-center justify-center font-['Inter']">
            <div className="bg-[#1c1a38] flex flex-col-reverse md:flex-row max-w-[1110px] rounded-xl overflow-hidden shadow-2xl">
                {/* Left side (Content) - Use md:w-1/2 for perfect split */}
                <div className="md:w-1/2 p-8 md:p-16 text-center md:text-left">
                    <h1 className="font-bold text-3xl md:text-4xl text-[#ffffff] leading-tight">Get <span className="text-purple-500">insights</span> that help your business grow.</h1>
                    <p className="mt-6 text-[15px] text-[#ffffff] leading-relaxed max-w-[400px] opacity-50">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

                    <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className="flex flex-col">
                            <p className="font-bold text-2xl text-[#ffffff]">10k+</p>
                            <p className="text-[12px] font-['Lexend_Deca'] text-[#ffffff] opacity-50 uppercase tracking-widest mt-1">Companies</p>
                        </div>
                        <div className="">
                            <p className="font-bold text-2xl text-[#ffffff]">314</p>
                            <p className="text-[12px] font-['Lexend_Deca'] text-[#ffffff] opacity-50 uppercase tracking-widest mt-1">Templates</p>
                        </div>
                        <div className="">
                            <p className="font-bold text-2xl text-[#ffffff]">12M+</p>
                            <p className="text-[12px] font-['Lexend_Deca'] text-[#ffffff] opacity-50 uppercase tracking-widest mt-1">Queries</p>
                        </div>
                    </div>
                </div>

                {/*  'object-cover' ensures it fills the div without stretching.
                           'mix-blend-multiply' + 'opacity-75' creates the design's purple effect.
                */}
                <div className="md:w-1/2 bg-[hsl(277,64%,61%)] relative">
                    
                    <img className="w-full h-full object-cover mix-blend-multiply opacity-75" src={imageHeaderDesktop} alt="" />
                </div>
            </div>
        </div>
    )
}

export default StatsPreviewCard