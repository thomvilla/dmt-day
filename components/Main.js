import { Parallax } from 'react-scroll-parallax';
import Countdown from "./countdown"

export default function Main({ globalData }) {
  
  return (
    <>
        <div className="flex flex-col items-center justify-around w-full h-auto my-8">
          <Countdown/>
          <Parallax speed={-2} >
            <button class="btn btn-primary m-8">
              {globalData.btnTitle ? globalData.btnTitle : "Anotate acá"}
            </button>
          </Parallax>
        </div>
        <div className="grid w-full h-screen grid-cols-2 grid-rows-2 gap-10 py-10 mt-10">
            <div className="shadow stats">
                <div className="flex justify-center stat"> 
                    <div className="stat-figure text-secondary">🏁</div>
                    <div className="self-center text-xl stat-value text-secondary">Actividades</div>
                </div>
            </div>
            <div className="shadow stats">
                <div className="flex justify-center stat"> 
                    <div className="stat-figure text-secondary">🛴</div> 
                    <div className="self-center text-2xl stat-value text-secondary">Vehiculos</div>
                </div>
            </div>
            <div className="shadow stats">
                <div className="flex justify-center stat"> 
                    <div className="stat-figure text-secondary">🏎</div>
                    <div className="self-center text-2xl stat-value text-secondary">Riders</div>
                </div>
            </div>
             <div className="shadow stats">
                <div className="flex justify-center stat"> 
                    <div className="stat-figure text-secondary">⚡️</div>
                    <div className="self-center text-2xl stat-value text-secondary">PoloWheel</div>
                </div>
            </div>
             <div className="shadow stats">
                <div className="flex justify-center stat"> 
                    <div className="stat-figure text-secondary">🍔</div>
                    <div className="text-2xl stat-value text-secondary">Foodtruck</div>
                </div>
            </div>
            <div className="shadow stats">
                <div className="flex justify-center stat"> 
                    <div className="stat-figure text-secondary">🏆</div>
                    <div className="self-center text-2xl stat-value text-secondary">Premios</div>
                </div>
            </div>
        </div>
    </>
  );
}
