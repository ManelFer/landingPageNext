import { whatsappLogo} from '@phosphor-icons/react/dist/ssr'

export function Hero(){
    return(
        <section className="bg-[#E84C3D] text-white relative overflow-hiden">
            
            <div>
                <article>
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">Adote um Pet</h1>
                        <p className="lg:text-lg">Encontre um amigo para seu lar</p>
                        <a href="#" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit"> <whatsappLogo ></>contato</a>
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black px-2 py-1 rounded-md">5%</b> de desconto
                            </p>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    )
}