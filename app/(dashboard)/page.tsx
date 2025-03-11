"use client";

import { Button } from "@/components/ui/button";
import { useOrganization, UserButton } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const DashboardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();
  const [params, setParams] = useState({ search: "", favorites: "" });

  useEffect(() => {
    setParams({
      search: searchParams.get("search") || "",
      favorites: searchParams.get("favorites") || "",
    });
  }, [searchParams]);

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {/* {JSON.stringify(params)} */}
      {!organization ? (<EmptyOrg />) : (
        <BoardList
          orgId = {organization.id}
          query = {params}
        />
      )}
    </div>
  );
}

export default DashboardPage;