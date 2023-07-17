'use client'
import Head from "next/head";
// import { IconName } from "react-icons/bs";
import { BsFillMoonStarsFill,} from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube 
} from "react-icons/ai";
import Image from "next/image";
import avatar from '../public/avatar.png';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting  from '../public/consulting.png';
import web1  from '../public/web1.png';
import web2  from '../public/web2.png';
import web3  from '../public/web3.png';
import web4  from '../public/web4.png';
import web5  from '../public/web5.png';
import web6  from '../public/web6.png';

import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    window.location.href = 'https://www.facebook.com/YouThien.YT/';
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>YouThien</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 ">
       <section className="min-h-screen"> 
       <nav className="py-10 flex justify-between ">
        <h1 className="text-3xl font-burtons dark:text-green-300"> developedbyed </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-amber-600 dark:hover:text-gray-100 hover:text-gray-800 text-2xl md:text-4xl"></BsFillMoonStarsFill>
          </li>
          <li>
            <a href="#" className="bg-gradient-to-r from-cyan-600 to-teal-200 text-black px-5 py-3 rounded-md ml-8 " > 
            Resume 
            </a>
          </li>
        </ul>
        </nav>
        <div className="text-center">
          <h2 className="text-5xl py-2 text-teal-600 font-bold md:text-7xl dark:text-amber-200" >
            You Thiên
          </h2>
          <h3 className="text-2xl py-2 font-medium md:text-3xl dark:text-teal-400 ">
            Developer and designer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
          Freelancer providing services for programming and design content needs. Join me down below and let's get cracking! 
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-900 md:text-6xl dark:text-gray-100 " > 
          <AiFillTwitterCircle className="cursor-pointer hover:text-blue-500" onClick={handleClick}></AiFillTwitterCircle>         
         {/* <a href="https://www.facebook.com/YouThien.YT/"> 
         <AiFillTwitterCircle className=" hover:text-blue-500"></AiFillTwitterCircle>         
         </a> */}
          <AiFillLinkedin></AiFillLinkedin>
          <AiFillYoutube></AiFillYoutube>
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full mx-auto w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
          <Image src={avatar} layout="fill" objectFit="cover" ></Image>
        </div>
       </section>
{/* ==================================================== */}
       <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-teal-400">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
        </div>
        <div className="lg:flex gap-10 ">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-200 ">
            <Image className="mx-auto" src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
            Creating elegant designs suited for your needs following core design theory.
            </p>
            <h4 className="py-4 text-teal-600">Designs tool I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-200 ">
            <Image className="mx-auto" src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
            Creating elegant designs suited for your needs following core design theory.
            </p>
            <h4 className="py-4 text-teal-600">Designs tool I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-200 ">
            <Image className="mx-auto" src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
            Creating elegant designs suited for your needs following core design theory.
            </p>
            <h4 className="py-4 text-teal-600">Designs tool I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
        </div>
       </section>
{/* ===================================== */}
       <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-teal-400">Protofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
        <div className="flex flex-col gap-10 py-10  lg:flex-row  lg:flex-wrap   ">
          <div className="basis-1/3 flex-1 ">
            <Image src={web1} className="rounded-xl object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" ></Image>
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image src={web2} className="rounded-xl object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" ></Image>
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image src={web3} className="rounded-xl object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" ></Image>
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image src={web4} className="rounded-xl object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" ></Image>
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image src={web5} className="rounded-xl object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" ></Image>
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image src={web6} className="rounded-xl object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" ></Image>
          </div>
        </div>
       </section>
       </main>
    </div>
  )
}
