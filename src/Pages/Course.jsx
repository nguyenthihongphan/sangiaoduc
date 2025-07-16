import React from 'react'
import { Popular } from '../Components/Popular/Popular'
import { Banner } from '../Components/Banner/Banner'
import { Partners } from '../Components/Partners/Partners'
import { Experience } from '../Components/Experience/Experience'
import { Statistical } from '../Components/Statistical/Statistical'
import { Comment } from '../Components/Comment/Comment'
import { Info } from '../Components/Info/Info'

export const Course = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Popular></Popular>
      <Experience></Experience>
      <Statistical></Statistical>
      <Partners></Partners>
      <Comment></Comment>
    </div>
  )
}
