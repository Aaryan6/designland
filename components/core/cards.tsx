'use client';

import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { MessageSquare } from 'lucide-react';

export default function ChatBotHorizontalCards() {
  return (
    <Card
      className={cn(
        'relative flex h-[150px] max-w-[400px] cursor-pointer flex-row rounded-xl border-muted bg-background/90 hover:bg-background/80'
      )}
    >
      <CardHeader className='relative w-full max-w-[10rem] p-2'>
        <Image
          width={500}
          height={500}
          src={'/lamp.jpg'}
          alt={'Lamp'}
          className='h-full w-full rounded-lg object-cover'
        />
      </CardHeader>
      <CardContent className='z-30 flex-1 p-4 px-4'>
        <div className='flex items-start justify-between'>
          <CardTitle className='text-lg font-medium'>Jarvis Bro</CardTitle>
          <div className='flex shrink-0 items-center gap-1 text-sm'>
            <MessageSquare className='h-4 w-4' />
            <span>123</span>
          </div>
        </div>
        <p className='mb-2 text-sm text-muted-foreground'>agent</p>
        <p className='line-clamp-3 text-sm text-foreground/80'>
          Jarvis is a chatbot that can help you with your daily tasks.
        </p>
      </CardContent>
    </Card>
  );
}
