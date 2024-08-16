import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="">
          MẸ AN FOOD
        </Link>

        {/* className="hover:bg-gray-300 rounded p-1" */}
        <Link href={""}>Trang chủ</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Giới thiệu</Link>
        <Link href={""}>Liên lạc</Link>
      </nav>

      <nav className="flex items-center gap-4 text-gray-500 font-semibold hover:text-blue-500">
        <Link href={'/login'}>Đăng nhập</Link>
        <Link
          href={'/register'}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Đăng ký
        </Link>
      </nav>
    </header>
  );
}
