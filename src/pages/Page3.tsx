import Card from "@/components/Card";
import card1 from "/page3/card1.png";

export default function Page3(props: { className: string }) {
    return <section className={props.className}>
        <div className='z-[1] w-full h-screen rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
            <div className='py-10 grid grid-rows-2 grid-cols-4 gap-2 justify-items-center'>
                {Array(8).fill(null).map((_, i) => (
                    <Card
                        key={`card-${i}`}
                        title="Project"
                        description="Tipo"
                        imgURL={card1}
                    />)
                )}
            </div>
        </div>
    </section>
}