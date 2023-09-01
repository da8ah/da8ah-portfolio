import * as HoverCard from '@radix-ui/react-hover-card';

export default function Tooltip(props: { key: string }) {
    return <HoverCard.Root key={props.key}>
        <HoverCard.Trigger asChild>
            <div>...</div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content
                className='z-[100]'
                side='left'
                forceMount
            >
                <HoverCard.Arrow className="fill-current text-white dark:text-gray-800" />
                <div className='lex h-full w-full space-x-4'>Hello World</div>
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
}