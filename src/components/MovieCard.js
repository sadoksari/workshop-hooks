import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Card } from 'react-bootstrap'

class MovieCard extends React.Component {
   constructor(props) {
      super(props) ;
   }

  render () { 
    return (
      <div>           
        <Card style={{ width: '19rem' ,height:"100%" }}>
          
          <Card.Body>
            <Card.Img   src= { this.props.posterUrl} alt={"Image of " }   />
            <Card.Title>  { this.props.title }         </Card.Title>
            <Card.Text>   { this.props.description }   </Card.Text>           
            <Card.Text>   { this.props.rate     }      </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ) 
  }

}

export default MovieCard ;