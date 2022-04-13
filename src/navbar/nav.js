
function Nav() {
    return (
<nav className="sm:px-4 py-2.5 bg-[#000000]">
        <div className="container flex flex-wrap items-center mx-auto ">
                    <ul className="flex flex-col m-2 p-3 md:flex-row text-xl md:space-x-4 md:font-medium inline-block">
                    <li>
                    <a href="index.html" className="text-[#fb7185] transition ease-in-out delay-150 hover:text-[grey] duration-150" aria-current="page">Portfolio</a>
                    </li>
                    <li>
                    <a href="index.html" className="text-[#fb7185] transition ease-in-out delay-150 hover:text-[grey] duration-150">Contact</a>
                    </li>
                    <li>
                    <a href="index.html" className="text-[#fb7185] transition ease-in-out delay-150 hover:text-[grey] duration-150">About</a>
                    </li>
                    </ul>
            
         </div>
</nav>


    );
  }
  
  export default Nav;