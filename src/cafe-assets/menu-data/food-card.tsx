

function FoodCard() {
  return (
    <div className=" w-48 h-48 rounded-lg bg-white px-2 py-2">
        <div className=" h-2/5 w-full justify-center items-center">
        <img src='/biryani.png' className=" w-full h-full rounded-lg aspect-square object-contain" />
        </div>
        <div className="w-full h-3/5 flex flex-col items-center justify-center gap-y-2">
            <label className=" font-semibold mt-2">Biryani</label>
            <label className=" text-green-500 font-semibold ">200</label>
        </div>
    </div>
  )
}

export default FoodCard