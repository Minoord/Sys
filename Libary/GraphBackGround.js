class GraphBackGround{
    constructor(){
        this.alpha = 0.3;
    }

    draw(){ 
        for(let i=0; i<width;i++){
            if(i%30 == 0){
                if(i%100 == 0){
                    context.lineWidth = "5"
                }else{
                    context.lineWidth = "1";
                }
                context.strokeStyle = "rgba(0,0,0," + this.alpha + ")";
            
            context.beginPath();
            context.moveTo(0,i);
            context.lineTo(width,i);
            context.moveTo(i,0);
            context.lineTo(i,height);
            context.closePath();
            context.stroke();
        
            }
        }
    }
}