import qrCodeImage from "../../assets/image-qr-code.png"
const QrCodeComponent = () => {
    return (
        <div className="bg-[#D5E1EF] min-h-screen flex items-center justify-center p-4">
            <div className="flex flex-col bg-white w-full max-w-[320px] p-4 rounded-2xl shadow-xl">

                <img src={qrCodeImage} alt="" className="rounded-xl w-full" />
  
                <div className="p-4 text-center">
                    <h1 className="font-bold text-[22px] text-[#1F314F] leading-tight">Improve your front-end skills by building projects</h1>
                    <p className="text-[15px] text-gray-500 mt-4 leading-normal">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
                </div>
            </div>
        </div>
    )
}

export default QrCodeComponent