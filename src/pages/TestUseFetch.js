import React from 'react'
import { UseFetch } from '../custom-hooks'

function TestUseFetch() {
  const { loading, data, error } = UseFetch(
    'https://hn.algolia.com/api/v1/search?query=react'
  )
  if (loading) return <p>loading</p>
  if (error) return <p>error</p>
  return (
    <div>
      <ul>
        {data?.hits?.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestUseFetch
