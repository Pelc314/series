sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("hcr.series.controller.SeriesView", {
        onInit() {
               const aSeries = [
                {
                    seriesName: "Breaking Bad",
                    author: "Vince Gilligan",
                    numEpisodes: 62,
                    yearsOfEmission: "2008-2013"
                },
                {
                    seriesName: "Stranger Things",
                    author: "The Duffer Brothers",
                    numEpisodes: 34,
                    yearsOfEmission: "2016-2025"
                },
                {
                    seriesName: "Game of Thrones",
                    author: "David Benioff & D. B. Weiss",
                    numEpisodes: 73,
                    yearsOfEmission: "2011-2019"
                }
            ];

            // Create and set the model
            const oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({
                tvSeries: aSeries
            });
            const oView = this.getView();
            if (oView) {
                oView.setModel(oModel, "tvSeries");
            }
        }
    });
});