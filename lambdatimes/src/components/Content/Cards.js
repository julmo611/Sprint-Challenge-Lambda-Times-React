import React from 'react';
import Card from './Card';
import uuidv4 from 'uuid'
import PropTypes from 'prop-types';



const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map( card => { return <Card key={uuidv4()}  card={card} />
            })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
}

// Make sure you include prop types for all of your incoming props

export default Cards;