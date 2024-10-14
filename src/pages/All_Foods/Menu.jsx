import { NavLink, useLoaderData } from "react-router-dom";

const Menu = () => {
  const menu = useLoaderData();
  const {
    name,
    photoUrl,
    description,
    quantity,
    numberOfSales,
    category,
    price,
  } = menu;
  return (
    <div>
      <div className=" h-[10vh] grid items-center justify-center text-center content-center my-10">
        <h3 className="text-white text-lg md:text-3xl">
          <a className="hover:text-[#FFCE6D]" href="/">
            Home
          </a>
          |
          <a className="hover:text-[#FFCE6D]" href="/AllFoods">
            All Foods
          </a>
          | <NavLink className="text-[#FFCE6D]">{name}</NavLink>
        </h3>
      </div>
      <h1 className="md:hidden text-3xl text-center dancing text-[#FFCE6D] mb-10">
            {name}
          </h1>
      <div className="flex flex-col-reverse md:flex-row md:flex justify-between mx-4 md:mx-20 md:my-10">
        <div>
        <h1 className="hidden md:block text-6xl text-center dancing text-[#FFCE6D] mb-4">
            {name}
          </h1>
          <h3 className="text-center my-2 text-sm text-white md:text-2xl md:px-5 md:pt-10 md:pb-20">{description}</h3>
          <h4 className="text-white md:text-xl text-sm md:pb-5">
            Available Quantity:
            <span className="text-[#FFCE6D] text-2xl md:text-3xl"> {quantity}</span>
          </h4>
          <h4 className="text-white md:text-xl text-sm md:pb-5">
            Ordered Till Now: <span className="text-[#FFCE6D] text-2xl md:text-3xl"> 
               {numberOfSales} Times
            </span>
          </h4>
          <h4 className="text-white md:text-xl text-sm md:pb-5">
            Category <span className="text-[#FFCE6D] text-2xl md:text-3xl">{category}</span>
          </h4>
          <h4 className="text-white md:text-xl text-sm md:pb-5 mb-4">
            Price:<span className="text-[#FFCE6D] text-2xl md:text-3xl"> ${price}</span>
          </h4>
          
          <div className="mt-10 flex gap-2 md:gap-10">
            
            <NavLink className="text-[#060d15] bg-[#6dffc0d3] md:px-4 md:py-4 md:text-xl rounded-2xl hover:text-[#FFCE6D] hover:bg-[#101418] px-2 py-2  md:font-semibold" >Add Item </NavLink>
            <NavLink className="text-[#101418] bg-[#fafafa] md:px-4 md:py-4 md:text-xl rounded-2xl hover:text-[#FFCE6D] hover:bg-[#101418] px-2 py-2 md:font-semibold" >Edit Item</NavLink>
            <NavLink className="text-[#d8e4f0] bg-[#a31d1d] md:px-4 md:py-4 md:text-xl rounded-2xl hover:text-[#FFCE6D] hover:bg-[#101418] px-2 py-2 md:font-semibold" >Delete Item</NavLink>
          </div>
        </div>
        <div>
          <img className="mb-10" src={photoUrl} alt="" />
          <div className="text-center ">
          <NavLink className="text-[#101418] bg-[#FFCE6D] md:px-4 md:py-4 text-xl rounded-2xl hover:text-[#FFCE6D] hover:bg-[#101418] px-2 py-2 md:font-semibold" >Order Now </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
