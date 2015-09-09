import Animal from './Animal';

export default class Cnidarian extends Animal {

  constructor( name, uniCellular, trueNucleus, anaerobic, asexual, mobile, heterotroph ){

    super( name, 'radial', uniCellular, trueNucleus, anaerobic, asexual, mobile, heterotroph );

    this._name = name;

  }

}