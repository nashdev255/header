import { RiGlobalFill } from 'react-icons/ri';
import { PiGuitarFill } from 'react-icons/pi';
import { IoGameController } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='relative flex h-[100vh] w-[100vw] items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <div className='flex h-[500px] w-[1500px] justify-center rounded-xl bg-white bg-opacity-[0.3] shadow-lg'>
        <div className='flex items-center justify-center'>
          <div className='flex space-x-4'>
            {/* {<div className="size-[300px] rounded-full border-2 border-white bg-[url('/icon.png')] bg-cover" />} */}
            <div className='flex flex-col space-y-6 px-16 py-12'>
              <h1 className='text-6xl font-bold text-white'>なっしゅ / nash</h1>
              <h3 className='text-3xl text-white'>Digital Content Developer</h3>
              <p className='text-xl text-white'>
                
                <br />

                <br />
                
              </p>
            </div>
            <ul className='grid grid-cols-2'>
              <li className='flex h-[150px] w-[400px] items-center rounded-lg'>
                <div className='mx-8 flex items-center space-x-6'>
                  <RiGlobalFill color='white' size='60' />
                  <p className='text-2xl text-white'>nash-portfolio-2024.vercel.app</p>
                </div>
              </li>
              <li className='flex h-[150px] w-[400px] items-center rounded-lg'>
                <div className='mx-8 flex items-center space-x-6'>
                  <FaCode color='white' size='60' />
                  <p className='text-2xl text-white'>趣味でC++を書いてます。</p>
                </div>
              </li>
              <li className='flex h-[150px] w-[400px] items-center rounded-lg'>
                <div className='mx-8 flex items-center space-x-6'>
                  <PiGuitarFill color='white' size='60' />
                  <p className='text-2xl text-white'>最近は邦ロックを弾くことにハマっています。</p>
                </div>
              </li>
              <li className='flex h-[150px] w-[400px] items-center rounded-lg'>
                <div className='mx-8 flex items-center space-x-6'>
                  <IoGameController color='white' size='60' />
                  <p className='text-2xl text-white'>VRChatを通じて英語や中国語の学習をしています。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className='absolute bottom-4 right-8 text-xl text-slate-300 text-opacity-[0.70]'>1500 × 500</p>
    </div>
  );
};
