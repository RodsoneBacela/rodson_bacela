import Link from 'next/link'
import  Image  from 'next/image';

export default function Contacto () {
    return(
        <div className="w-full bg-black/10 font-font-plex-sans py-20">
            <div className="w-[1440px] mx-auto flex flex-col gap-10 justify-center items-center">
                <h2 className="text-center text-3xl font-bold">Contact me</h2>
                <p className="text-center text-lg">
                    Estou sempre aberto a novas oportunidades e parcerias.<br/>
                    Se você tem um projeto interessante ou quer bater um papo,<br/>
                    entre em contato!
                </p>
                <div className="flex items-center justify-center gap-6">
                    <div className="w-18 h-18 bg-white rounded-full">
                        <Image 
                            src="/me.png"
                            alt='me memoji'
                            width={72}
                            height={72}
                            className='bg-cover rounded-full'
                        />
                    </div>
                    <p className='text-lg font-bold'>
                        Rodsone Bacela
                    </p>
                </div>
                <div>
                <Link href="" className='bg-white text-black p-2 font-semibold rounded-md'>
                    rodsonfernandes03@gmail.com
                </Link>
                </div>
            </div>
        </div>
    );
}