<?php

/**
 * This component provides a automatic integration of ajax refresh button with default {@link GridField}
 *
 * @package GridFieldAjaxRefresh
 */
class GridFieldAjaxRefresh_Base extends Extension
{

	public function updateConfig()
	{
		$this->owner->addComponent(
			new GridFieldAjaxRefresh(
				Config::inst()->get('GridFieldAjaxRefresh', 'auto_refresh_interval'),
				Config::inst()->get('GridFieldAjaxRefresh', 'auto_refresh_enabled')
			)
		);
	}

}

class GridFieldAjaxRefresh_RecordEditor extends Extension
{

	public function updateConfig()
	{
		$this->owner->addComponent(
			new GridFieldAjaxRefresh(
				Config::inst()->get('GridFieldAjaxRefresh', 'auto_refresh_interval'),
				Config::inst()->get('GridFieldAjaxRefresh', 'auto_refresh_enabled')
			)
		);
	}

}
