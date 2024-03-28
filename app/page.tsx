import AImageMakerToolPro from "./AImageMakerToolPro/page";
// import AISNSImageMaker from "./features/ai-sns-image-maker/components/AISNSImageMaker";

//shincodeinc@gmail.com

export default function Home() {
  return (
    <main style={{ minHeight: "calc(100vh - 69px)" }}>
      {/* ホーム画面はMVPリリースした後に追加 */}
      {/* ./でまずはSNSアイコンメーカーを作成 */}
      {/* <AISNSImageMaker /> */}
      <AImageMakerToolPro />
    </main>
  );
}
