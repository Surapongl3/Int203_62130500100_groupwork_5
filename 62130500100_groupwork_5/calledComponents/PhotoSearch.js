app.component('sbox',{
   props : {
       result : {
           type : Boolean
       },
       stext: {
           type : Boolean
       },
      sicon: {
          type :Boolean
      }
      
   },
    /*html*/
    template : 
                ` 
                <div class="flex flex-row justify-center  ml-40 mt-5 text-xl">
                  <div id="icon toggle" v-show="stext ">
                   <input @keyup="model"v-model="searchtext" type=text placeholder="Please enter text for searching photos" size="34"
                     class="textinput ">
                   </div>
                   <a href="#" @click="this.$emit('icont')" v-show="sicon">
                        <i class="material-icons  icon ">
                            search
                        </i>
                    </a>
                        <button class="bg-yellow-300 icon" v-show="sicon == false" @click="this.$emit('icont')">
                                     cancel
                        </button>
                </div>
                    
                
                    <div class="text-center" v-show ="result">
                     'No photo'
                    </div>  
                `,
                data(){
                   
                    return{
                        searchtext:''
                    }
                },
                methods : {
                    model : function(){
                        this.$emit('mod',this.searchtext)
                    }
                }
        
})