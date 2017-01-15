(function() {
	'use strict';

	angular
		.module('mapskillsWeb')
		.controller('CourseController', CourseController);

	/** @ngInject */
	function CourseController($log, toastr, mentorService, modalService, storageService) {
		var vm = this;
		vm.periodSelected = null;
		vm.allPeriods = ["MATUTINO", "VESPERTINO", "NOTURNO", "EaD"];

    init();

    function init() {
			loadAllCourses();
			if(mentorService.getObjectCurrent()) {
				vm.course = mentorService.getObjectCurrent();
				vm.periodSelected = vm.course.period;
				mentorService.setObjectCurrent(null);
			}
    }

		function loadAllCourses() {
			mentorService.loadAllCourses().then(function(response) {
				vm.allCourses = response;
			});
		}

    vm.openCourseModal = function(course) {
      mentorService.setObjectCurrent(course);
      modalService.openModal('/app/components/mentor/courses/course.modal.html', 'CourseController');
		}

    vm.saveCourse = function(course) {
			course.institutionCode = 146;//storageService.getItem('user').institutionCode;
      mentorService.saveCourse(course).then(function(status) {
				if(status == 200) {
					loadAllCourses();
					toastr.success('Salvo com sucesso', 'Feito!');
				} else {
					toastr.error('Erro ao tentar salvar.', 'Falha!');
				}
				vm.closeModal();
			});
    }

		vm.closeModal = function() {
			modalService.closeModal();
		}

	}

})();
