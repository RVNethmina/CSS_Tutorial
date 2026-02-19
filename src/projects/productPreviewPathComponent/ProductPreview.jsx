import imageProductDesktop from "../../assets/image-product-desktop.jpg";
import imageProductMobile from "../../assets/image-product-mobile.jpg";
import iconCart from "../../assets/icon-cart.svg";

const ProductPreview = () => {
  return (
    <div className=" bg-[#f3eae3] min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-[340px] md:max-w-[600px] bg-white shadow-xl rounded-xl overflow-hidden">

        {/*left side */}
        <div className="md:flex-1">
            <img src={imageProductMobile} alt="" className="block md:hidden h-auto w-full" />
            <img src={imageProductDesktop} alt="" className="md:block hidden h-full w-full object-cover" />
        </div>
        {/* right side */}
        <div className="md:flex-1 p-6 md:p-8 flex flex-col justify-between">
            <div>
                <p className="font-medium font-Monsserrat uppercase text-[hsl(158,36%,37%)] tracking-[5px] text-[12px] mb-3 md:mb-4">Perfume</p>
                <h1 className="font-bold font-Fraunces text-[32px] text-[hsl(212,21%,14%)] leading-none mb-4 md:mb-6">Gabrielle Essence Eau De Parfum</h1>
                <p className="font-medium text-[hsl(228,12%,48%)] text-[14px] leading-relaxed mb-6">
                    A Flora, solar and voluptuous interpretation composed by Oliver
                    Polge, Perfumer-Creatto for the House of CHANEL.
                </p>
            </div>
          
            <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-5">
                    <p className="text-[hsl(158,36%,37%)] font-bold text-3xl font-Fraunces">$149.99</p>
                    <p className="text-[hsl(228,12%,48%)] line-through text-[13px]">$169.99</p>
                </div>
                <button className="w-full flex gap-3 bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,42%,18%)] transition-colors text-white font-bold py-4 md:py-3 mt-10 rounded-lg justify-center items-center">
                    <img src={iconCart} alt="" className="w-4" />
                    Add to Cart
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
