"use client";

import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { create } from "domain";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from "./footer";
import Actions from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

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

  const {mutate: onFavorite, pending: pendingFavorite} = useApiMutation(api.board.favorite);
  const {mutate: onUnfavorite, pending:pendingUnfavorite} = useApiMutation(api.board.unfavorite);
  
  const toggleFavorite = ()=>{
    if(isFavorite){
      onUnfavorite({id})
      .catch((err)=>toast.error("Failed to unfavorite"+err));
    }
    else{
      onFavorite({id, orgId})
      .catch((err)=>toast.error("Failed to favorite"+err));
    }
  }

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
            <Actions
            id={id}
            title={title}
            side="right"
            >
              <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
                <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity"/>
              </button>
            </Actions>
        </div>
        <Footer
        isFavorite = {isFavorite}
        title = {title}
        authorLabel = {authorlabel}
        createdAtLabel = {createdAtLabel}
        onClick = {()=>{toggleFavorite();}}
        disabled = {pendingFavorite||pendingUnfavorite}
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
