import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { motion } from 'framer-motion';

export default function SelectMenu(props: {
    selected: number
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
            }}>
            <Select.Trigger
                asChild
                className="cursor-pointer w-full"
                color="indigo"
            >
                <motion.div
                    className='w-full flex flex-row justify-between items-center font-bold'
                    whileHover={{ scale: 0.9 }}
                >
                    <div className='w-[20%]' />
                    <Select.Value>
                        {props.data[props.selected]}
                    </Select.Value>
                    <Select.Icon className='w-[20%] flex justify-center items-center'>
                        <ChevronDownIcon />
                    </Select.Icon>
                </motion.div>
            </Select.Trigger>
            <Select.Content
                className="z-[100] w-[255px] p-1 rounded-[5px] bg-gray-200 text-black dark:text-white dark:bg-[#242424] dark:shadow-[0_0_5px_0_black]"
                align="center"
                defaultValue={props.data[props.selected]}
            >
                <Select.Viewport>
                    {
                        props.data.map((item, index) => {
                            return <Select.Item
                                key={`item-${index}`}
                                value={item}
                                className={`cursor-pointer py-1 rounded-[5px] w-full flex flex-row ${index === props.selected ? 'justify-between' : 'justify-center'} items-center hover:outline-none hover:bg-gray-950 hover:text-white`}
                            >
                                {index === props.selected && <div className="w-[15%]" />}
                                <Select.ItemText>{item}</Select.ItemText>
                                <Select.ItemIndicator className="w-[15%] flex justify-center items-center">
                                    <CheckIcon />
                                </Select.ItemIndicator>
                            </Select.Item>
                        })
                    }
                </Select.Viewport>
            </Select.Content>
        </Select.Root>
    </div>
}