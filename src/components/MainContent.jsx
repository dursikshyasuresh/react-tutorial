import ProductCard from "./ProductCard"

const MainContent = () => {
  return (
    <main className="container my-4 min-h-[80vh]">
      <h1 className="text-2xl font-semibold mb-2">List of Products</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        deserunt ea libero expedita error. Itaque nostrum illo aliquam commodi
        odio!
      </p>

      <hr className="my-4 border-slate-300" />

      {/* product list */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard title="Iphone 17 pro max" price={150} category="mobile" />
        <ProductCard title="MacBook Air 5" price={1000} category="laptop" />
        <ProductCard title="Samsung S26 ultra" price={999} category="mobile" />
        <ProductCard title="Classic White Tee" price={15} category="cloth" />
      </div>

      <h1 className="text-2xl font-semibold mb-2 mt-10">List of Categories</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        deserunt ea libero expedita error. Itaque nostrum illo aliquam commodi
        odio!
      </p>

      <hr className="my-4 border-slate-300" />

    </main> 
  )
}
export default MainContent
