export default function Spiner() {
    return <div className='w-[20em] h-[20em] relative flex justify-center items-center'>
        <div id="loader" className='absolute w-[55%] h-[55%] flex justify-center items-center'>
            {new Array(8).fill(null).map((_, i) => (
                <span key={`circle-${i}`} style={{ [`--i` as never]: i }} />
            ))}
        </div>
    </div>
}