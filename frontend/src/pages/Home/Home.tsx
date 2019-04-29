import * as React from 'react';

import Style from './Home.style';
import Pokemon from 'components/Pokemon/Pokemon';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
          pokemons !
        </div>
        <Pokemon name="squirtle" id={7} />
        <Pokemon name="pikachu" id={25} />
        <Pokemon name="raticate" id={20} />
      </Style.Intro>
    );
  }
}

export default Home;
