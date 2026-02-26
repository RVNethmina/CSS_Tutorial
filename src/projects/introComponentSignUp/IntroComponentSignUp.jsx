
import { useState } from 'react';
import iconError from '../../assets/introComponentSignUp/icon-error.svg';

const IntroComponentSignUp = () => {

    const [ errors, setErrors ] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newErrors = {};

        formData.forEach((value, key) => {
            if (!value) newErrors[key] = `${key === 'email' ? "Email Address" : key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`;
        });

        setErrors(newErrors);
    }

    return (
        <div className="min-h-screen bg-[hsl(0,100%,74%)] bg-intro-component-mobile bg-cover md:bg-intro-component-desktop p-6 flex items-center justify-center font-poppins">
            <div className="flex flex-col md:flex-row max-w-[1110px] items-center gap-12 md:gap-8">
                {/* Text */}
                <div className="flex-1 text-center md:text-left text-white">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">Learn to code by watching others</h1>
                    <p className="font-medium text-[16px] leading-relaxed">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>
                {/* Form */}
                <div className="flex-1 w-full max-w-[540px]" >
                    {/* promo banner */}
                    <div className="bg-[hsl(248,32%,49%)] text-white text-center py-4 px-10 rounded-xl shadow-xl mb-6" >
                        <p className="text-[15px]"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</p>
                    </div>

                    {/* form container */}
                    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-xl shadow-2xlflex flex-col gap-5">
                        {/* First name */}

                        {['firstName', 'lastName', 'email', 'password'].map((field) => (
                            

                            <div key={field} className="relative">
                                <input 
                                    name={field}
                                    type={field === 'password' ? 'password' : 'text'} placeholder={errors[field] ? "" : field === 'firstName' ? "First Name" : field === 'lastName' ? "Last Name" : field === 'email' ? "Email Address" : "Password"} 
                                    className={`w-full mb-5 p-4 rounded-md border-2 text-[14px] font-semibold focus:outline-none focus:border-[hsl(248,32%,49%)] ${errors[field] ? 'border-[hsl(0,100%,74%)]' : 'border-[hsl(246,25%,77%)]'}`}
                                />
                                {errors[field] && (
                                    <>
                                        <img src={iconError} alt="Error" className="absolute right-4 top-4" />
                                        <p className="text-[hsl(0,100%,74%)] text-[11px] font-medium italic text-right mb-1 ">{errors[field]}</p>
                                    </>
                                )}
                                
                            </div>

                        ))}
                        
                        

                        <button type="submit" className='w-full bg-[hsl(154,59%,60%)] hover:bg-[hsl(154,59%,60%)] text-white uppercase font-bold py-4 rounded-md shadow-[inset_0_-4px_0_rgba(0,0,0,0.1)] transition-all tracking-wider'>Claim your free trial</button>

                        <p className="text-[11px] text-[hsl(246,25%,77%)]text-center px-4 font-medium leading-relaxed">By clicking the button, you are agreeing to our <span className="text-[hsl(0,100%,74%)] font-bold cursor-pointer">Terms and Services</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default IntroComponentSignUp;