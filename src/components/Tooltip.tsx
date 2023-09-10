import * as HoverCard from '@radix-ui/react-hover-card';

export default function Tooltip(props: {
    key: string,
    children: [JSX.Element, JSX.Element],
    cardClassName: string,
    arrowClassName: string,
    align?: "center" | "end" | "start",
    side?: "left" | "top" | "right" | "bottom"
}) {
    return <HoverCard.Root key={props.key}>
        <HoverCard.Trigger asChild>
            {props.children[0]}
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content
                forceMount
                align={props.align || 'end'}
                side={props.side || 'right'}
                className={props.cardClassName}
            >
                {props.children[1]}
                <HoverCard.Arrow className={props.arrowClassName} />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
}