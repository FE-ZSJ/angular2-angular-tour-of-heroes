/**
 * Created by zhusujuan on 2017/2/16.
 */
export class Hero{//一个实体类
  id: number;
  name: string;

  constructor(//声明一个构造函数及其类型
    public uid: number,
    public detail: string
  ) {}
}
