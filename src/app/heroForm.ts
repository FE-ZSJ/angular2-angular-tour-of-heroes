/**
 * Created by zhusujuan on 2017/3/23.
 */
export class HeroForm{
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}

// let myHero = new HeroForm(24, 'sujuan', 'ue', 'susu');
// console.log('My hero is called' + myHero.name);

