import Tooltip from '@/components/Tooltip'
import laptop from '/page1/skills/icons8-laptop-coding-96.png'

export default function Abilities() {
    const abilities = [
        {
            src: laptop,
            alt: 'laptop'
        },
        {
            src: laptop,
            alt: 'laptop'
        },
        {
            src: laptop,
            alt: 'laptop'
        }
    ]
    const imgClassName = 'object-contain w-[40px] h-[40px] mx-2'
    return <>
        {abilities.map((ability, index) => (
            <Tooltip
                key={`ability-${index}`}
                cardClassName='z-[100] w-[100px] h-[100px] bg-[orange]'
                arrowClassName='fill-[orange]'
                align='start'
                side='left'
            >
                <div className='cursor-pointer rounded-full w-[50px] h-[50px] my-2 bg-white ring-1 ring-white flex justify-center items-center'>
                    <img className={imgClassName} src={ability.src} alt={ability.alt} />
                </div>
                <div>Ability</div>
            </Tooltip>
        ))
        }
    </>
}