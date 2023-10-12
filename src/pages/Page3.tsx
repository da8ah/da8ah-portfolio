import Card from "@/components/Card";
import card1 from "/page3/card1.png";
import { LangContext } from "@/context/LangProvider";
import { useContext } from "react";

export default function Page3(props: { className: string }) {
    const { text } = useContext(LangContext)
    const cards = [
        {
            src: card1
        }
    ]
    return <section className={props.className}>
        <div className='z-[1] w-full h-screen rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
            <div className='py-10 grid grid-rows-2 grid-cols-4 gap-2 justify-items-center'>
                {text.page3.cards.map((card, i) => (
                    <Card
                        key={`card-${i}`}
                        title={card.title}
                        description={card.desc}
                        imgURL={cards[i].src}
                    />)
                )}
            </div>
        </div>
    </section>
}