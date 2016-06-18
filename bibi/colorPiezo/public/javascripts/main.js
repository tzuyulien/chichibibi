'use strict';
$(document).ready(function() {
	$('#testBtn').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
			alert(res.callback);
		});
	});

	$('#do').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/do',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#re').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/re',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#mi').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/mi',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#fa').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/fa',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#so').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/so',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#la').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/la',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#si').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/si',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});

	$('#eating').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/eating',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});

	$('#singing').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/singing',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#tickling').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/tickling',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
	$('#flower').click(function() {
		$.ajax({
			type: 'POST',
			data: { msg: 'test' },
			url: '/flower',
			dataType: 'JSON' 
		}).done(function(res) {
			console.log(res);
		});
	});
});