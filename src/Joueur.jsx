import Card from 'react-bootstrap/Card';

function Joueur({nom, equipe, nationalite, numeroMaillot, age, imageUrl }) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{nom}</Card.Title>
      <Card.Title>equipe: {equipe}</Card.Title>
      <Card.Title> nationalite: {nationalite}</Card.Title>
      <Card.Title>numeroMaillot: {numeroMaillot}</Card.Title>
      <Card.Title>age: {age}</Card.Title>
   
     
    </Card.Body>
  </Card></div>
  )
}

export default Joueur