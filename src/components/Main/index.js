import React from 'react';

const Main = props => {
    const dogSections = props.dogs.map(prop => {
        return (
          <div className="card col-xs-12 col-sm-6 col-md-4" key={prop.id}>
            <img className="card-img-top" src={prop.imageUrl} alt={prop.name}></img>
            <div className="card-body">
              <h5 className="card-title">{prop.name}</h5>
              <p className="card-text">{prop.description}</p>
              <a href="#" className="btn btn-primary">{prop.imageCaption}</a>
            </div>
          </div>
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