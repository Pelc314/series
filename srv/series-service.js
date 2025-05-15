const cds = require('@sap/cds');

class SeriesService extends cds.ApplicationService {
    async init() {
        const { tvSeries } = this.entities;

        // Insert 4 sample series if table is empty
        // const existing = await SELECT.one.from(tvSeries);
        // if (!existing) {
        //     await INSERT.into(tvSeries).entries([
        //         { ID: 1, title: 'Breaking Bad', episodeCount: 62, genre: 'Crime', runningPeriod: '2008-2013' },
        //         { ID: 2, title: 'Stranger Things', episodeCount: 34, genre: 'Sci-Fi', runningPeriod: '2016-' },
        //         { ID: 3, title: 'Game of Thrones', episodeCount: 73, genre: 'Fantasy', runningPeriod: '2011-2019' },
        //         { ID: 4, title: 'The Office', episodeCount: 201, genre: 'Comedy', runningPeriod: '2005-2013' }
        //     ]);
        // }

        console.log('test');
        this.on('READ', tvSeries, async (req) => {
            const series = await SELECT.from(tvSeries);
            return series;
        });
        this.on('CREATE', tvSeries, async (req) => {
            const newSeries = req.data;
            await INSERT.into(tvSeries).entries(newSeries);
            return newSeries;
        });
        this.on('UPDATE', tvSeries, async (req) => {
            const updatedSeries = req.data;
            await UPDATE(tvSeries).set(updatedSeries).where({ ID: req.params[0].ID });
            return updatedSeries;
        });
        this.on('DELETE', tvSeries, async (req) => {
            await DELETE.from(tvSeries).where({ ID: req.params[0].ID });
            return { message: 'Deleted successfully' };
        });

        await super.init();
    }
}
module.exports = SeriesService;