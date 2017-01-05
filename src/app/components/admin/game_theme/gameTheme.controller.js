(function() {
	'use strict';

	angular
		.module('mapskillsWeb')
		.controller('GameThemeController', GameThemeController);

	/** @ngInject */
	function GameThemeController($log, adminService, modalService) {
		var vm = this;

		init();

		function init() {
			adminService.loadAllThemes().then(function(response) {
				$log.info(response);
				vm.allThemes = response;
			});
		}

		vm.openModal = function() {
      modalService.openModal('/app/components/admin/game_theme/gameTheme.modal.html', 'GameThemeController');
		}

		vm.saveTheme = function(theme) {
			adminService.saveTheme(theme);
			vm.closeModal();
		}

		vm.closeModal = function() {
			modalService.closeModal();
		}

	}

})();
