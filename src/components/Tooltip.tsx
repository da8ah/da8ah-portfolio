import * as HoverCard from '@radix-ui/react-hover-card';

export default function Tooltip(props: {
    key: string,
    children: [JSX.Element, JSX.Element],
    align?: "center" | "end" | "start",
    side?: "left" | "top" | "right" | "bottom"
}) {
    return <HoverCard.Root key={props.key} openDelay={1} closeDelay={0}>
        <HoverCard.Trigger asChild>
            {props.children[0]}
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content
                forceMount
                align={props.align || 'end'}
                side={props.side || 'right'}
                className='z-[100] w-[170px] h-[200px] rounded-sm bg-black bg-opacity-80 ring-1 ring-white'
            >
                {props.children[1]}
                <HoverCard.Arrow className='fill-white' />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
}