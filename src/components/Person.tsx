import React from 'react'
import { PersonProps } from './type.types'

const Person = (props:PersonProps) => {
  return (
    <div>{props.name.name}/{props.name.fname}</div>
  )
}

export default Person