import Spinner from "@/layouts/Spinner";
import bgImg from "/cyberpunk.jpg"

export default function Page1() {
    return <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='snap-always snap-center w-full flex flex-row justify-center items-center'>
            <div className='w-[60%]'>
                <h1 className='uppercase'>Bienvenidos</h1>
                <p>Me apasiona el software y el diseño. Ahora mismo me encuentro experimentando con Frontend React pero también me acoplo bastante bien a Backend con Nodejs. He probado varias tecnologías y me gusta aprender nuevas novedades tecnológicas, Qwik siendo mi prueba más reciente. Me gusta participar activamente en equipos para construir productos y servicios que ofrezcan calidad y estética. No soy muy fanático de cosas hechas a medias.</p>
            </div>
            <div className='w-[40%] relative flex flex-col justify-center items-center'>
                <img className='object-cover' src={bgImg} alt='library' />
                <div className='absolute top-5'>
                    <Spinner />
                </div>
            </div>
        </div>
    </div>
}