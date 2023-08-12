function Film(props) {
  return (
    <div id="FilmList">
      <h3 className="titre">{props.titre}</h3>
      <img className="image" src={props.image}></img>
      <p className="resume">{props.resume}</p>
      <p className="seances">Séances pour 07/05/2023</p>
      {props.seances}
    </div>
  );
}

export default Film;
