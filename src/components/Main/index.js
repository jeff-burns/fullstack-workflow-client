import React from 'react';

import DogCards from '../DogCards/index';

const Main = props => {
    const dogSections = props.dogs.map(dog => {
        return (
            <DogCards 
            
                id={dog.id} 
                imageUrl={dog.imageUrl}
                name={dog.name}
                description={dog.description}
                imageCaption={dog.imageCaption}
            
            />
          
        )
      })
    return (
        <main className="container">
          <section className="row">
          {dogSections}
          </section>
        </main>
    )
}

export default Main;