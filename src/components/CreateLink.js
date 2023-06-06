import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation(
    $name: String!
    $company: String!
    $precio: String!
    $country: String!
    $calificacion: Int!
    $dispositivo: String!
    $dificultad: String!
    $categoria: String!
    $version: String!
    $image: String!
  ) {
    createLink(
      name: $name
      company: $company
      precio: $precio
      country: $country
      calificacion: $calificacion
      dispositivo: $dispositivo
      dificultad: $dificultad
      categoria: $categoria
      version: $version
      image: $image
    ) {
      id
      name
      company
      precio
      country
      calificacion
      dispositivo
      dificultad
      categoria
      version
      image
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    company: '',
    precio: '',
    country: '',
    calificacion: 0,
    dispositivo: '',
    dificultad: '',
    categoria: '',
    version: '',
    image: '',
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      name: formState.name,
      company: formState.company,
      precio: formState.precio,
      country: formState.country,
      calificacion: formState.calificacion,
      dispositivo: formState.dispositivo,
      dificultad: formState.dificultad,
      categoria: formState.categoria,
      version: formState.version,
      image: formState.image,
    },
    onCompleted: () => navigate('/'),
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            placeholder="Name"
          />
          <input
            className="mb2"
            value={formState.company}
            onChange={(e) =>
              setFormState({
                ...formState,
                company: e.target.value,
              })
            }
            type="text"
            placeholder="Company"
          />
          <input
            className="mb2"
            value={formState.precio}
            onChange={(e) =>
              setFormState({
                ...formState,
                precio: e.target.value,
              })
            }
            type="text"
            placeholder="Precio"
          />
          <input
            className="mb2"
            value={formState.country}
            onChange={(e) =>
              setFormState({
                ...formState,
                country: e.target.value,
              })
            }
            type="text"
            placeholder="Country"
          />
          <input
            className="mb2"
            value={formState.calificacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                calificacion: parseInt(e.target.value),
              })
            }
            type="number"
            placeholder="Calificacion"
          />
          <input
            className="mb2"
            value={formState.dispositivo}
            onChange={(e) =>
              setFormState({
                ...formState,
                dispositivo: e.target.value,
              })
            }
            type="text"
            placeholder="Dispositivo"
          />
          <input
            className="mb2"
            value={formState.dificultad}
            onChange={(e) =>
              setFormState({
                ...formState,
                dificultad: e.target.value,
              })
            }
            type="text"
            placeholder="Dificultad"
          />
          <input
            className="mb2"
            value={formState.categoria}
            onChange={(e) =>
              setFormState({
                ...formState,
                categoria: e.target.value,
              })
            }
            type="text"
            placeholder="Categoria"
          />
          <input
            className="mb2"
            value={formState.version}
            onChange={(e) =>
              setFormState({
                ...formState,
                version: e.target.value,
              })
            }
            type="text"
            placeholder="Version"
          />
          <input
            className="mb2"
            value={formState.image}
            onChange={(e) =>
              setFormState({
                ...formState,
                image: e.target.value,
              })
            }
            type="text"
            placeholder="Image URL"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;