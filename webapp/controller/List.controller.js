sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "demolist/lib/moment.min",
    "sap/m/MessageBox"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,Filter,FilterOperator,momentjs,MessageBox) {
    "use strict";

    return Controller.extend("demolist.controller.List", {
      onInit: function () {

      },
      onSearchList: function (oEvent) {
        var sVal = oEvent.getSource().getValue(),
        oBinding = this.byId("idList").getBinding("items"),
         oFilter;
        if (sVal || sVal === "") {
          oFilter = new Filter("SupplierName",FilterOperator.Contains , sVal);
          oBinding.filter([oFilter]);
        }
      },
      onPressNext: function(){
          var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("DetailView",{ProductId:"0"});          
      },
      onPressProduct: function(oEvent){
           var that=this;
           var sSelectedProduct = oEvent.getSource().getBindingContext("mProducts").getObject();
           var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
           oRouter.navTo("DetailView",{ProductId:  sSelectedProduct.ProductId });  
      },
      onPressDateTime: function() {

        var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

        MessageBox.show(dateTime);



    }
    });
  }
);
