import React from 'react';

import Card from 'react-bootstrap/Card';

import img2 from '../../../Assets/img2.jpg';
import img3 from '../../../Assets/img3.jpg';
import img4 from '../../../Assets/img4.jpg';
import img5 from '../../../Assets/img5.jpg';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <button>Quick View</button>
     
      <Card.Body>
        <Card.Title>Aura Contour Jacket</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Sama manufacturer as</Card.Subtitle>
        <Card.Text>Vikebrequin  Stella McCartney</Card.Text>
        <Card.Text>$58</Card.Text>
        <Card.Subtitle className='mb-2 text-muted'>2 COLORS</Card.Subtitle>

      </Card.Body>

      <Card.Img variant="top" src={img3}/>
      <button>Quick View</button>
      <Card.Body>
        <Card.Title>Aura Active Sports Tank</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Sama manufacturer as</Card.Subtitle>
        <Card.Text>Vikebrequin  Stella McCartney</Card.Text>
        <Card.Text>$58</Card.Text>
        <Card.Subtitle className='mb-2 text-muted'>1 COLORS</Card.Subtitle>
      </Card.Body>

      <Card.Img variant="top" src={img4} />
      <button>Quick View</button>
      <Card.Body>
        <Card.Title>Aura Active Bodysuir</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Sama manufacturer as</Card.Subtitle>
        <Card.Text>Vikebrequin  Stella McCartney</Card.Text>
        <Card.Text>$58</Card.Text>
        <Card.Subtitle className='mb-2 text-muted'>2 COLORS</Card.Subtitle>
      </Card.Body>

      <Card.Img variant="top" src={img5} />
      <button>Quick View</button>
      <Card.Body>
        <Card.Title>Aura Racerback Sports Bra</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Sama manufacturer as</Card.Subtitle>
        <Card.Text>Vikebrequin  Stella McCartney</Card.Text>
        <Card.Text>$58</Card.Text>
        <Card.Subtitle className='mb-2 text-muted'>4 COLORS</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Cards;