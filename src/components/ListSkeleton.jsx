import React from 'react'
import { Fragment } from 'react'
import { Skeleton } from './ui/skeleton'
import { SITE } from '@/config'

export default function ListSkeleton() {
  return (
    <div>
      {Array.from({ length: SITE.postPerPage }).map((_, index) => (
        <Fragment key={index}>
          <Skeleton className='w-1/2 h-4 mb-2' />
        </Fragment>
      ))}
    </div>
  )
}
