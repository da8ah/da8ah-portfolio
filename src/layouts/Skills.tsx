import Tooltip from "@/components/Tooltip";

export default function Skills(props: { text: { page1: { skills: string[], skillItems: string[][] } } }) {
    return <div className='w-full'>
        <div className='py-5 flex flex-row justify-evenly items-center'>
            {props.text.page1.skills.map((skill, i) => (
                <div key={`skill-container-${i}`}>
                    <h1 key={`skill-${i}`}>{skill}</h1>
                    <ul key={`items-${i}`} className="py-5 text-left">
                        {props.text.page1.skillItems[i].map((item, j) => (
                            <li key={`items-${i}-${j}`} className="py-2">
                                <Tooltip key={`tooltip-${i}-${j}`} /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
}