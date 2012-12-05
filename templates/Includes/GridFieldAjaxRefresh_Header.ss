<div class="refresh-delay hide">$RefreshDelay</div>

<% if AutoRefresh %>
	<div class="auto-refresh hide">$AutoRefresh</div>
<% else %>
	<div class="auto-refresh-button">
		<!--<a class="ss-ui-button" title="Refresh Grid">-->
		<button name="action_RestartQueue" value="Restart queue processing" class="action"
		        id="action_RestartQueue" role="button" aria-disabled="false">
			<span class="ui-button-icon-primary ui-icon btn-icon-arrow-circle-double"></span>
			<span class="ui-button-text">Refresh</span>
		</button>
		<!--</a>-->
	</div>
<% end_if %>