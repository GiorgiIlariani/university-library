import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="w-dull rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a new Book
          </Link>
        </Button>
      </div>
      <div children="mt-7 w-full overflow-hidden"></div>
    </section>
  );
};

export default Page;
