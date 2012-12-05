<?php
/**
 * This component provides a checkbox which when checked enables drag-and-drop re-ordering of elements displayed in a {@link GridField}
 *
 * @package forms
 */
class GridFieldAjaxRefresh implements GridField_HTMLProvider {

	protected $refreshDelay;    //in milliseconds: 1000 ms = 1 second
	protected $autoRefresh;

	/**
	 * @param String $sortColumn Column that should be used to update the sort information
	 */
	public function __construct($refreshDelay = 1000, $autoRefresh = true) {
		$this->refreshDelay = $refreshDelay;
		$this->autoRefresh = $autoRefresh;
	}

	/**
	 * Returns a map where the keys are fragment names and the values are pieces of HTML to add to these fragments.
	 * @param GridField $gridField Grid Field Reference
	 * @return Array Map where the keys are fragment names and the values are pieces of HTML to add to these fragments.
	 */
	public function getHTMLFragments($gridField) {
		$data = array('RefreshDelay' => $this->refreshDelay,
					'AutoRefresh' => $this->autoRefresh);

		$forTemplate = new ArrayData($data);


		//Inject Requirements
		Requirements::css('gridfieldajaxrefresh/css/GridFieldAjaxRefresh.css');
		Requirements::javascript('gridfieldajaxrefresh/javascript/GridFieldAjaxRefresh.js');

		$args = array(
			'ID' => $gridField->ID(),
		);

		return array('header' => $forTemplate->renderWith('GridFieldAjaxRefresh_Header', $args));
	}

}
?>