import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

  const  Overview = ({ movie }) => {
    console.log(movie)

    const {Poster,Genre,Actors,Plot,Awards,Writer,Released, Language} = movie
      
    console.log(Poster,Genre,Actors)
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>View More</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
           <div className="summary">Summary</div>
            <div className="plot">{Plot} <em> Written by {Writer}</em></div>
             <div> <span>Award</span> : {Awards}</div>
             <div> <span>Writer</span> : {Writer}</div>
             <div> <span>Released</span> : {Released}</div>
             <div> <span>Language</span> : {Language}</div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Overview;

// Collapse.propTypes = {
//     ...Transition.propTypes, // see note below
//     isOpen: PropTypes.bool,
//     children: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.node),
//       PropTypes.node
//     ]),
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     className: PropTypes.node,
//     navbar: PropTypes.bool,
//     cssModule: PropTypes.object,
//     innerRef: PropTypes.object,
//   };