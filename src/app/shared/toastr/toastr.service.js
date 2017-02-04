(function() {
	'use strict';

	angular
		.module('mapskillsWeb')
		.factory('toastrService', ['toastr', toastrService]);

		/** @ngInject */
		function toastrService(toastr) {
			return {
        showToastr : _showToastr
			};

      function _showToastr(status) {
        switch (status) {
          case 200:
          case 201:
            toastr.success('Salvo com sucesso.', 'Feito!');
            break;
          case 401:
          case 403:
          case 500:
            toastr.error('Parece que houve um problema no servidor.', 'Falha!');
            break;
          default:
            toastr.error('Parece que houve um problema no servidor.', 'Falha!');
            break;
        }
      }
		}
})();