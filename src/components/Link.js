import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        Name: {link.name}
      </div>
      <div>
        Company: {link.company}
      </div>
      <div>
        Precio: {link.precio}
      </div>
      <div>
        Country: {link.country}
      </div>
      <div>
        Calificacion: {link.calificacion}
      </div>
      <div>
        Dispositivo: {link.dispositivo}
      </div>
      <div>
        Dificultad: {link.dificultad}
      </div>
      <div>
        Categoria: {link.categoria}
      </div>
      <div>
        Version: {link.version}
      </div>
      <div>
        Image: {link.image}
      </div>
      <div>
      <br />
      </div>
    </div>
  );
};

export default Link;
