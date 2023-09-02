import * as HoverCard from '@radix-ui/react-hover-card';

export default function Tooltip(props: { key: string }) {
    return <HoverCard.Root key={props.key}>
        <HoverCard.Trigger asChild>
            <div>...</div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content
                forceMount
                align='end'
                side='left'
                className='z-[100] w-[100px] h-[100px] bg-black'
            >
                <div className='w-full h-full space-x-4'>Hello World</div>
                <HoverCard.Arrow className="fill-black text-white" />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
}