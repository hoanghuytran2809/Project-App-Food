export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          className="rounded-lg max-h-auto max-h-24 block mx-auto"
          src="/xoi_gac.jpg"
          alt="Xôi gấc"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Xôi Gấc</h4>
      <p className="text-gray-500 text-justify text-sm">
        Xôi gấc là món xôi dẻo màu đỏ cam, làm từ gạo nếp và quả gấc, thường ăn
        kèm dừa nạo và đậu phộng. Món ăn này mang lại hương vị thơm ngon và
        tượng trưng cho may mắn mắn.
      </p>
      <button className="bg-primary mt-4 font-semibold text-white rounded-full px-8 py-2 text-xs">
        Thêm vào giỏ hàng <br />
        29.000 VNĐ
      </button>
    </div>
  );
}
