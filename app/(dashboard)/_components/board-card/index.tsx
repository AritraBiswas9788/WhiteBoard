"use client";

import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { create } from "domain";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from "./footer";

interface BoardProps {
    id:string;
    title:string;
    authorName: string;
    authorId:string;
    createdAt:number;
    imageUrl:string;
    orgId: string;
    isFavorite: boolean;
}

const BoardCard = (
    {
        id,
        title,
        authorName,
        authorId,
        createdAt,
        imageUrl,
        orgId,
        isFavorite
    }:BoardProps
) => {

  const { userId } = useAuth();

  const authorlabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt,{
    addSuffix:true
  })

  
  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
            <Image
            src ={imageUrl}
            alt = {title}
            fill
            className="object-fit"
            />
            <Overlay/>
        </div>
        <Footer
        isFavorite = {isFavorite}
        title = {title}
        authorLabel = {authorlabel}
        createdAtLabel = {createdAtLabel}
        onClick = {()=>{}}
        disabled = {false}
        />
      </div>
    </Link>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton(){
  return(
    <div className="aspect-[100/127] rounded-lg justify-between overflow-hidden">
    <Skeleton className="h-full w-full"/>
    </div>
  )
}
