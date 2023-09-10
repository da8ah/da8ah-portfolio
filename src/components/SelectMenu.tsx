import * as Select from "@radix-ui/react-select"
import { HiChevronDown } from "react-icons/hi2"

export default function SelectMenu(props: {
    selected: number
    data: string[]
    handlers: { left: (value?: number) => void, right: (value?: number) => void }
}) {
    return <div className="w-full">
        <Select.Root
            defaultValue={props.data[props.selected]}
            onValueChange={(value) => {
                const index = props.data.indexOf(value)
                console.log(index)
                if (props.selected > index) props.handlers.left(index)
                else props.handlers.right(index)
            }}>
            <Select.Trigger
                asChild
                defaultChecked
                className="cursor-pointer w-full"
                title="Click"
                color="indigo"
            >
                <span>{props.data[props.selected]}</span>
                {/* <Select.Icon className="ml-2" asChild>
                    <HiChevronDown />
                </Select.Icon> */}
            </Select.Trigger>
            <Select.Content
                className="z-[100] bg-[orange]"
                align="center"
            >
                {
                    props.data.map((item, index) => {
                        return index !== props.selected
                            && <Select.Item
                                key={`item-${index}`}
                                value={item}
                                className="cursor-pointer flex flex-row"
                            >
                                <span>{item}</span>
                            </Select.Item>
                    })
                }
            </Select.Content>
        </Select.Root>
    </div>
}