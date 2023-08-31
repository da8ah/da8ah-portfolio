import Spinner from "@/layouts/Spinner";
import { motion } from 'framer-motion';
import bgImg from "/cyberpunk.jpg";

export default function Page1(props: { className: string }) {
    return <div className={props.className}>
        <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center bg-[#242424]'>
            <motion.div
                className={`absolute z-0 w-[110%] h-[110%] content-none bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]`}
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity
                }}
            />
            <div className='relative z-10 w-[99%] h-[99%] rounded-[20px] flex flex-row justify-center items-center bg-[#242424] shadow-2xl shadow-purple-500'>
                <div className='w-[60%]'>
                    <h1 className='uppercase'>Bienvenidos</h1>
                    <p>Me apasiona el software y el diseño. Ahora mismo me encuentro experimentando con Frontend React pero también me acoplo bastante bien a Backend con Nodejs. He probado varias tecnologías y me gusta aprender nuevas novedades tecnológicas, Qwik siendo mi prueba más reciente. Me gusta participar activamente en equipos para construir productos y servicios que ofrezcan calidad y estética. No soy muy fanático de cosas hechas a medias.</p>
                </div>
                <div className='w-[40%] py-2 flex flex-col justify-center items-center'>
                    <img className='relative object-cover h-[90%]' src={bgImg} alt='library' />
                    <div className='absolute top-5'>
                        <Spinner />
                    </div>
                </div>
            </div>
        </div>
    </div>
}