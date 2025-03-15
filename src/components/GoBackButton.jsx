'use client'
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React, { Component } from 'react'

export class GoBackButton extends Component {
  render() {
    return (
      <Link
        className='flex items-center text-lg'
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}>
        <ChevronLeft />
        Go Back</Link>
    )
  }
}

