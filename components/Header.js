import { Parallax } from 'react-scroll-parallax';

function Component(children) {
  return (
    <Parallax speed={10}>
      {children}
    </Parallax>
  );
}
export default function Header({ name }) {
  
  return (
    <header className="pb-12 ">   
      <a href="/">
        <Parallax speed={-2} className="flex flex-col items-center justify-center w-full ">
          <img className='' src="https://i.postimg.cc/qvz1f2ym/descarga-1-removebg-preview.png" />
        </Parallax>
        <div className="m-4 text-3xl font-bold animate-pulse md:text-7xl" > DEMENTE DAY 20 NOV </div>
      </a>
      <p className="text-2xl text-center cursor-pointer dark:text-white">
        <div className="border collapse collapse-plus border-base-300 bg-base-100 rounded-box ">
          <input type="checkbox" /> 
          <div className="transition-all collapse-title bg-secondary text-primary-content hover:bg-gradient-2 "> Me interesa</div>
          <div className="collapse-content bg-primary text-primary-content "> 
            <p className="m-2 transition-all hover:text-3xl">Inscripciones</p>
            <p className="m-2 transition-all hover:text-3xl">Itinerario</p>
            <p className="m-2 transition-all hover:text-3xl">Ubicacion</p>
            <p className="mt-2 transition-all hover:text-3xl">Mas Info</p>
          </div>
        </div>
      </p>
    </header>
  );
}
