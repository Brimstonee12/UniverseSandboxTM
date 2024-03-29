import React, { Component } from 'react'
import { Jumbotron,Container,Media,Image } from 'react-bootstrap';
import './News.css';
import NewsData from './NewsData'
import {Link} from 'react-router-dom';


class News extends Component {
  render(){
    const NewsComponents = NewsData.map(comp => <CardNews key={comp.title}
       date ={comp.date} link={comp.link} img={comp.img} title={comp.title} content={comp.content} />)

    return(
      <Container>
        <Jumbotron>
          <h2>Welcome to Universe Sandbox TM</h2>
          <br/>
          <h4>Quick Info of what you can find here:</h4>
          <h4>News Section: News from science world</h4>
          <h4>Wikipedia Section: Wiki about our Solar System,science you can also find there Rankings(TOP lists) etc. </h4>
          <h4>SandBox: Not added yet</h4>
          <h4>For more specific info go to the contact section</h4>
          <p>This site is <a>NOT ACTIVE</a> so news wont be updated</p>
        </Jumbotron>

        <h2> News From Science World </h2>
        <br/>
        {NewsComponents}
      </Container>
    )
  }
}


const CardNews = (props) => {
  return (
    <>
  <div className="news-card">
  <Link to={props.link}>
    <Media className="media">
      <Image className="mr-3" alt="" src={props.img}></Image>
      <Media.Body className="media-body">
        <p className="news-date">{props.date}</p>
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </Media.Body>
    </Media>
  </Link>
  </div>
  <br/>
  </>
)
}

const NewsDetailProps = props => {
  return(
    <>
      <p className="news-date">{props.date}</p>
      <h1>{props.title}</h1>
      <br/>
      <h4>{props.content_1}</h4>
      <Image src={props.img_1} alt="" fluid/>
      <h4>{props.content_2}</h4>
      <br/>
      <h4>{props.content_3}</h4>
      <Image src={props.img_2} alt="" fluid/>
      <h4>{props.content_4}</h4>
      <br/>
      <h4>{props.content_5}</h4>
      <br/>
      <h4>{props.content_6}</h4>
    </>
  )
}





export {News,NewsDetailProps}
