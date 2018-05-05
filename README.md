# SingularData.net Data Source

This repository hosts the list of open data sources that are being harvested by [SingularData.net](singulardata.net).

Currently, this list supports following data provider:

* ArcGIS Open Data
* CKAN
* DKAN
* GeoNode
* Junar
* Socrata

## Contribution

You are welcomed to submit a PR to add new data source! The only thing to do is to add a new item in [data/data-sources.json](data/data-sourcse.json):

```javascript
{
  // name of the data source
  "name": "Geospatial Information Clearninghouse",
  // type of the data source (listed above)
  "type": "CKAN",
  // url of the data source
  "url": "http://ckan.gsi.go.jp"
}
```

## Deployment

Once the PR is submitted, the CI will validate the format of the new data source and automatically updated to the S3. The data engine can read the new S3 file and schedule harvesting for the new data source.

## License

MIT
