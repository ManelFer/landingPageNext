import Image from 'next/image'
import dogCatAbout from '../../../public/imagens/about-1.png'
import catAbout from '../../../public/imagens/about-2.png'
import { Check, MapPin } from 'lucide-react'
import { WhatsappLogo} from '@phosphor-icons/react/dist/ssr'


export function About() {
    return(
        <section className="bg-[#fdf6ec] py-16 ">
            <div className="container px-4 mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className='relative'>
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image src={dogCatAbout} 
                            alt='cão e gato' 
                            fill 
                            quality={100}
                            className='object-cover hover:scale-110 duration-300' 
                            priority/>   
                        </div>

                        <div className='absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden roun-lg border-white '>
                            <Image src={catAbout} 
                            alt=' gato' 
                            fill 
                            quality={100}
                            priority/>   
                        </div>
                    </div>

                    <div className='space-y-6 mt-10'>
                        <h2 className='text-4xl font-bold'>Sobre</h2>
                        <p>
                        Encontre tudo o que seu pet precisa em um só lugar! De rações de alta qualidade e brinquedos divertidos a produtos de higiene e acessórios, a PetDev oferece uma    variedade imensa de produtos para animais de estimação de todos os tipos. Navegue pelas nossas categorias, encontre as melhores marcas e aproveite a comodidade de     comprar tudo online ou em nossa loja física. Seu pet agradece!
                        </p>

                        <ul className='space-y-4'>
                            <li className='flex intems-center gap-2'>
                                <Check className='text-red-500'/>
                                aberto desde 2006
                            </li>
                            <li className='flex intems-center gap-2'>
                                <Check className='text-red-500'/>
                                Equipe bem qualificada
                            </li>
                            <li className='flex intems-center gap-2'>
                                <Check className='text-red-500'/>
                                Qualidade é nossa prioridade
                            </li>
                        </ul>

                        <div className='flex gap-2'>
                            <a href="#" className='bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>
                                <WhatsappLogo className='w-5 h-5 text-white'/>
                                contato via WhatsappLogo
                            </a>
                            <a href="#" className='  flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>
                                <MapPin className='w-5 h-5 text-black'/>
                                Endereço da loja
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}