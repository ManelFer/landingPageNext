"use client"
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from 'lucide-react'
import{WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
import tutor1 from '../../../public/imagens/tutor1.png'
import Image from 'next/image'

const testimonials = [
    {
        content: "Otimos atendimentos, e profissionais qualificados e competentes. Recomendo para quem precisa de um serviço de qualidade para o seu pet.",
        author: "Maria",
        role: "Tutora da luna (Golden Retriever)",
        image: tutor1,
    },
    {
        content: "Otimos preços",
        author: "Neide",
        role: "Tutor do thor (Bulldog)",
        image: tutor1,
    }
]
export function Testimonial() {
    const[emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev(){
        emblaApi?.scrollPrev()
    }
    function scrollNext(){
        emblaApi?.scrollNext()
    }


    return(
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0  px-3'>
                                    <article className='bg-[#1e293b] text-white roun p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image src={item.image} alt={item.author} fill sizes='96px' className='object-cover rounded-full '/>
                                            </div>
                                            <p className='text-gray-200'>{item.content}</p>
                                            <div>
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>
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