import Card from "@/components/Card";
import card1 from "/page3/card1.png";
import card2 from "/page3/card2.png";
import card3 from "/page3/card3.png";
import card4 from "/page3/card4.png";
import card5 from "/page3/card5.png";
import card6 from "/page3/card6.png";
import card7 from "/page3/card7.png";
import { LangContext } from "@/context/LangProvider";
import { useContext } from "react";

export default function Page3(props: { className: string }) {
    const { text } = useContext(LangContext)
    const cards = [card1, card2, card3, card4, card5, card6, card7]

    return <section className={props.className}>
        <div className='z-[1] w-full h-screen rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
            <div className='py-10 grid grid-rows-2 grid-cols-4 gap-2 justify-items-center'>
                {text.page3.cards.map((card, i) => (
                    <Card
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