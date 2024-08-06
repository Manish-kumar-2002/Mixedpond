$(document).ready(function(){
    let count = 0;
    $(window).scroll(function() {
        let windowsScrooll=$(window).scrollTop()+$(window).height();
        if (windowsScrooll > $(".footer").offset().top) {
            count=0;
            $('.scrolltop:hidden').stop(true, true).fadeIn();
            $('.scrolling-top-block').stop(true, true).fadeOut();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
            $('.scrolling-top-block:hidden').stop(true, true).fadeIn();
        }
    });
    
    $(".scrolling-top-block").click(function(event) {
        count++;
        let scrolling = $(window).height() * count;
        $("html, body").animate({ scrollTop: scrolling });
    });
    
    $(".scrolltop").click(function(event){
        $("html, body").animate({ scrollTop: 0 });
    });
    $('.btn-search').click(function(){
        $('.form-wrap').toggleClass('active')
    });
    $('.arrow-block').click(function(){
        $(this).toggleClass('active');
    }); 
    $('.dashborad-button').click(function(){
        $(this).toggleClass('active');
        $('.arrow-tag').toggleClass('active');
        $('.dashboard-dropdown').toggleClass('active');
    });

  progress_bar();

  $('.nav-item').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".nav-item").removeClass('active');
    $(this).addClass('active');
    if($('#vmap').length){
        $('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#fff',
          color: '#F1F1F1',
          hoverOpacity: 0.7,
          selectedColor: '#666666',
          enableZoom: false,
          showTooltip: true,
          values: sample_data,
          scaleColors: ['#F1F1F1', '#15CE6A'],
          normalizeFunction: 'polynomial',
         
      });
    
    }
    
   });

   $('.compare-block').click(function() {
    $(this).addClass('active');
    $('.compare-form').addClass('active');
} );

$(document).ready(function(){
    $(".selectOption").change(function() {
        if ($(this).val() === 'yes') {
            $(this).next(".inputContainer").addClass('visible');
        } else {
            $(this).next(".inputContainer").removeClass('visible');
        }
    });

    $(" #toggle").click(function() {
        $(this).toggleClass('arrow-down');
        let elem = $(this).text();
        let section = $(this).closest(".card-body");
        if (elem == "Read More") {
            $(this).text("Read Less");
            section.find(".leader-info").slideDown('slow');
        } else {
            $(this).text("Read More");
            section.find(".leader-info").slideUp('slow');
        }
    });
});
$('.input-click').click(function(){
    $('.compare-list').addClass('active');
});

$('.close-block').click(function(){
    $('.compare-list, .compare-form, .compare-block').removeClass('active');
})

$('.search-bar-list').click(function(){
    $(".form-wrap .form-control input").addClass('active');
    $('.search-list').addClass('active');
    $('.form-wrap .close-btn').addClass('active');
});
$('.form-wrap .close-btn').click(function(){
    $(this).removeClass('active');
    $('.search-list').removeClass('active');
    $(".form-wrap .form-control input").removeClass('active');
});
$('.buttons').click(function() {
    $(this).removeClass('deactive-btn');
    $(this).prevAll().removeClass('deactive-btn');
    $(this).nextAll().addClass('deactive-btn');
});

});
function progress_bar() {
	let speed = 60;
	let items = $('.progress_bar').find('.progress_bar_item');
	
    items.each(function() {
        let item = $(this).find('.progress');
        let itemValue = item.data('progress');
        let i = 0;
        let value = $(this);
		
        let count = setInterval(function(){
            if(i <= itemValue) {
                let iStr = i.toString();
                item.css({
                    'width': iStr*4+'%'
                });
                value.find('.item_value').html(iStr);
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}


function limitValue(input) {
    const maxValue = 50;
    const value = parseInt(input.value);
   
    if (value > maxValue) {
        input.style.border = "1px solid red";
        showErrorMsg();
    } else {
        input.style.border = "";
        hideErrorMsg()
    }

    calculate();
}
function calculate() {
    let total = 0;
    const inputs = document.querySelectorAll('input[type="number"]');
    const errorMsg = document.getElementById('error-msg');
    const totalMsg = document.getElementById('total-msg');
    const errorBox = document.getElementById('error-box');
    inputs.forEach(input => {
        if (input.value !== '') {
            total += parseInt(input.value);
            totalMsg.innerHTML = "Your sum is: " + total;
        }
    });

    if (total >= 100) {
       totalMsg.style.color = 'green'
        inputs.forEach(input => {
            if (input.value === '') {
                input.disabled = true;
            }
        });
    } else {
       
       totalMsg.style.color = ''
        inputs.forEach(input => {
            input.disabled = false;
        });
    }
    if (total >= 101) {
       totalMsg.style.color = ''
       errorMsg.style.display = 'block';
       errorBox.classList.add('show-msg')
    }else{
       errorMsg.style.display = 'none';
       errorBox.classList.remove('show-msg')
    }
}

function showErrorMsg() {
    document.getElementById('error-msg1').style.display = 'block';
}

function hideErrorMsg() {
    document.getElementById('error-msg1').style.display = 'none';
}

$('#txtyes').click(function() {
    $('.inner-wraps').addClass('active-inner-wrap');
});

$('#txtno').click(function() {
    $('.inner-wraps').removeClass('active-inner-wrap');
});

$(document).ready(function() {
    $('.submit-form').on('input', function() {
        $(".btn-closed").removeAttr('data-bs-toggle');
        $(".btn-closed").removeAttr('data-bs-target');
    });
    function totalInputVal(){
    let textUser = document.querySelector("#txt-user");
    let formCont = textUser.querySelectorAll(".submit-form");
    let formSum = 0;
    formCont.forEach(function(e){
        formSum += Number(e.value);
    });
    if(formSum==100) {
        $(".btn-closed").attr('data-bs-toggle', 'modal');
        $(".btn-closed").attr('data-bs-target', '#exampleModal');
    }
    }
    totalInputVal();
    $(".submit-form").change(function(){
        totalInputVal();
      });
    $('.btn-closed').on('click', function() {
        totalInputVal();
        let textUser = $("body");
        let formCont = textUser.find(".submit-form");
        let formSum = 0;

        formCont.each(function() {
            formSum += Number($(this).val());
        });

        if (formSum < 100 || formSum > 100) {
            $('html, body').animate({
                scrollTop: textUser.offset().top
            }, 5);
        }
    });
    $('form').on('focus', 'input[type=number]', function (e) {
        $(this).on('wheel.disableScroll', function (e) {
          e.preventDefault()
        })
      })
   
});




// .....................

(function () {
    "use strict";

    /* basic radialbar chart */
    
  

    let options = {
        series: [67],
        chart: {
            height: 330,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '66%',
                    imageWidth: 32,
                    imageHeight: 32,
                    imageClipped: false
                },
                dataLabels: {
                    name: {
                        show: true,
                        color: '#333',
                        fontSize: '22px'
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ["#15CE6A"],
        stroke: {
            lineCap: 'round'
        },
        labels: [],
    };
    options.labels.push(options.series + "/" + "100")
    let chart = new ApexCharts(document.querySelector("#circle-image"), options);
    chart.render();

})();

$(function () {
    $(".accordion-content:not(:first-of-type)").css("display", "none");
    $(".js-accordion-title:first-of-type").addClass("open");
    $(".js-accordion-title").click(function () {
        $(this).find(".leader-rating").toggleClass('active');
        $(".open").not(this).find(".leader-rating").removeClass("active");
        $(this).find(".arrow-tags").toggleClass('active');
        $(".open").not(this).find(".arrow-tags").removeClass("active");
        $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
    });

    $('.leadership-block').hover(function(){
        $(this).addClass('score-pillar-block');
      
    },function(){
        $(this).removeClass('score-pillar-block');
        $(".js-accordion-title").removeClass("open");
        $(".accordion-content").css("display", "none");
        $(".arrow-tags").removeClass('active');
        $(".leader-rating").removeClass('active');

    });
  });
