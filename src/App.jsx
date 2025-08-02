
// import './App.css'

import { GrContactInfo } from "react-icons/gr";
import { RiBarChartHorizontalFill,RiGalleryView2 } from "react-icons/ri";

import { useState } from "react";
import img1 from './assets/first.jpg'
import img2 from './assets/second.jpg'
import img3 from './assets/third.jpg'


const App = ()=>{
  const [isClicked,setClicked] = useState(false);
  const base_style = "rounded-full bg-gradient-to-r from-zinc-600 to-zinc-300  justify-center  hover:shadow-lg hover:cursor-pointer hover:shadow-blue-200/20 transition duration-30s";
  const handleClick = ()=>{
    setClicked(prev =>!prev);
  }
  return (
    <>
   <nav className="mx-10 my-10 flex justify-between">
    <div>
      <p>Logo add here</p>
    </div>
    <div className="w-50">
      <ul className="list-none flex justify-between">
        <li className={`flex w-36 h-10 ${base_style}`}>
          <div className="flex my-1">
            
          <p>Contact Us</p>
          <div className="w-8 h-8 ml-2 bg-white flex justify-center rounded-full">
          <GrContactInfo color="black" style={{margin:"25%"}}/>
          </div>
        </div>
        </li>
      <li className={`w-10 h-10 ${base_style} select-none`} onClick={handleClick}>
               <div className="flex justify-center">
                {
                  !isClicked ? <RiBarChartHorizontalFill style={{ margin: "25%" }}/>:<RiGalleryView2 style={{margin:"25%"}}/> 

                }
               </div>
        </li>
      </ul>
    </div>
   </nav>
   <div className="w-screen flex flex-col justify-center">
    <div className="flex justify-center">
      <p className="w-5xl text-center leading-24 text-[5rem]">We are your software Development Team in the Cloud</p>
    </div>
    <div className="flex justify-center mt-10">
      {/* image show case */}
      { !isClicked && (
        <>
          <div className="relative">
          <img src={img1} className="w-150 relative z-30 rounded-4xl"/>
          <img src = {img2} className="w-140 absolute top-0 left-5 z-20 rounded-4xl"/>
          <img src={img3} className="w-130 absolute top-0 left-5 z-0 rounded-4xl" />
          </div>
        </>
        )
      }
      {
        isClicked &&(
          <>
           <div >
              {[img1, img2, img3].map((src, i) => (
                <img key={i} src={src} className="rounded-4xl w-150"/>
              ))}
          </div>
          </>

        )
      }

    </div>
   </div>
    </>
  )
}

export default App
