$(document).ready(function () {
/*remote URL to show content in the same modal*/
		$("#btn1").click(function(){
				$('#myModal').on('shown.bs.modal', function (e) {
						$(e.target).find('.modal-content').load('modal1.html');
				});
		});
		$("#btn2").click(function(){
				$('#myModal').on('shown.bs.modal', function (e) {
						$(e.target).find('.modal-content').load('modal2.html');
				});
		});
		
/*external link directly to show modal*/
		if(window.location.href.indexOf('#myModal1') != -1) {
				$('#myModal').modal('show').on('shown.bs.modal', function (e) {
						$(e.target).find('.modal-content').load('modal1.html');
				});
		}
		if(window.location.href.indexOf('#myModal2') != -1) {
				$('#myModal').modal('show').on('shown.bs.modal', function (e) {
						$(e.target).find('.modal-content').load('modal2.html');
				});
		}
		
});