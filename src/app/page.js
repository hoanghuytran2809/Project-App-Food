import Phone from "@/components/icons/Phone";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4 text-justify">
          <p>
            Chúng tôi xin giới thiệu một hành trình đầy &quot;màu sắc&quot; và
            &quot;hứng khởi&quot; bắt đầu từ niềm đam mê với ẩm thực. Chúng tôi
            mang đến cho bạn sự kết hợp hoàn hảo giữa những món ăn truyền thống
            yêu thích như xôi chè và bánh mì pizza hiện đại, cùng với những trải
            nghiệm ẩm thực &quot;đáng nhớ&quot;.
          </p>
          <p>
            Khởi nguồn từ một ý tưởng đơn giản, chúng tôi đã kết hợp các món ăn
            dân dã với sự sáng tạo để tạo ra thực đơn đa dạng và hấp dẫn. Từ
            những món xôi chè ngọt ngào đến bánh mì, pizza thơm lừng, mỗi món ăn
            đều được chế biến tỉ mỉ để đảm bảo chất lượng và hương vị tuyệt vời.
          </p>
          <p>
            Chúng tôi không ngừng sáng tạo và phát triển để mang đến những trải
            nghiệm ẩm thực độc đáo, từ việc làm phong phú bữa ăn hàng ngày đến
            việc phục vụ các sự kiện và tiệc tùng. Chúng tôi tự hào về khả năng
            mang đến những món ăn ngon miệng và dịch vụ tận tâm, giúp mỗi bữa
            tiệc trở nên đặc biệt và đáng nhớ. Chào mừng bạn đến với thế giới ẩm
            thực của chúng tôi – nơi mỗi món ăn là một câu chuyện và mỗi sự kiện
            là một cơ hội để tạo ra những kỷ niệm đẹp.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-5">
          <a
            className="text-4xl hover:text-blue-700 hover:underline flex justify-center items-center gap-3"
            href="tel: +84 393 430 081"
          >
            <Phone /> Hotline, Zalo: +84 393 430 081
          </a>
        </div>
      </section>
    </>
  );
}
