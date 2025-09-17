import { Header } from "@/component/Header/Header";
import { Base } from "@/component/Base/Base";
import Image from "next/image";
import Link from "next/link";
import { icon } from "@/component/icon/icon";
export default function Home() {
  return (
    <div className="h-screen">
      <Base>
        <p className="text-blue-900">
          サービス名を
          <br />
          調べてみる。
        </p>
        <Link href="https://x.com">
          <div className="border border-indigo-600 w-120 h-16 flex items-right gap-4">
            <img className="w-14 h-12" src="/images.png"></img>
            twitter
            <br />
            ロゴ
          </div>
        </Link>

        <Link href="https://youtube.com">
          <div className="border border-indigo-600 w-120 h-16 flex items-right gap-4">
            <img className="w-14 h-15" src="/unnamed.png"></img>
            Youtubeのカード
            <br />
            ロゴ
          </div>
        </Link>
        <div className="mt-200"></div>
      </Base>
    </div>
  );
}
