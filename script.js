var drop=new Vue({
    el:"#drop",
    data:{
        msg:0,
        signal:"green",
        carcount:0,
        carmarked:[],
    },
    methods:{
        moveCar(){
            this.carcount++;

            var data={
                carCount:this.carcount,
                carDuration:this.msg
            };
            
            document.getElementById("carmove").style.left="800px";
            
            setTimeout(()=>{
                document.getElementById("carmove").style.opacity="0";
                
            },200);

            setTimeout(()=>{
                document.getElementById("carmove").style.opacity="0";
                document.getElementById("carmove").style.left="10px";
                
            },300);

            setTimeout(()=>{
                document.getElementById("carmove").style.display="block";
                document.getElementById("carmove").style.opacity="1";
            },500);

            if(this.signal=="red"){
                this.carmarked.push(data);
            }
        },
        start(){
            var flag=0;
            setInterval(()=>{
                this.msg++;
                
                if(this.msg%5==0){
                    flag=1;
                    this.signal=(this.signal=="green")?"red":"green";
                    document.getElementById("greencolor").style.opacity="0.3";
                    document.getElementById("redcolor").style.opacity="0.3";
                    document.getElementById(this.signal+"color").style.opacity="1";
                }
                
                if(flag==0){
                    document.getElementById("greencolor").style.opacity="1";
                }

                console.log(this.signal);

            },1000);

        }
        
    },
    created:()=>{
      
        setInterval(()=>{
            document.getElementById("table").style.display="none";
            document.getElementById("table").style.display="block";
        },100);

    }
});