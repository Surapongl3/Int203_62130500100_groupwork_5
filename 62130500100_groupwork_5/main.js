const app = Vue.createApp({
    data() {
        return {
            cars: [ {id:1,img:'./images/car1.jpg',liked:false,hover:false,names :"Ferrari"},
                    {id:2,img:'./images/car2.jpg',liked:false,hover:false,names : "Audi"},
                    {id:3,img:'./images/car3.jpg',liked:false,hover:false,names :"Subaru"}   
                 
                ] , 
            backupcar: [],
            search :  {text:false, icon : true},
            searchtext :"",
            noResult :   false,
            isShowCar : false,
            showCarSrc: "",
            
        }
       
    },
    beforeMount(){
        this.backupcar = [...this.cars];
    },
     methods : {
            hovers : function (i) {
             
                this.cars[i].hover = true
                
            },
            
            click :  function(i){
               {
                  this.cars[i].liked = !this.cars[i].liked
                 
               
            }

        },
              hoversOff : function(i){
                if(this.cars[i].liked == false)
                    this.cars[i].hover = false
                    
                
              },
              toggleicons : function(){
                  this.search.text = !this.search.text;
                  this.search.icon = !this.search.icon;
             
                
              },checkResult : function(){
              if( this.cars.length == 0)
              return false;
                  
                 
             },
             showCar : function( src){
                this.isShowCar = true;
                this.showCarSrc = src;
                console.log(this.isShowCar);
                
             },
             araigordai : function(i){
                this.searchtext = i
             }
              
             
},
    computed : {
            checkLiked : function(){
             return  this.liked = this.cars.filter(x => x.liked).length
                 
                    
            }
        },
   watch : {    
             searchtext : function(){
              
                 let query = this.searchtext.toLowerCase();
               this.cars = this.backupcar.filter(item => item.names.toLowerCase().search(query) > -1)
                this.noResult = this.cars.length == 0
               
             }
   }
}  )
