"use client";

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id!,
      title: "Untitled"
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch((err) => {
        toast.error("Failed to create board" + err.message);
      })
  }

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image
        src="/note.svg"
        alt="Empty"
        height={110}
        width={110}
      />
      <h2 className='text-2xl font-semibold mt-6'>Create your First Board</h2>
      <p className='text-muted-foreground text-sm mt-2'>Start by creating a board for your organization</p>
      <div className='mt-6'>
        <Button
          disabled={pending}
          onClick={onClick}
          size="lg">
          Create Board
        </Button>
      </div>
    </div>
  )
}

