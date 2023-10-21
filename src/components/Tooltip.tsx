import * as HoverCard from '@radix-ui/react-hover-card';

export default function Tooltip(props: {
    tooltipKey: string,
    children: [JSX.Element, JSX.Element],
    align?: "center" | "end" | "start",
    side?: "left" | "top" | "right" | "bottom"
}) {
    return <HoverCard.Root key={`tooltip-${props.tooltipKey}`} openDelay={1} closeDelay={0}>
        <HoverCard.Trigger asChild>
            {props.children[0]}
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content
                forceMount
                align={props.align || 'end'}
                side={props.side || 'right'}
                className='z-[100] w-[170px] h-[200px] rounded-[5px] text-black dark:text-white ring-1 ring-black dark:ring-0 bg-gradient-to-b from-white to-gray-200 dark:from-[#242424] dark:to-gray-800 dark:shadow-[0_0_5px_0_black]'
            >
                {props.children[1]}
                <HoverCard.Arrow className='fill-black dark:fill-white' />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
}