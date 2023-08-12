import { useState } from "react";
import "./App.css";
import Film from "./Composant/Film";
import "./Composant/Film.css";

function filmList() {
  let array = [
    {
      titre: "Les gardiens de la galaxie Vol. 3",
      resume:
        "Alors qu'elle s'apprêtait à s'installer à Knowhere, notre bande de marginaux préférée voit son destin bouleversé par les échos du sombre passé de Rocket. Décidé à sauver la vie de son coéquipier, Peter Quill, encore sous le choc de la perte de Gamora, rassemble à nouveau son escouade autour de lui pour une mission dangereuse. Une mission qui, si elle n'est pas menée à bien, pourrait bien conduire à la fin des Gardiens tels que nous les connaissons.",
      seances: (
        <>
          <button id="button">17:35</button>
          <button id="button">19:45</button>
          <button id="button">20:45</button>
          <button id="button">21:25</button>
        </>
      ),
      image:
        "https://www.pathe.fr/media/movie/alex/HO00003236/poster/md/57/movie&uuid=99AD2530-A477-489C-816F-ED47692CCD22",
    },
    {
      titre: "Fast & Furious X",
      resume:
        "Après bien des missions et contre toute attente, Dom Toretto et sa famille ont su déjouer, devancer, surpasser et distancer tous les adversaires qui ont croisé leur route. Ils sont aujourd'hui face à leur ennemi le plus terrifiant et le plus intime : émergeant des brumes du passé, ce revenant assoiffé de vengeance est bien déterminé à décimer la famille en réduisant à néant tout ce à quoi, et surtout à qui Dom ait jamais tenu. Dans FAST 5 en 2011, Dom et son équipe avaient fait tomber l'infâme ponte de la drogue brésilienne, Hernan Reyes, en précipitant son empire du haut d'un pont de Rio De Janeiro. Ils étaient loin de se douter que son fils Dante, avait assisté impuissant à la scène et qu'il avait passé ces douze dernières années à échafauder le plan infernal qui exigerait de Dom un prix ultime. Dante va débusquer et traquer Dom et sa famille aux quatre coins du monde, de Los Angeles aux catacombes de Rome, du Brésil à Londres et de l'Antarctique au Portugal. De nouvelles alliances vont se forger et de vieux ennemis réapparaitre. Mais tout va basculer quand Dom va comprendre que la cible principale de Dante n'est autre que son fils à peine âgé de 8 ans.",
      seances: (
        <>
          <button id="button">17:35</button>
          <button id="button">19:10</button>
          <button id="button">20:20</button>
          <button id="button">22:25</button>
        </>
      ),
      image:
        "https://www.pathe.fr/media/movie/alex/HO00001548/poster/md/129/movie&uuid=FD293659-0B96-48C1-BE83-EBDB7E2CC607",
    },
    {
      titre: "Les trois Mousquetaires : D'Artagnan",
      resume:
        "Du Louvre au Palais de Buckingham, des bas-fonds de Paris au siège de La Rochelle… Dans un Royaume divisé par les guerres de religion et menacé d’invasion par l'Angleterre, une poignée d'hommes et de femmes vont croiser leurs épées et lier leur destin à celui de la France.",
      seances: (
        <>
          <button id="button">19:20</button>
          <button id="button">21:55</button>
        </>
      ),
      image:
        "https://www.pathe.fr/media/movie/alex/HO00003950/poster/md/103/movie&uuid=775CFACF-03ED-4918-BA67-C1EEBE7AEA9B",
    },
    {
      titre: "Pour l'honneur",
      resume:
        "Trocpont-sur-Tescou et Tourtour-les-Bains, deux villages du Sud de la France, se livrent une impitoyable guerre de clochers, symbolisée par un solide derby entre les deux clubs de rugby. Alors que Trocpont a incontestablement pris l'ascendant, l'arrivée inattendue de demandeurs d'asile va changer la donne. Tourtour pourra-t-elle ainsi battre son ennemi juré l'année du derby le plus important de son histoire, celle du centenaire ?",
      seances: (
        <>
          <button id="button">17:05</button>
          <button id="button">19:05</button>
          <button id="button">21:10</button>
        </>
      ),
      image:
        "https://www.pathe.fr/media/movie/alex/HO00005629/poster/md/25/movie&uuid=423DF4AE-EFDE-4247-AF86-23D48FA335B3",
    },
    {
      titre: "La vie pour de vrai",
      resume:
        "Tridan Lagache a passé sa vie au Club Med, à changer d’amis tous les 8 jours. À 50 ans, il démissionne du club de vacances mexicain où il est né, bien décidé à retrouver, 42 ans plus tard, son grand amour d’enfance, Violette. Il débarque à Paris, naïf et perdu mais heureux d’être hébergé chez Louis, un demi-frère dont il ignorait l’existence. Pour se débarrasser d’un Tridan encombrant, Louis supplie une de ses conquêtes, Roxane, de se faire passer pour Violette que Tridan croit reconnaître au premier regard.",
      seances: (
        <>
          <button id="button">19:00</button>
          <button id="button">20:00</button>
          <button id="button">23:05</button>
        </>
      ),
      image:
        "https://www.pathe.fr/media/movie/alex/HO00004608/poster/md/24/movie&uuid=88B5EE82-D7B1-4F65-B15F-06AA15D71686",
    },
  ];

  const MyArray = () => {
    return array.map((item) => {
      return (
        <div>
          <Film
            titre={item.titre}
            image={item.image}
            resume={item.resume}
            seances={item.seances}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="title">
        <img className="photo" src="./public/icon.webp"></img>
        <h1>Mon Cinéma Privé</h1>
      </div>
      <div className="liste">{MyArray()}</div>
    </>
  );
}

export default filmList;
