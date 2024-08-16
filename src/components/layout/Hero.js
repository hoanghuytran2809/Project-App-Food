import Image from "next/image";
import Right from "../icons/Right";
import TopRight from "../icons/TopRight";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Tinh Hoa Ẩm Thực: <span className="text-primary">Xôi&nbsp;chè, Bánh mì &amp; Pizza</span> Đỉnh cao
        </h1>
        <p className="my-6 text-gray-500 text-justify">
          Tại đây, chúng tôi mang đến cho bạn những món ăn tinh túy nhất từ ẩm
          thực Việt Nam đến phong cách Âu châu. Mỗi món ăn là một câu chuyện,
          một hương vị khó quên. Hãy để chúng tôi dẫn dắt bạn qua hành trình ẩm
          thực đầy sắc màu và hương vị.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Đặt món ngay!
            <Right />
          </button>
          <button className="flex gap-2 py-2 items-center text-gray-600 font-semibold">
            Tìm hiểu thêm <TopRight />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/thumbnail_bg.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Thumbnail Xôi chè, bánh mì"}
        />
      </div>
    </section>
  );
}
