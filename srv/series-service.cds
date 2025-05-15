using series.db as series from '../db/schema';

service SeriesService @(requires: 'any') {
    @readonly
    entity tvSeries as projection on series.tvSeries;
}
