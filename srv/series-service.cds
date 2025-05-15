using series.db as series from '../db/schema';

service SeriesService @(requires: 'any') {
    @readonly
    entity Series as projection on series.tvSeries;
}
