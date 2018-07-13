import React from 'react';

const DogCards = props => {
    return (
        <div className="card col-xs-12 col-sm-6 col-md-4" key={props.id}>
            <img className="card-img-top" src={props.imageUrl} alt={props.name}></img>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <a href="#" className="btn btn-primary">{props.imageCaption}</a>
            </div>
          </div>
    )
}

export default DogCards;