
import Calendario from "@/components/calendario";
import Features from "@/components/features3";
import Features2 from "@/components/features4";
import Camion from "@/components/Loader";
import MySvgfe from "@/components/svgfe";
import MySvgfeds from "@/components/svgfeds";
import CustomIcon from "@/components/svgwatsap";

const Home = () => {
  return (
    <>

<blockquote className="text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200 mx-auto text-center relative uppercase  sm:pt-8 lg:pt-12">
            SOLO POR
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block uppercase mr-5 mt-5 ml-5  sm:r-5 mt-5 lg: mt-5 ml-5">
              <span className="relative text-white">hoy </span>
            </span>
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block uppercase mr-5 mt-5 ml-8  sm:r-5 mt-5 lg: mt-5 ml-5">
              <span className="relative text-white"> Envio gratis </span>
              
            </span>
            <div className="flex">
      <div className=" sm:mx-auto ml-[100px] lg:mx-auto xl:mx-auto 2xl:mx-auto  " >
      <div style={{ transform: "scale(1.5)"}}>
        <Camion />
        </div>
        <div className="flex flex-row  mt-[50px]  sm:mx-auto "  style={{ transform: "scale(1.3)"}} >
       
        <MySvgfe/> <MySvgfeds/>
        
        </div>
      </div>
    </div>
            
            
           
          </blockquote>
          


   

          <blockquote className="sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-gray-200 mx-auto relative uppercase sm:pt-8 lg:pt-12">
  Agenda solo
  <span className="relative inline-block uppercase mx-5 my-2 before:block before:-inset-1 before:-skew-y-3 before:bg-blue-800">
    <span className="relative text-white">
      si estás dispuesto a invertir en tu negocio
    </span>
  </span>
  <span className="relative inline-block uppercase mx-5 my-2 before:block before:-inset-1 before:-skew-y-3 before:bg-blue-800">
    <div className="flex justify-center items-center">
      <CustomIcon />
    </div>
    <span className="relative text-white">Dale click al icono de WhatsApp</span>
  </span>
</blockquote>


          
          
      


      

        
     
    </>
  );
};

export default Home;
