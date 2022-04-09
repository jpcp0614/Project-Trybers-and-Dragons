import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monsters: Fighter[] | SimpleFighter[],
  ) {
    super(_player);
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      for (
        let i = 0;
        this._player.lifePoints > 0 && monster.lifePoints > 0;
        i += 1
      ) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });

    return super.fight();
  }
}