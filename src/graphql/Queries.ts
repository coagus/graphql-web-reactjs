import { gql } from '@apollo/client'

export const GREETING = gql`
  query getGreeting($name: String) {
    getGreeting(name: $name) {
      result {
        successful
        message
        error
      }
      greeting
    }
  }
`
