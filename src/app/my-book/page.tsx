import { Heading, Paragraph } from "@/components/ui/typography";

export default function Page() {
  return (
    <main className="flex justify-center items-center w-full flex-col">
      <section className="max-w-4xl w-full pt-24 pb-14">
        <div>
          <Heading as="h2">My Book</Heading>
          <Paragraph>
            Berikut daftar jasa armada yang telah kamu pesan
          </Paragraph>
        </div>
        <div className="grid grid-cols-3 grid-rows-1"></div>
      </section>
    </main>
  );
}
