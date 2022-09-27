import { Parallax } from 'react-scroll-parallax';
import CustomLink from "../components/CustomLink"

export default function Header({ name }) {
  
  return (
    <header className="pb-12 ">   
      <CustomLink href="/">
        <Parallax speed={-15} className="flex flex-col items-center justify-center w-full mt-10 ">
          <img className='' src="https://i.postimg.cc/qvz1f2ym/descarga-1-removebg-preview.png" />
        </Parallax>
        <div className="m-4 mt-32 text-3xl font-bold animate-pulse md:text-7xl" > DEMENTE DAY 20 NOV </div>
      </CustomLink>
      <p className="mt-10 text-2xl text-center cursor-pointer dark:text-white">
        <div className="collapse collapse-plus bg-base-100 rounded-box ">
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
