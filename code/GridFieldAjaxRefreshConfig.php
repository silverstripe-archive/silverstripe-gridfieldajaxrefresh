<?php

/**
 * This component provides a automatic integration of ajax refresh button with default {@link GridField}
 *
 * @package GridFieldAjaxRefresh
 */
class GridFieldAjaxRefresh_Base extends Extension {

	public function updateConfig() {
		$this->owner->addComponent(new GridFieldAjaxRefresh(5000, false));
	}

}

class GridFieldAjaxRefresh_RecordEditor extends Extension {

	public function updateConfig() {
		$this->owner->addComponent(new GridFieldAjaxRefresh(5000, false));
	}

}
