import { GREETING } from '@/graphql'
import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'

const Home: React.FC = () => {
  const { data, loading, error } = useQuery(GREETING, {
    variables: { name: 'Christian' },
  })

  if (loading) return <div>Loading...</div>
  if (error != null) return <pre>{error.message}</pre>

  console.log(data)
  return <HomeStyle>{data.getGreeting.greeting}</HomeStyle>
}

export const HomeStyle = styled.h1``

export default Home
