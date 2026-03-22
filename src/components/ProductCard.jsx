import Button from "./ui/button"

const ProductCard = ({title,price,category}) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow">
      <div className="h-40 bg-slate-200 rounded-xl"></div>

      <div className="flex justify-between items-center mt-2 mb-1">
        <h1 className="text-lg font-medium">
            {title}
        </h1>
        <span className="text-sm bg-slate-200 px-4 py-1 rounded-full font-medium">
          {category}
        </span>
      </div>
      <p className="font-bold text-rose-600 mb-1">
        ${price}
       </p>

      <Button className="w-full mt-4" variant="secondary">
        Add to cart
      </Button>

      <Button className="w-full mt-2">
        Buy Now
      </Button>

    </div>
  )
}
export default ProductCard
