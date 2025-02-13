import Image from 'next/image'
import dogCatAbout from '../../../public/imagens/about-1.png'
import catAbout from '../../../public/imagens/about-1.png'

export function About() {
    return(
        <section className="bg-[#fdf6ec] py-16 ">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12">
                <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                    <Image src={dogCatAbout} alt='cão e gato' fill quality={100} priority/>
                </div>
            </div>
        </section>
    )
}