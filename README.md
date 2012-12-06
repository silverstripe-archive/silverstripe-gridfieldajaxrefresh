GridFieldAjaxRefresh
=================

Adds the ability to either automatically or manually refresh a SilverStripe GridField

## Requirements
* SilverStripe 3.0

## Installation
* Download the module from here https://github.com/silverstripe-labs/silverstripe-gridfieldajaxrefresh
* Extract the downloaded archive into your site root so that the destination folder is called gridfieldajaxrefresh
* Run dev/build?flush=all

## Usage
To enable the refresh, add the component to the GridField. The parameters control the delay between automatic refreshing
and whether or not to use automatic or manual refreshing. Choosing manual refreshing creates a button to trigger the
refresh. Automatic refreshing hides the refresh button and triggers the refresh at a specific interval.

```php
$gridFieldConfig = GridFieldConfig::create()->addComponents(
	new GridFieldAjaxRefresh(5000,true)
);
```
