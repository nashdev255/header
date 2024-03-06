export default function Home() {
  return (
    <div className='relative flex h-[100vh] w-[100vw] items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <div className='flex h-[500px] w-[1500px] rounded-xl bg-white bg-opacity-[0.3] shadow-lg'>
        <div className='flex items-center justify-center'>
          <div className='flex space-x-16 p-[200px]'>
            <div className="size-[300px] rounded-full bg-[url('/icon.png')] bg-cover" />
            <div className='flex flex-col space-y-6 py-12'>
              <h1 className='text-4xl font-bold text-white'>なっしゅ / nash</h1>
              <h3 className='text-xl text-white'>Digital Content Developer</h3>
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className='absolute bottom-4 right-8 text-xl text-slate-300 text-opacity-[0.70]'>1500 × 500</p>
    </div>
  );
};
