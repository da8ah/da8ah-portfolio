import Tooltip from "@/components/Tooltip";
import { LangContext } from "@/context/LangProvider";
import { useContext } from "react";

export default function Skills() {
    const { text } = useContext(LangContext)
    return <div className='w-full'>
        <div className='py-5 flex flex-row justify-evenly items-center'>
            {text.page1.skills.titles.map((skill, i) => (
                <div key={`skill-container-${i}`}>
                    <h1 key={`skill-${i}`}>{skill}</h1>
                    <ul key={`items-${i}`} className="py-5 text-left">
                        {text.page1.skills.items[i].map((item, j) => (
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