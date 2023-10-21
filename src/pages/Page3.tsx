import Card from "@/components/Card";
import { LangContext } from "@/context/LangProvider";
import { useContext } from "react";
const card1 = "/page3/card1.png";
const card2 = "/page3/card2.png";
const card3 = "/page3/card3.png";
const card4 = "/page3/card4.png";
const card5 = "/page3/card5.png";
const card6 = "/page3/card6.png";
const card7 = "/page3/card7.png";
const card8 = "/page3/card8.png";

export default function Page3(props: { className: string }) {
    const { text } = useContext(LangContext)
    const cards = [card1, card2, card3, card4, card5, card6, card7, card8]

    return <section className={props.className}>
        <div className='z-[1] w-full lg:h-screen rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
            <div className='cursor-default py-10 flex flex-col md:flex-row md:flex-wrap justify-center items-center lg:grid grid-rows-2 grid-cols-4 gap-2 justify-items-center'>
                {text.page3.cards.map((card, i) => (
                    <Card
                        key={`card-${i}`}
                        index={i}
                        title={card.title}
                        description={card.desc}
                        imgURL={cards[i]}
                    />)
                )}
            </div>
        </div>
    </section>
}