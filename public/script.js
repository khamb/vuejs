new Vue({
  el: "#app",
  data: {
    total: 0,
    items: [
      {id: 1, title: "Item 1"},
      {id: 2, title: "Item 2"},
      {id: 3, title: "Item 3"},
      {id: 4, title: "Item 4"}
    ],
    cart: [],
    search: ""
  },
  methods:{
    addItem: function(index){

      var tmp = this.items[index];
      var pushed= false;
      var item = {
        id: tmp.id,
        title: tmp.title,
        qty: 1
      };

      for (var i = 0; i < this.cart.length; i++) {
        if(this.cart[i].id === item.id){
          pushed = true;
          this.cart[i].qty++;
          break;
        }
      }

      if(!pushed){
        this.cart.push(item);
      }

      this.total+=9.99;



    },

    inc: function(item) {
        item.qty++;
        this.total+=9.99;
    },

    dec: function (item) {
      item.qty--;
      this.total-=9.99;
      if(item.qty<=0){
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            this.cart.splice(i,1);
          }
        }
      }
    },

    onSubmit: function(){
      console.log("Submitted!");
    }

  },
  filters:{
    currency: function(tmp){
      return "$".concat(tmp.toFixed(2));
    }
  }
});
