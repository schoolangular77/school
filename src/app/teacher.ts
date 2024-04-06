export class Teacher{

    constructor(
        public id:number=0,
        public fullname:string="",
        public hint:string="",
        public certification:string[]=[],
        public experiences:string[]=[],
        public stages:string[]=[],
        public email:String=""
    ){}
}