import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FeatureProject from '../components/FeatureProject'
import Skill from '../components/Skill'
import WorkExperience from '../components/WorkExperience'
import Card from '../components/Card'
import OpenSourceWork from '../components/OpenSourceWork'
import ClientFeedback from '../components/ClientFeedback'
import FromTheBlog from '../components/FromTheBlog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <FeatureProject/>
    <Skill/>
    <WorkExperience/>
    <Card/>
    <OpenSourceWork/>
    <ClientFeedback/>
    <FromTheBlog/>
    <Footer/>
    </>
  )
}

export default Home