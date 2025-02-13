"use client"
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from 'lucide-react'
import{WhatsappLogo} from '@phosphor-icons/react/dist/ssr'

const services = [
    {
        title: 'Banho e tosa',
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada",
        duration: "1h",
        price: "R$ 50,00",
        icon: <Scissors/>,
        linkText: 'Olá, preciso de um banho e tosa'
    },
    {
        title: "Consulta Veterinária",
        description: "Cuide da saúde do seu pet com nossos veterinários especializados.",
        duration: "1h",
        price: "A partir de R$ 100,00",
        icon: <Syringe/>,
        linkText: "Marcar consulta"
    },
    {
        title: "Táxi de Pet",
        description: "Nossa equipe de taxis de pet oferece transporte confortável e seguro para animais de estimação.",
        duration: "2h",
        price: "A partir de R$ 80,00",
        icon: <CarTaxiFront/>,
        linkText: "Marcar consulta"
    },
    {
        title: "Hotel para pets",
        description: "Conforte sua casa com um hotel especializado para animais de estimação.",
        duration: "6h / dia",
        price: "A partir de R$ 60,00",
        icon: <Hotel/>,
        linkText: "Marcar consulta"
    },
    
]
export function Services() {
    const[emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": {slidesToScroll: 3},
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev()
    }
    function scrollNext(){
        emblaApi?.scrollNext()
    }


    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-bold mb-12">Serviços</h2>
                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#1e293b] text-white roun p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>

                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1 select-none'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-5 h-5'/>
                                                <span>{item.duration}</span>
                                            </div>
                                            <a href="#" className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'>
                                                <WhatsappLogo className='w-5 h-5'/>
                                                Entar em contato
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollPrev} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft className='w-5 h-5 text-gray-600 '/>
                    </button>
                    <button onClick={scrollNext} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight className='w-5 h-5 text-gray-600 '/>
                    </button>
                </div>

            </div>
        </section>
    )
}