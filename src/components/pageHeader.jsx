import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'

export default function PageHeader({ title, description, breadcrumbs = [] }) {
  return (
    <section className='mb-4'>
      <div className='flex items-center gap-1 text-gray-600 text-lg'>
        <Link href='/' className='hover:text-gray-900'>Home</Link>

        {breadcrumbs.map((crumb, index) => (
          <Fragment key={index}>
            <ChevronsRight className='size-5' />
            {crumb.href ? (
              <Link href={crumb.href} className='hover:text-gray-900'>
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </Fragment>
        ))}

        {breadcrumbs.length === 0 && (
          <>
            <ChevronsRight className='size-5' />
            <span>{title}</span>
          </>
        )}
      </div>
      <h1 className='text-3xl font-bold'>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  )
}