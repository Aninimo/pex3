'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'


import { Leaf } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const router = useRouter();

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false); 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftRef.current && entry.isIntersecting) {
            setIsVisibleLeft(true);
          }
          if (entry.target === rightRef.current && entry.isIntersecting) {
            setIsVisibleRight(true);
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div>
      <header>
        <nav className='flex justify-between p-4 mb-12'> 
          <div className='flex items-center'>
            <h2>AgroSustentável</h2>
            <Leaf />
          </div>
          <ul className="flex gap-8">
            <li className="relative group">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <a href="#sustentabilidade">Sustentabilidade</a>
            </li>
            <li className="relative group">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <a href="#fome">Combate a fome</a>
            </li>
            <li className="relative group">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <a href="#tecnologia">Tecnologia</a>
            </li>
            <li className="relative group">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <a href="#dicas">Dicas Sustentáveis</a>
            </li>
            <li className="relative group">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <a href="#participacao">Participação Comunitária</a>
            </li>
          </ul>
        </nav> 
      </header>
      <section className="responsive-section flex justify-between items-center p-8 mt-32" id="sustentabilidade">
        <div
          ref={leftRef}
          className={`transition-opacity duration-1000 ${
            isVisibleLeft ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl mt-12 mb-4">Semeando a esperança: <br /> Combate a fome e sustentabilidade</h1>
          <p className="w-3/4">
            A fome e a degradação ambiental são desafios urgentes, mas juntos podemos transformar essa realidade. &quot;Semeando a Esperança&quot; é um espaço dedicado a promover soluções sustentáveis para garantir alimentação digna e preservar o meio ambiente. Acreditamos no poder da agricultura sustentável, do consumo consciente e da solidariedade para construir um futuro onde ninguém passe fome e os recursos naturais sejam respeitados. Junte-se a nós nessa missão e ajude a cultivar um Brasil mais justo e sustentável!
          </p> 
          <button 
            type="button" 
            onClick={() => router.push('/main')} 
            className="absolute w-64 bg-gray-950 text-white p-4 rounded-2xl mt-8 text-center"
          >
            Ler mais
          </button>
        </div>
        <div 
           ref={rightRef}
           className={`transition-opacity duration-1000 ${
             isVisibleRight ? "animate-slide-in-right" : "opacity-0"
           }`}
        >
          <Image
            src="https://media.istockphoto.com/id/108349181/pt/foto/africana-menina-comer-uma-refei%C3%A7%C3%A3o-na-orfanato.webp?a=1&b=1&s=612x612&w=0&k=20&c=loeTlOa5fkV-IIu2E-Jhik7YKHQgEYUymUu7p99unw0="
            alt="Imagem da menina"
            className="rounded-full"
            width={1200}
            height={1200}
          />
        </div>
      </section>
     
      <section className='responsive-section w-full flex items-center p-12 mt-42' id="fome">
         <div
           ref={leftRef} 
           className={`transition-opacity duration-1000 ${
             isVisibleLeft ? "animate-slide-in-left" : "opacity-0"
           }`}
         >
           <Image
              src="https://media.istockphoto.com/id/1157904078/pt/foto/homeless-people-are-helped-with-food-relief-famine-relief-volunteers-giving-food-to-poor.webp?a=1&b=1&s=612x612&w=0&k=20&c=kkdHqPhoTL-071eAMA5I9sVEasGKQhRmxXgTCYK2Hf4="
              className=" rounded-full custom-clip-path shadow-lg"
              alt="Imagem de ajuda humanitária"
              width={1000}
              height={1000}
           />
         </div>
        
         <div 
           ref={rightRef}
           className={`transition-opacity duration-1000 ${
             isVisibleRight ? "animate-slide-in-right" : "opacity-0"
           }`}
         >
           <div className="ml-96">
             <h2 className='text-4xl mb-6'>Combate a fome</h2>
             <p className='w-3/5'>A fome é uma das maiores injustiças do mundo moderno. Milhões de pessoas sofrem com a falta de acesso a alimentos nutritivos, levando a consequências devastadoras para a saúde, o bem-estar e a dignidade humana.</p><br/>
             <p className='w-3/5'>No entanto,a fome não é apenas um problema de falta de alimentos. È também um reflexo de desigualdades sociais, econômicas e políticas que perpetuam a pobreza e a exclusão. È um desafio complexo que requer uma abordagem multitacetada e colaborativa</p>
             <h4 className='text-2xl mt-8'>Causas da Fome</h4>
             <ul className='ml-8 mt-4 mb-4'>
                <li>• Pobreza e desigualdade econômica</li>
                <li>• Falta de acesso a terra, águas e recursos naturais</li>
                <li>• Conflitos e crises humanitárias</li>
                <li>• Mudanças climáticas e degradação ambiental</li>
                <li>• Sistemas alimentares injustos e ineficientes</li>
             </ul>
             <button type="button" onClick={() => router.push('/causesOfHunger')} className="absolute w-64 bg-gray-950 text-white p-4 rounded-2xl mt-4 text-center">Ler mais</button>
           </div>
         </div>
       </section>
       <section className='responsive-section flex justify-between items-center p-12 mt-42' id="tecnologia">
          <div
             ref={leftRef} 
             className={`transition-opacity duration-1000 ${
               isVisibleLeft ? "animate-slide-in-left" : "opacity-0"
             }`}
          >
            <h2 className='text-4xl mb-6'>Tecnologia no campo</h2>
            <p className='w-3/5'>A agricultura é uma das atividades mais antigas e essenciais de humanidade, e ao longo doas anos, a tecnologia tem desempenhado um papel cada vez mais importante nesse setor. A integração da tecnologia no campo tem permitido que os agricultores aumentem a produtividade, reduzam custos e melhorem a sustentabilidade de suas práticas.</p>
            <button type="button" onClick={() => router.push('/technology')} className="absolute w-64 bg-gray-950 text-white p-4 rounded-2xl mt-8 text-center">
              Ler mais
           </button>
          </div>
          <div className="animate-slide-in-right">
            <Image 
              src='https://media.istockphoto.com/id/1323672796/pt/foto/a-young-agronomist-holds-a-folder-in-his-hands-on-a-green-wheat-field-a-farmer-makes-notes-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=40q7KzTwPOxUiS_yJZBpzyVWirhZTivPtMmB2u6TTjY='
              className='rounded-2xl'
              alt=''
              width={1000}
              height={3000}
            />
          </div>
         </section>
         <section className='responsive-section flex justify-between items-center p-12 mt-24' id="dicas">
            <div
               ref={leftRef} 
               className={`mt-24 transition-opacity duration-1000 ${
                 isVisibleLeft ? "animate-slide-in-left" : "opacity-0"
               }`}
            >
              <Image
                src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzdGVudGF2ZWx8ZW58MHx8MHx8fDA%3D'
                className='rounded-2xl'
                alt=""
                width={2000}
                height={2000}
              />
            </div>
            <div className='ml-32'>
              <h2 className='text-4xl mb-6'>Dicas Sustentáveis</h2>
              <p className=''>Dicas sustentáveis são práticas e hábitos simples que podem ser adotados no dia a dia para reduzir o impacto ambiental e promover a conservação dos recursos naturais. Desde pequenas ações, como o uso consciente de energia e água, até escolhas mais complexas, como o consumo de produtos eco-friendly, essas atitudes são fundamentais para um futuro mais verde e equilibrado. Implementar essas dicas pode melhorar a qualidade de vida e ajudar a preservar o planeta para as futuras gerações.</p>
              <button type="button" onClick={() => router.push('/sustainable')} className="absolute w-64 bg-gray-950 text-white p-4 rounded-2xl mt-4 text-center">Ler mais</button>
             </div>
          </section>
          <section className='responsive-section flex justify-between items-center p-12 mt-24 mb-12' id="participacao">
             <div>
               <h2 className='text-4xl mb-6 w-3/5'>Participação Comunitária: O Poder do Envolvimento Cidadão</h2>
               <p className='w-3/5'>A participação comunitária é um conceito que se refere ao envolvimento ativo e consciente dos cidadãos em processos de tomada de decisão e ações que afetam a comunidade. É um elemento fundamental para a construção de uma sociedade mais justa, democrática e sustentável.</p>
               <button type="button" onClick={() => router.push('/community')} className="absolute w-64 bg-gray-950 text-white p-4 rounded-2xl mt-4 text-center">Ler mais</button>
             </div>
             <Image 
               src='https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tdW5pdCVDMyVBMXJpYXxlbnwwfHwwfHx8MA%3D%3D'
               className='rounded-2xl'
               alt=''
               width={900}
               height={900}
             />
          </section>
          <footer className='h-44 p-4 bg-gray-950 text-white'>
            <h3>AgroSustentável</h3>
            <div className="mt-8">
              <ul className="flex justify-between">
                <li>Combate a fome</li>
                <li>Tecnologia no campo</li>
                <li>Combate a fome</li>
                <li>Dicas Sustentáveis</li>
                <li> Participação Comunitária</li>
              </ul>
            </div>
          </footer>
    </div>
  );
}
