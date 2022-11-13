export default class Time{
    constructor(){
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;

        this.update();
    }

    update(){

        //left on video time 2:13:04 
        window.requestAnimationFrame(()=> this.update);
    }
}