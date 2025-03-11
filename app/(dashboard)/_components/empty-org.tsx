import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { OrganizationProfile } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
      src = "/elements.svg"
      alt="Empty"
      height={200}
      width={200}
      />
      <h2 className='text-2xl font-semibold mt-6'>
        Welcome to Inkr
      </h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Create an Organization to get started
      </p>
      <div className='mt-6'>
      <Dialog>
        <DialogTrigger asChild>
            <Button>
                {/* <Plus className="h-4 w-4 mr-2"/> */}
                Create Organization
            </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
          <DialogTitle className="hidden">
            Hi
          </DialogTitle>
            <OrganizationProfile routing='hash'/>
        </DialogContent>
    </Dialog>
      </div>
    </div>
  )
}

export default EmptyOrg;
