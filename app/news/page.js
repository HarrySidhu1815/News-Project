import NewsItems from '@/components/NewsItems'
import { DUMMY_NEWS } from '@/dummy-news'
import React from 'react'

export default function page() {
  return (
    <>
      <h1>News Page</h1>
      <NewsItems news={DUMMY_NEWS}/>
    </>
  )
}
