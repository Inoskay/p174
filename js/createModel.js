AFRAME.registerComponent("createmodels", {
//create init function 
init: async function(){
  var models = await this.getModels()
  var barcodes = Object.keys(models)
  barcodes.map(barcode => {
    var model = models[barcode]
    this.createModel(model)
  })
},


  getModels: function() {
    return fetch("js/models.json")
      .then(res => res.json())
      .then(data => data);
  },
  createModel: function(model) {

  }
   //add the code
});
