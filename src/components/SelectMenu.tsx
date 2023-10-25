import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { motion } from 'framer-motion';

export default function SelectMenu(props: {
    selected: number
    icons: string[]
    data: string[]
    handlers: { left: (value?: number) => void, right: (value?: number) => void }
}) {
    return <div className='w-full'>
        <Select.Root
            defaultValue={props.data[props.selected]}
            onValueChange={(value) => {
                const index = props.data.indexOf(value)
                if (props.selected > index) props.handlers.left(index)
                else props.handlers.right(index)
            }}
        >
            <Select.Trigger
                asChild
                className="cursor-pointer w-full"
                color="indigo"
            >
                <div className='w-full flex flex-row justify-between items-center font-bold'>
                    <div className='w-[15%] flex justify-end items-center text-lg'>{props.icons[props.selected]}</div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <Select.Value>
                            <span className='uppercase'>{props.data[props.selected]}</span>
                        </Select.Value>
                    </motion.div>
                    <Select.Icon className='w-[15%] flex justify-center items-center'>
                        <ChevronDownIcon />
                    </Select.Icon>
                </div>
            </Select.Trigger>
            <Select.Content
                className="z-[100] w-[300px] p-1 rounded-[5px] text-black dark:text-white ring-1 ring-black dark:ring-0 bg-gradient-to-b from-white to-gray-200 dark:from-[#242424] dark:to-gray-800 dark:shadow-[0_0_5px_0_black]"
                align="center"
                position="popper"
                defaultValue={props.data[props.selected]}
            >
                <Select.Viewport className='p-1'>
                    {
                        props.data.map((item, index) => {
                            return <Select.Item
                                key={`item-${index}`}
                                value={item}
                                className={`cursor-pointer py-1 rounded-[5px] w-full flex flex-row ${index === props.selected ? 'justify-between' : 'justify-center'} items-center hover:outline-none hover:bg-gray-950 hover:text-white`}
                            >
                                <div className='w-[15%] flex justify-center items-center'>{props.icons[index]}</div>
                                <Select.ItemText>{item}</Select.ItemText>
                                <Select.ItemIndicator className="w-[15%] flex justify-center items-center">
                                    <CheckIcon />
                                </Select.ItemIndicator>
                                {index !== props.selected && <div className="w-[15%]" />}
                            </Select.Item>
                        })
                    }
                </Select.Viewport>
            </Select.Content>
        </Select.Root>
    </div>
}