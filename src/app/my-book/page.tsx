import Image from "next/image";

export default function Page() {
  return (
    <main className="flex justify-center items-center w-full flex-col">
      <section className="max-w-7xl">
        <Image src="/" alt="vehicle" width={200} height={200} />
        <div>
          <span>Nama</span>
          <span>Harga</span>
        </div>
      </section>
    </main>
  );
}
