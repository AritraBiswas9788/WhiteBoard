"use client";
import { LiveblocksProvider } from '@liveblocks/react';
import Canvas from './_components/canvas'
import { useEffect, useState } from 'react';
import Room from '@/components/room';
import Loading from './_components/loading';


interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = (
  { params }: BoardIdPageProps) => {
    const [boardId, setBoardId] = useState<string | null>(null);
    useEffect(() => {
      const unwrapParams = async () => {
        const unwrappedParams = await params;
        setBoardId(unwrappedParams.boardId);
      };
      unwrapParams();
    }, [params]);
  
    if (!boardId) {
      return <div>Loading...</div>;
    }
  
  return (

    <Room roomId={boardId} fallback={<Loading/>}>
    <Canvas boardId={boardId}/>
    </Room>
  )
}

export default BoardIdPage
