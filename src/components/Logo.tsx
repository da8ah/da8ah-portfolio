export type LogoProps = {
    src: string,
    href: string,
    className: string,
    alt: string
    style?: React.CSSProperties
}

export default function Logo(props: LogoProps) {
    return <a style={props.style} href={props.href} target="_blank" rel="noopener noreferrer">
        <img {...props} />
    </a>
}