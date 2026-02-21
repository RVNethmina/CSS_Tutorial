import { useState } from 'react';
import backgroundPatternDesktop from '../../assets/faqAccordianMainComponent/background-pattern-desktop.svg';
import iconMinus from '../../assets/faqAccordianMainComponent/icon-minus.svg';
import iconPlus from '../../assets/faqAccordianMainComponent/icon-plus.svg';
import iconStar from '../../assets/faqAccordianMainComponent/icon-star.svg';

const FaqAccordianMainComponent = () => {

    //Track the specific ID of the open question
    const [ activeId, setActiveId ] = useState(null);
    const toggleAccordian = (id) => {
        // If the one I just clicked is already open, close it (set to null)
        // Otherwise, set this new ID as the active one.
        setActiveId(activeId === id ? null : id)
    }

    const questionsAnswers = [
        {
            id: 1,
            question: 'What is Frontend Mentor, and how will it help me?',
            answers: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.'
        },
        {
            id: 2,
            question: 'Is Frontend Mentor free?',
            answers: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free challenges providing all the assets you need to complete the project.'
        },
        {
            id: 3,
            question: 'Can I use Frontend Mentor projects in my portfolio?',
            answers: 'Yes, you can use any project you build on Frontend Mentor in your portfolio. It\'s an excellent way to demonstrate your skills to potential employers!'
        },
        {
            id: 4,
            question: 'How can I get help if I\'m stuck on a challenge?',
            answers: 'The best place to get help is inside the Frontend Mentor community on Discord. There are thousands of other developers who can offer support.'
        }
    ];

    return (

        // In your FAQ Accordion, you used an absolute image inside a relative container. This is why the background pattern stayed at the top while your card remained centered in the middle of the page.

        <div className="min-h-screen bg-[hsl(275,100%,97%)] font-['Work_Sans'] relative flex items-center justify-center p-6">

            <div className="absolute top-0 left-0 w-full h-[320px] z-0">
                <img src={backgroundPatternDesktop} alt="" className="w-full h-full object-cover" />
            </div>
            

            <div className="bg-white w-full max-w-[600px] p-6 md:p-10 rounded-2xl shadow-2xl z-10 relative mt-20">
                <div className="flex gap-4 items-center mb-8">
                    <img src={iconStar} alt="" className="w-6 md:w-8" />
                    <h1 className="font-[700] text-3xl md:text-5xl text-[hsl(292,42%,14%)]">FAQs</h1>
                </div>

                <div className="devide-y divide-[hsl(275,100%,97%)]">
                    {questionsAnswers.map( (item) => (
                        <div key={item.id} className="py-5">
                            <div 
                                onClick={() => toggleAccordian(item.id)}
                                className="flex items-center  justify-between cursor-pinter group">
                                <p className="font-[600] text-[hsl(292,42%,14%)] group-hover:text-[hsl(292,16%,49%)] transition-colors pr-4">{item.question}</p>
                                <img 
                                    src={activeId === item.id ? iconMinus : iconPlus} alt=""
                                />
                            </div>
                            {/* Conditional Rendering: Only show if this ID is active */}
                            {
                                activeId === item.id && (
                                    <p className="mt-6 text-[16px] leading-relaxed text-[hsl(292,16%,49%)] animate-in fade-in slide-in-from-top-2 duration-300">
                                        {item.answers}
                                    </p>
                                )
                            }
                        </div>
                    ))}
                </div>
            </div>
            

        </div>
    )
}
export default FaqAccordianMainComponent