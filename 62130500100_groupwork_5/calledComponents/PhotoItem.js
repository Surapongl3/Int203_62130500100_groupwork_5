app.component('click-star-text', {
    props :{
        count : {
            type : Object
        }
    },
    /*html*/
 template: ` <div v-if="count==0" class="text mt-4">
                    Click Star to like!
                    </div>
            <div v-else class="text mt-4">
                    You like {{ count }} Photos !!
                </div>     
               `
})


app.component('car-image',{
    props :{
        carobj :{
            type : Array
        }
  
    },
    /*html*/
    template: `  <div class="flex flex-row space-x-10 mt-10 justify-center">
                      <div v-for="(car,index) in carobj">
                          <div id="container" @mouseover="this.$emit('hov',index)" @mouseleave="this.$emit('hovoff',index)" 
                            class=" h-96 w-96 overflow-hidden">  
                            <div id="starcontainer" @click="this.$emit('toggle',index)" v-show="car.hover">
                              <div v-if="car.liked == false  " class="material-icons absolute mt-2 ml-2 z-10 cursor-pointer 
                                     focus:bg-gray-800">
                                        star_outline
                              </div>
                              <div v-else class="material-icons absolute mt-2 ml-2  cursor-pointer z-20 ">
                                    star
                                </div>
                            </div>
                            <img @click="this.$emit('showc',car.img)"v-bind:src="car.img" class="hover:opacity-75 z-0 ">
                            {{carobj[index].names}}
                            
                         </div>  
                      </div>
                  </div> 
                `
})



