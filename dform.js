(function($){

  $.fn.dInpTxt = function(){
		return this.each(function(){
			if(!$(this).parent().is('.d-inp-txt')) $(this).wrap('<span class="d-inp d-inp-txt" />');
			if($(this).attr('class') != 'undefined') $(this).parent('.d-inp-txt').addClass($(this).attr('class'));
			$(this).focus(function(){$(this).parent('.d-inp-txt').addClass('d-inp-focus')});
			$(this).blur(function(){$(this).parent('.d-inp-txt').removeClass('d-inp-focus')});
		});
	};

	$.fn.dInpBtn = function(){
		return this.each(function(){
			if(!$(this).parent().is('.d-inp-btn')) $(this).wrap('<span class="d-inp d-inp-btn" />');
			if($(this).attr('class') != 'undefined'){$(this).parent('.d-inp-btn').addClass($(this).attr('class'))};
		});
	};

	$.fn.dInpCheckbox = function(){
		return this.each(function(){
			if(!$(this).parent().is('.d-inp-cb')) $(this).wrap('<span class="d-inp d-inp-cb" />');
			$(this).parent().append('<b>&#709;</b>');
			var dInpC = this,
				dWrapC = $(dInpC).parent(),
				dLabelC = $('label[for="'+$(dInpC).attr('id')+'"]');
			$(dLabelC).css({cursor:'pointer'});
			if(dInpC.checked){
				$(dWrapC).addClass('d-inp-cb-checked');
				dLabelC.addClass('current');
			};
			$(dInpC).change(function(){
				if(this.checked){
					$(dWrapC).addClass('d-inp-cb-checked');
					dLabelC.addClass('current');
				}else{
					$(dWrapC).removeClass('d-inp-cb-checked');
					dLabelC.removeClass('current');
				}
			});
		});
	};

	$.fn.dInpRadio = function(){
		return this.each(function(){
			if(!$(this).parent().is('.d-inp-r')) $(this).wrap('<span class="d-inp d-inp-r" />');
			$(this).parent().append('<b>&bull;</b>');
			var dInpR = this,
				dWrapR = $(dInpR).parent(),
				dLabelR = $('label[for="'+$(this).attr('id')+'"]'),
				dRadioName = $(this).attr('name');
			$(dLabelR).css({cursor:'pointer'});
			if(dInpR.checked){
				$(dWrapR).addClass('d-inp-r-checked');
				dLabelR.addClass('current');
			};
			$(dInpR).change(function(){
				if($('input[name="'+dRadioName+'"]').not(this)){
					$('input[name="'+dRadioName+'"]').each(function(){
						$(this).parent().removeClass('d-inp-r-checked');
						$('label[for="'+$(this).attr('id')+'"]').removeClass('current');
					});
				};
				if(this.checked){
					$(dWrapR).addClass('d-inp-r-checked');
					dLabelR.addClass('current');
				}else{
					$(dWrapR).removeClass('d-inp-r-checked');
					dLabelR.removeClass('current');
				}
			});
		});
	};

	$.fn.dInpFile = function(){
		return this.each(function(){
			var inpWidth = $(this).width(),
				inpName = $(this).attr('name');
			$(this).addClass('d-inp-file').wrap('<span class="d-inp d-inp-f" style="width:'+inpWidth+'" />');
			$(this).parent().append('<button>Обзор...</button><input type="text" name="'+inpName+'" readonly="readonly" />');
			$(this).change(function(){
				var $this = $(this),
				$val = $this.val(),
				valArray = $val.split('\\'),
				newVal = valArray[valArray.length-1],
				$fakeFile = $this.parent().find('input[type="text"]');
				if(newVal !== ''){$fakeFile.val(newVal);}
			});
			$(this).focus(function(){$(this).parent('.d-inp-f').addClass('d-inp-focus')});
			$(this).blur(function(){$(this).parent('.d-inp-f').removeClass('d-inp-focus')});
		});
	};

	$.fn.dSelect = function(){
		return this.each(function(){
			if(!$(this).parent().is('.d-sel')) $(this).wrap('<span class="d-inp d-sel" />');
			var select = this,
				parent = $(select).parent(),
				selClass = $(select).attr('class'),
				selValue = $('option:selected',select).text(),
				selWidth = $(select).outerWidth();
			$(parent).addClass(selClass).width(selWidth);
			$(select).before('<span><b>'+selValue+'</b><i>&#9660;</i></span>').change(function(){
				$('span b',parent).text();
				var selValue = $('option:selected',this).text();
				$('span b',parent).text(selValue);
			});
		});
	};

})(jQuery);
