"use client";

import { Heading, Paragraph } from "@/components/ui/typography";

export default function Page() {
  return (
    <main className="flex justify-center items-center w-full flex-col">
      <section className="w-full flex justify-center items-center flex-col max-w-4xl">
        <Heading as="h3">500 Server Error!</Heading>
        <Paragraph>Sepertinya ada yang salah di sisi server!</Paragraph>
      </section>
    </main>
  );
}
