import joueurs from "./joueurs";
import Joueur from "./Joueur";

import React from 'react'

function PlayersList() {
  return joueurs.map((joueur, index)=><Joueur key={index}{...joueur}/>);
  
  
}

export default PlayersList