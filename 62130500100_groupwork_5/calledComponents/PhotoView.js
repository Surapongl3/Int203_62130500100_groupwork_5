app.component('show-image',{
    props:['showcarsrc'],
    /*html*/
    template : 
                ` <div class="bg-black   w-screen h-screen flex flex-row-reverse justify-center " >
                  <i @click="this.$emit('isshow')" class="material-icons cursor-pointer mt-10 clear">
                    
                    clear

                    </i>
            
           
                     <img  v-bind:src="showcarsrc "class="w-2/3 h-5/6 pt-24  " >
                 </div>
               
                `
        
})