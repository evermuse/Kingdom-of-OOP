import Eukaryota from './Eukaryota';

export default class Protista extends Eukaryota {

  constructor( name, uniCellular, mobile, heterotoph ){

    super( name, uniCellular, true, mobile, heterotoph );

    this._name = name;

  }

}