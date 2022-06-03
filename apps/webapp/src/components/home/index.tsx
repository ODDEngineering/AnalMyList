import { Message } from '@anal-my-list/api-interfaces'
import React from 'react'

export const Home = (): JSX.Element => {
  const [m, setMessage] = React.useState<Message>({ message: '' })

  React.useEffect(() => {
    fetch('/api/')
      .then((r) => r.json())
      .then(setMessage)
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Anal My List</h1>
      <h2>An app for analyzing your personality based on your playlist</h2>
      <div>{m.message}</div>
    </div>
  )
}
