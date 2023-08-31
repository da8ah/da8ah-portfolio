import Stats from "@/layouts/Stats";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return <div className='flex flex-col'>
        <div className='py-5'>
            <h1 className='uppercase'>Bienvenidos</h1>
            <Carousel
                responsive={responsive}
                infinite
                transitionDuration={500}
                className="z-10 w-full mt-16 owl-carousel owl-theme text-center"
            >
                <div className="px-20 flex flex-col justify-center items-center">
                    <p>Me apasiona el software y el diseño. Ahora mismo me encuentro experimentando con Frontend React pero también me acoplo bastante bien a Backend con Nodejs. He probado varias tecnologías y me gusta aprender nuevas novedades tecnológicas, Qwik siendo mi prueba más reciente. Me gusta participar activamente en equipos para construir productos y servicios que ofrezcan calidad y estética. No soy muy fanático de cosas hechas a medias.</p>
                </div>
                <div className="px-20 flex flex-col justify-center items-center">
                    <p>Me apasiona el software y el diseño. Ahora mismo me encuentro experimentando con Frontend React pero también me acoplo bastante bien a Backend con Nodejs. He probado varias tecnologías y me gusta aprender nuevas novedades tecnológicas, Qwik siendo mi prueba más reciente. Me gusta participar activamente en equipos para construir productos y servicios que ofrezcan calidad y estética. No soy muy fanático de cosas hechas a medias.</p>
                </div>
                <div className="px-20 flex flex-col justify-center items-center">
                    <p>Me apasiona el software y el diseño. Ahora mismo me encuentro experimentando con Frontend React pero también me acoplo bastante bien a Backend con Nodejs. He probado varias tecnologías y me gusta aprender nuevas novedades tecnológicas, Qwik siendo mi prueba más reciente. Me gusta participar activamente en equipos para construir productos y servicios que ofrezcan calidad y estética. No soy muy fanático de cosas hechas a medias.</p>
                </div>
            </Carousel>
        </div>
        <Stats />
    </div>
}