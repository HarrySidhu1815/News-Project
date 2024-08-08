import NewsItems from '@/components/NewsItems'
import { getLatestNews } from '@/lib/news'
import React from 'react'

export default async function LatestPage() {
  const latestNews = await getLatestNews()
  return (
      <NewsItems news={latestNews} />
  )
}
