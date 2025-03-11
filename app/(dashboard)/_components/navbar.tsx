"use client";

import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

export const Navbar = () => {   
    return (
        <div className="flex items-center gap-x-5 p-5 bg-green-500">
            <div className="hidden lg:flex lg:flex-1">
            </div>
            <UserButton />
        </div>
    );
}