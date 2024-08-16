import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image
            src={"/thumbnail_coconut.png"}
            width={209}
            height={289}
            alt={"Dua Xoi"}
          />
        </div>

        <div className="h-48 absolute -top-[130px] right-0 -z-10">
          <Image
            src={"/thumbnail_pizza.png"}
            width={207}
            height={295}
            alt={"Pizza"}
          />
        </div>
      </div>
      <div className="text-center mb-5">
        <SectionHeaders
          subHeader={"check out"}
          mainHeader={"Best Seller Ours"}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
