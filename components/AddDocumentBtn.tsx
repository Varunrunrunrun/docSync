"use client";

import { createDocument } from "@/lib/actions/room.actions";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "./Loader";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const addDocumentHandler = async () => {
    setLoader(true);
    try {
      const room = await createDocument({ userId, email });

      if (room) {
        setLoader(false);
        router.push(`/documents/${room.id}`);
      }
    } catch (error) {
      setLoader(false);

      console.log(error);
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Button
          type="submit"
          onClick={addDocumentHandler}
          className="gradient-blue flex gap-1 shadow-md"
        >
          <Image src="/assets/icons/add.svg" alt="add" width={24} height={24} />
          <p className="hidden sm:block">Start a blank document</p>
        </Button>
      )}
    </>
  );
};

export default AddDocumentBtn;
