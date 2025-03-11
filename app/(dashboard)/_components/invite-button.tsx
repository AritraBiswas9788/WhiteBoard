import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { OrganizationProfile } from '@clerk/nextjs';
import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Plus } from 'lucide-react';
import React from 'react'


export const InviteButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">
                <Plus className="h-4 w-4 mr-2"/>
                Invite members
            </Button>

        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
          <DialogTitle className="hidden">
            Hi
          </DialogTitle>
            <OrganizationProfile routing='hash'/>
        </DialogContent>
    </Dialog>
  )
};


