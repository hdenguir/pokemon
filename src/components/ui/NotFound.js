import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="jumbotron">
    <h1 className="display-4">Page ou fichier introuvable!</h1>
    <p className="lead">lorem</p>
    <hr className="my-4" />
    <Link className="btn btn-primary btn-lg" to="/" role="button">
      Stay At Home
    </Link>
  </div>
);
export default NotFound;
