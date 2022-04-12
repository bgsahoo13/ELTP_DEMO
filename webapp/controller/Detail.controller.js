sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/Filter",
      "sap/ui/model/FilterOperator",
      "demolist/lib/moment.min"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator,moment) {
      "use strict";
  
      return Controller.extend("demolist.controller.Detail", {
        onInit: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute("DetailView")
            .attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
          var productId = oEvent.getParameter("arguments").ProductId;
          this.doOperation(productId);
        },
        doOperation(productId){
          var that=this;
          var mProductModel = that.getOwnerComponent().getModel("mProducts");
          var aProducts = mProductModel.getProperty("/ProductCollection");
  
          //write you logic.
          //filter or loop to identify the product details.
          //bind it to one model -> use this model to disply the records in details screen.
          
        },
        onPressNavBack: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("RouteList");
        },
      });
    }
  );
  