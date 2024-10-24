const HomeSectionCard = ({ele}) => {
   
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white overflow-hidden rounded-lg shadow-lg w-[15rem] mx-3">
        <div className='h-[13rem] w-[10rem]'>
           <img className='object-cover object-top h-full w-full' src={ele.url}/>
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-grey-900'>{ele.brand}</h3>
            <p className='mt-2 text-sm text-grey-500'>{ele.title}</p>
        </div>
    </div>
  );
};

export default HomeSectionCard