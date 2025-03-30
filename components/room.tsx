"use client";

import { ReactNode } from "react";
import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react";
import { RoomProvider } from "@liveblocks/react";

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null
}

const Room = ({ children, roomId, fallback }: RoomProps) => {
    return (
        <LiveblocksProvider 
        //publicApiKey={"pk_dev_ktCLcKE7kFFP7IsqWpvfOLl6_aiD2TUO8PQ4BW0bUQHNt8g6jcb05-cN2_OkBh_n"}
        authEndpoint="/api/liveblocks-auth"
        >
            <RoomProvider id={roomId} initialPresence={{}}>
                <ClientSideSuspense fallback={fallback}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}

export default Room;
