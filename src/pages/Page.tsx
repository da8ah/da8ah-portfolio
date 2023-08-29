export default function Page(props: { children: JSX.Element }) {
    return <div className='w-full h-screen flex flex-col justify-center items-center'>
        {props.children}
    </div>
}