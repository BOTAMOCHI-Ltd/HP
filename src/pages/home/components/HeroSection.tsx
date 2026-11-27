export default function HeroSection() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="w-full">
        <img
          src={`${import.meta.env.BASE_URL}images/compressed_-LINE_-1-dc5a0a.webp`}
          alt="記帳コンシェルジュ"
          className="w-full h-auto md:max-w-3xl md:mx-auto block"
        />
      </div>
    </section>
  );
}
