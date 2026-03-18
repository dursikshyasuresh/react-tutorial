const Navbar = () => {
  return (
    <nav className="border-b border-slate-300 bg-white py-4 shadow">
      <div className="container flex justify-between items-center">
        <h1
          className="text-rose-600 
            font-bold text-2xl"
        >
          Logo
        </h1>

        <ul className="flex gap-4 font-medium">
          <li>Home</li>
          <li>Contact</li>
          <li>Products</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
