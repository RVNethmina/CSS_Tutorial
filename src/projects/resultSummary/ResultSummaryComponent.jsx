import reactionIcon from '../../assets/resultSummary/icon-reaction.svg'
import memoryIcon from '../../assets/resultSummary/icon-memory.svg'
import verbalIcon from '../../assets/resultSummary/icon-verbal.svg'
import visualIcon from '../../assets/resultSummary/icon-visual.svg'

const ResultSummaryComponet = () => {
    return (
        <div className="bg-[#ebf1ff] min-h-screen flex justify-center items-center md:p-4 font-['Hanken_Grotesk']">
            <div className="bg-white flex flex-col sm:flex-row sm:rounded-[32px]  shadow-2xl w-full max-w-[736px] overflow-hidden">
                {/* Left side */}

                <div className="flex-1 bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] rounded-b-[32px] sm:rounded-[32px] p-10 flex flex-col items-center text-center">
                    <p className="text-lg font-bold text-[hsl(241,100%,89%)] mb-6">Your Result</p>
                    <div className="bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] flex flex-col items-center justify-center rounded-full w-48 h-48 mb-6">
                        <span className="text-7xl font-extrabold text-white ">76</span>
                        <span className="text-[hsl(241,100%,89%)] opacity-50 font-bold">of 100</span>
                    </div>
                    <h1 className="text-white text-3xl font-bold mb-4">Great</h1>
                    <p className="text-[hsl(241,100%,89%)] leading-tight max-w-[260px]">You Scored higher than 65% of the people who have taken these tests.</p>
                </div>

                {/* Right side */}
                <div className="flex-1 p-8 sm:p-10">
                    <h2 className="text-[hsl(224,30%,27%)] text-2xl font-bold mb-6">Summary</h2>

                    <div className="space-y-4 mb-10">
                        {/* 1 */}
                        <div className="flex p-4 bg-[hsl(0,100%,67%,.05)] rounded-xl items-center justify-between">
                            <div className="flex gap-3">
                                <img src={reactionIcon} alt="" className="w-3" />
                                <p className="text-[hsl(0,100%,67%)]  font-bold">Reaction</p>
                            </div>
                            <p className="font-bold text-[hsl(224,30%,27%)]">80 <span className="opacity-50">/100</span></p>
                        </div>

                        {/* 2 */}
                        <div className="flex p-4 bg-[hsl(0,100%,67%,.05)] rounded-xl items-center justify-between">
                            <div className="flex gap-3">
                                <img src={memoryIcon} alt="" className="w-3" />
                                <p className="text-[hsl(39,100%,56%)] font-bold">Memory</p>
                            </div>
                            <p className="font-bold text-[hsl(224,30%,27%)]">80<span className="opacity-50">/100</span></p>
                        </div>

                        {/* 3 */}
                        <div className="flex p-4 bg-[hsl(166,100%,37%,.05)] rounded-xl items-center justify-between">
                            <div className="flex gap-3">
                                <img src={verbalIcon} alt="" className="w-3" />
                                <p className="text-[hsl(166,100%,37%)] font-bold">Verbal</p>
                            </div>
                            <p className="font-bold text-[hsl(224,30%,27%)]">80<span className="opacity-50">/100</span></p>
                        </div>

                        {/* 4 */}
                        <div className="flex p-4 bg-[hsl(234,85%,45%,.05)] rounded-xl items-center justify-between">
                            <div className="flex gap-3">
                                <img src={visualIcon} alt="" className="w-3" />
                                <p className="text-[hsl(234,85%,45%)] font-bold">Visual</p>
                            </div>
                            <p className="font-bold text-[hsl(224,30%,27%)]">80<span className="opacity-50">/100</span></p>
                        </div>

                    </div>
                    <button className="w-full bg-[hsl(224,30%,27%)] hover:bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] text-white py-4  rounded-full font-bold transition-all duration-1000">
                        Continue
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default ResultSummaryComponet