(function ($) {
    'use strict';
    let device_width = window.innerWidth;
    gsap.registerPlugin(ScrollTrigger);
    var invJs = {
        m: function (e) {
            invJs.d();
            invJs.methods();
        },

        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        
        methods: function (e) {
            invJs.shapeMove();
            invJs.sideBarTwoshow();
            invJs.afterBefore();
            invJs.backtotopLeft();
            invJs.autoslidertab();
            invJs.odoMeter();
            invJs.portfoliobounceAnimation();
            invJs.preloader();
            invJs.masonryActivation();
            invJs.wowActivation();
            invJs.headerTopActivation();
            invJs.headerSticky();
            invJs.salActive();
            invJs.magnifyPopup();
            invJs.popupMobileMenu();
            invJs.slickSliderActivation();
            invJs.radialProgress();
            invJs.radialProgressOne();
            invJs.contactForm();
            invJs.menuCurrentLink();
            invJs.counterJumpanimation();
            invJs.tmpImageRevel();
            invJs.gsapAnimationImageScale();
            invJs.scrollingText();
            invJs.fonklsAnimation();
            invJs.animationOnHover();
            invJs.jaraLux();
            invJs.searchOpton();
            invJs.lightBoxJs();
            invJs.imageSlideGsap();
            invJs.preloaderWithBannerActivation();
            invJs.ursorAnimate();
            invJs.stickyTopelements();
            invJs.dateUpdate();
            invJs.smoothScroll();
            invJs.onepageMultipage();

            
            // new updates js
            invJs.gridMask();
            invJs.gymTabs();
            invJs.positionStickyJs();
        },
        


        shapeMove: function(){
            $('.shape-move').mousemove(function(e){
        
              var wx = $(window).width();
              var wy = $(window).height();
              
              var x = e.pageX - this.offsetLeft;
              var y = e.pageY - this.offsetTop;
              
              var newx = x - wx/2;
              var newy = y - wy/2;
              
              $('.shape-image .shape').each(function(){
                var speed = $(this).attr('data-speed');
                if($(this).attr('data-revert')) speed *= -1;
                TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
                
              });
              
            });
        },
        sideBarTwoshow: function () {
          // Cart Bar show & hide
          $(document).on('click', '.dot-btn', function () {
            $(".inverweb-side-bar-close").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $(".inverweb-side-bar-close").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $(".inverweb-side-bar-close").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });


          
          $(function () {
            $(".button").on("click", function () {
              var $button = $(this);
              var $parent = $button.parent();
              var oldValue = $parent.find('.input').val();

              if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
              } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                  var newVal = parseFloat(oldValue) - 1;
                } else {
                  newVal = 1;
                }
              }
              $parent.find('a.add-to-cart').attr('data-quantity', newVal);
              $parent.find('.input').val(newVal);
            });
          });

        },


        afterBefore: function () {
            $(document).ready(function () {

                if ($(".comparison-slider")[0]) {
                    let compSlider = $(".comparison-slider");

                    compSlider.each(function () {
                        let compSliderWidth = $(this).width() + "px";
                        $(this).find(".resize img").css({ width: compSliderWidth });
                        drags($(this).find(".divider"), $(this).find(".resize"), $(this));
                    });

                    $(window).on("resize", function () {
                        let compSliderWidth = compSlider.width() + "px";
                        compSlider.find(".resize img").css({ width: compSliderWidth });
                    });
                }
            });
            function drags(dragElement, resizeElement, container) {

                let touched = false;
                window.addEventListener('touchstart', function () {
                    touched = true;
                });
                window.addEventListener('touchend', function () {
                    touched = false;
                });

                dragElement.on("mousedown touchstart", function (e) {

                    dragElement.addClass("draggable");
                    resizeElement.addClass("resizable");
                    //create vars
                    let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
                    let dragWidth = dragElement.outerWidth();
                    let posX = dragElement.offset().left + dragWidth - startX;
                    let containerOffset = container.offset().left;
                    let containerWidth = container.outerWidth();
                    let minLeft = containerOffset + 10;
                    let maxLeft = containerOffset + containerWidth - dragWidth - 10;

                    dragElement.parents().on("mousemove touchmove", function (e) {

                        if (touched === false) {
                            e.preventDefault();
                        }

                        let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
                        let leftValue = moveX + posX - dragWidth;

                        if (leftValue < minLeft) {
                            leftValue = minLeft;
                        } else if (leftValue > maxLeft) {
                            leftValue = maxLeft;
                        }

                        let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";

                        $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
                            $(this).removeClass("draggable");
                            resizeElement.removeClass("resizable");
                        });

                        $(".resizable").css("width", widthValue);

                    }).on("mouseup touchend touchcancel", function () {
                        dragElement.removeClass("draggable");
                        resizeElement.removeClass("resizable");

                    });

                }).on("mouseup touchend touchcancel", function (e) {
                    dragElement.removeClass("draggable");
                    resizeElement.removeClass("resizable");

                });

            }

        },

        backtotopLeft: function () {
          jQuery(function ($) {

              var scrollTrigger = 100; // show for scroll tiggers
              var shown = false;

              function backToTopHandler() {
                  var scrollTop = $(window).scrollTop();

                  // Show / Hide elements
                  if (scrollTop > scrollTrigger && !shown) {
                      $('.show-on-scroll').addClass('show').removeClass('hide');
                      shown = true;
                  }
                  if (scrollTop <= scrollTrigger && shown) {
                      $('.show-on-scroll').addClass('hide').removeClass('show');
                      shown = false;
                  }

                  // Scroll progress (max height = 100px)
                  var pageHeight = $(document).height() - $(window).height();
                  var progress = (scrollTop / pageHeight) * 100; // % progress
                  var maxHeight = 100; // px
                  var barHeight = (progress / 100) * maxHeight;

                  $(".scrollbar-v").css("height", barHeight + "px");
              }

              // Scroll to top click (float-text + scrollbar-v)
              $('.float-text a, .scrollbar-v').on('click', function (e) {
                  e.preventDefault();
                  $('html, body').stop(true).animate({ scrollTop: 0 }, 700);
              });

              // Scroll listener
              $(window).on('scroll', backToTopHandler);

          });
        },

        autoslidertab: function () {

          $(document).ready(function(){
            function tabChange() {
              var tabs = $(".nav-tabs.splash-nav-tabs > li");
              var active = tabs.find("a.active");
              var next = active.parent("li").next("li").find("a");
              if (next.length === 0) {
                next = tabs.first().find("a").on("click");
              }
              next.tab("show");
            }
            var tabCycle = setInterval(tabChange, 5000);
          })

          $(document).ready(function(){
            function tabChange() {
                var tabs = $(".progress-tabs-activation .nav-tabs .nav-link");
                var active = $(".progress-tabs-activation .nav-tabs .nav-link.active");
                var next = active.next(".progress-tabs-activation .nav-link");

                // when tab item end it will start form 1st
                if (next.length === 0) {
                    next = tabs.first();
                }

                next.tab("show");
            }

            // Change after 5 second
            var tabCycle = setInterval(tabChange, 5000);



          })


          
        },

        portfoliobounceAnimation: function () {

            if (device_width > 991) {
          // each wrapper loop 
          document.querySelectorAll(".tmp_jump_animation-wrapper").forEach(wrapper => {
            let jump_items = wrapper.querySelectorAll(".tmp-jump__item");

            if (jump_items.length) {
              gsap.set(jump_items, { opacity: 0, scale: 1.15, rotation: 0 });

              gsap.to(jump_items, {
                scrollTrigger: {
                  trigger: wrapper,  // every wrapper diffrent trigger
                  start: "top 95%"
                },
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "bounce",
                stagger: 0.3,
                rotation: 0
              });
            }
          });
        }



        },

        radialProgressOne: function () {
          function radial_animate() {
            $('svg.radial-progress').each(function (index, value) {

              $(this).find($('circle.bar--animated')).removeAttr('style');
              // Get element in Veiw port
              var elementTop = $(this).offset().top;
              var elementBottom = elementTop + $(this).outerHeight();
              var viewportTop = $(window).scrollTop();
              var viewportBottom = viewportTop + $(window).height();

              if (elementBottom > viewportTop && elementTop < viewportBottom) {
                var percent = $(value).data('countervalue');
                var radius = $(this).find($('circle.bar--animated')).attr('r');
                var circumference = 2 * Math.PI * radius;
                var strokeDashOffset = circumference - ((percent * circumference) / 100);
                $(this).find($('circle.bar--animated')).animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
              }
            });
          }
          // To check If it is in Viewport 
          var $window = $(window);
          function check_if_in_view() {
            $('.countervalue').each(function () {
              if ($(this).hasClass('start')) {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();

                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                  $(this).removeClass('start');
                  $('.countervalue').text();
                  var myNumbers = $(this).text();
                  if (myNumbers == Math.floor(myNumbers)) {
                    $(this).animate({
                      Counter: $(this).text()
                    }, {
                      duration: 2800,
                      easing: 'swing',
                      step: function (now) {
                        $(this).text(Math.ceil(now) + '%');
                      }
                    });
                  } else {
                    $(this).animate({
                      Counter: $(this).text()
                    }, {
                      duration: 2800,
                      easing: 'swing',
                      step: function (now) {
                        $(this).text(now.toFixed(2) + '$');
                      }
                    });
                  }

                  radial_animate();
                }
              }
            });
          }

          $window.on('scroll', check_if_in_view);
          $window.on('load', check_if_in_view);

        },

        preloader: function () {


          var preload = document.querySelector('#inverweb-load');

          if (preload) {
            var maxTimeout = setTimeout(function () {
              preload.classList.add("loaded");
            }, 2500);

            window.addEventListener('load', function () {
              clearTimeout(maxTimeout);
              preload.classList.add("loaded");
            });
          }


        },
        
        masonryActivation: function() {
          // Run other animations immediately
          this.initOtherAnimations();
          
          // Wait for window load only for Isotope
          $(window).on('load', function() {
            $('.masonary-wrapper-activation').imagesLoaded(function() {
              var $grid = $('.mesonry-list').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',
                masonry: {
                  columnWidth: '.resizer',
                }
              });

              $('.messonry-button').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({ filter: filterValue });
              });
              
              // Refresh ScrollTrigger after Isotope
              ScrollTrigger.refresh();
            });
          });
        },

        initOtherAnimations: function() {
          // Initialize all other animations that don't depend
          invJs.wowActivation();
          // all other animations except masonry
        },

        menuCurrentLink: function () {
            var currentPage = location.pathname.split("/"),
            current = currentPage[currentPage.length-1];
            $('.mainmenu li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === current){
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
        },

        magnifyPopup: function () {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        },

        popupMobileMenu: function (e) {
          // Open menu
          $('.hamberger-button').on('click', function (e) {
              $('.popup-mobile-menu').addClass('active');
          });

          // Close menu
          $('.close-menu').on('click', function (e) {
              $('.popup-mobile-menu').removeClass('active');
              $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                  .siblings('.submenu, .tmp-megamenu')
                  .removeClass('active')
                  .slideUp(400);
              $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                  .removeClass('open');
          });

          // Dropdown toggle (2nd + 3rd level)
          // $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
          //     .on('click', function (e) {
          //         e.preventDefault();
          //         $(this).siblings('.submenu, .tmp-megamenu')
          //             .toggleClass('active')
          //             .slideToggle(400);
          //         $(this).toggleClass('open');
          // });
                    // Dropdown toggle (2nd + 3rd level)
                    
          $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
              .on('click', function (e) {
                  var $this = $(this);
                  var $submenu = $this.siblings('.submenu, .tmp-megamenu');

                  // If submenu is NOT visible (closed), open it and prevent navigation
                  if (!$submenu.hasClass('active')) {
                      e.preventDefault();
                      // Close any other open submenus first
                      $this.closest('.mainmenu').find('.has-droupdown > a, .with-megamenu > a, .has-third-lev > a').not($this).each(function() {
                          $(this).removeClass('open');
                          $(this).siblings('.submenu, .tmp-megamenu').removeClass('active').slideUp(400);
                      });
                      // Open this submenu
                      $submenu.addClass('active').slideDown(400);
                      $this.addClass('open');
                  }
                  // If submenu IS visible (already open), allow navigation (no e.preventDefault)
          });

          // Close when clicking outside or on onepage nav link
          $('.popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a').on('click', function (e) {
              if (e.target === this) {
                  $('.popup-mobile-menu').removeClass('active');
                  $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                      .siblings('.submenu, .tmp-megamenu')
                      .removeClass('active')
                      .slideUp(400);
                  $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                      .removeClass('open');
              }
          });

        },
        

        slickSliderActivation: function () {
            $('.testimonial-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplaySpeed: 2000,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.testimonial-activation-2').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $('.slider-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplaySpeed: 2000,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.slider-activation-2').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplay: true, 
                autoplaySpeed: 6000,
                pauseOnHover: false,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.tmp-banner-right-carousel').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplay: true, 
                autoplaySpeed: 3000,
            });

            $('.brand-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                autoplay: true, 
                autoplaySpeed: 2000,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

            $('.brand-carousel-activation-ai').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                autoplay: true, 
                autoplaySpeed: 2000,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

            $('.inner-demo-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                adaptiveHeight: true,
                autoplay: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

        },

        salActive: function () {
            sal({
                threshold: 0.01,
                once: true,
            });
        },

        headerSticky: function () {
          // 🔹 Global Sticky Header for all headers
          $(window).scroll(function () {
              if ($(this).scrollTop() > 250) {
                  $('.header-sticky').addClass('sticky');
              } else {
                  $('.header-sticky').removeClass('sticky');
              }
          });

          // 🔹 Extra Padding Only for header-top-padding header
          $(window).scroll(function () {
              var $header = $('.header-sticky.header-sticky-smooth');

              if ($header.length) {
                  if ($(this).scrollTop() > 250) {
                      var headerHeight = $header.outerHeight();
                      $('body').css('padding-top', headerHeight + 'px');
                  } else {
                      $('body').css('padding-top', '0');
                  }
              }
          });

        },

        wowActivation: function () {
            new WOW().init();
        },

        headerTopActivation: function () {
            $('.bgsection-activation').on('click', function () {
                $('.header-top-news').addClass('deactive')
            })
        },

        radialProgress: function () {
            $('.radial-progress').waypoint(function () {
                $('.radial-progress').easyPieChart({
                    lineWidth: 20,
                    scaleLength: 0,
                    rotate: 0,
                    trackColor: false,
                    lineCap: 'round',
                    size: 220
                });
            }, {
                triggerOnce: true,
                offset: 'bottom-in-view'
            });
        },

        contactForm: function () {
            $('.tmp-dynamic-form').on('submit', function (e) {
              // e.preventDefault();
              var _self = $(this);
              var __selector = _self.closest('input,textarea');
              _self.closest('div').find('input,textarea').removeAttr('style');
              _self.find('.error-msg').remove();
              _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
              var data = $(this).serialize();
              $.ajax({
                url: 'mail.php',
                type: "post",
                dataType: 'json',
                data: data,
                success: function (data) {
                  _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                  if (data.code == false) {
                    _self.closest('div').find('[name="' + data.field + '"]');
                    _self.find('.tmp-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
                  } else {
                    $('.error-msg').hide();
                    $('.form-group').removeClass('focused');
                    _self.find('.tmp-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
                    _self.closest('div').find('input,textarea').val('');

                    setTimeout(function () {
                      $('.success-msg').fadeOut('slow');
                    }, 5000);
                  }
                }
              });
            });
        },

        counterJumpanimation: function () {
           gsap.registerPlugin(ScrollTrigger);

          let counters = document.querySelectorAll('.counter_animation .counter__anim');

          if (counters.length) {
              gsap.set(counters, {
                  y: -100,
                  opacity: 0,
              });

              if (device_width < 1023) {
                  const counterArray = gsap.utils.toArray(counters);
                  counterArray.forEach((item) => {
                      let counterTl = gsap.timeline({
                          scrollTrigger: {
                              trigger: item,
                              start: 'top center+=200',
                          }
                      });
                      counterTl.to(item, {
                          y: 0,
                          opacity: 1,
                          ease: 'bounce',
                          duration: 1.5,
                      });
                  });
              } else {
                  gsap.to(counters, {
                      scrollTrigger: {
                          trigger: '.counter_animation',
                          start: 'top center+=300',
                      },
                      y: 0,
                      opacity: 1,
                      ease: 'bounce',
                      duration: 1.5,
                      stagger: {
                          each: 0.3,
                      }
                  });
              }
          }

      
        },

        tmpImageRevel: function (){
            $(document).ready(function () {
                gsap.registerPlugin(ScrollTrigger);
        
                let revealContainers = document.querySelectorAll('.tmp-reveal-one');
        
                revealContainers.forEach((container) => {
                  let image = container.querySelector('.tmp-reveal-image-one');
                  let rts = gsap.timeline({
                    scrollTrigger: {
                      trigger: container,
                      toggleActions: 'restart none none reset',
                      start: 'top 90%',
                      end: 'top 0%',
                    }
                  });
        
                  rts.set(container, {
                    autoAlpha: 1
                  });
                  rts.from(container, 1.5, {
                    xPercent: -100,
                    ease: Power2.out
                  });
                  rts.from(image, 1.5, {
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out
                  });
                });
              });
        },

        gsapAnimationImageScale: function (e) {
            $(document).ready(function () {
              let growActive = document.getElementsByClassName('grow-thumbnail');
              if (growActive.length) {
                const growTmp = gsap.timeline({
                  scrollTrigger: {
                    trigger: '.grow-thumbnail',
                    scrub: 1,
                    start: 'top center',
                    end: '+=1000',
                    ease: 'power1.out'
                  }
                });
                growTmp.to('.grow-thumbnail', {
                  duration: 1,
                  scaleX: 1.3
                });
              }
            });
            $(document).ready(function () {
              let growActive = document.getElementsByClassName('grow-thumbnail-1-overlay');
              if (growActive.length) {
                const growTmp = gsap.timeline({
                  scrollTrigger: {
                    trigger: '.grow-thumbnail-1-overlay',
                    scrub: 1,
                    start: 'top 65%',
                    end: '+=300',
                    ease: 'power1.out'
                  }
                });
                growTmp.to('.grow-thumbnail-1-overlay', {
                  duration: 1,
                  scaleX: 0
                });
              }
            });
        },

        scrollingText: function(){
            $(document).ready(function () {
                let scrollingTextTwo = document.getElementsByClassName('scrollingtext-1');
                if (scrollingTextTwo.length) {
                  gsap.registerPlugin(ScrollTrigger);
                  let tl2 = gsap.timeline();
                  tl2.to('.scrollingtext-1', {
                    x: 1000,
                    duration: 10,
                    repeat: -1,
                    ease: 'linear'
                  })
                  let tl = gsap.timeline();
                  tl.to('.scrollingtext-1', {
                    xPercent: 5,
                    scrollTrigger: {
                      trigger: '.scrollingtext-1',
                      scrub: 1
                    }
                  })
                }
            });
        },

        fonklsAnimation: function () {
          let end_animation = document.getElementsByClassName('end');
          if (end_animation.length) {
            let endTl = gsap.timeline({
                repeat: -1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: '.end',
                    start: 'bottom 100%-=30px'
                }
            });
            gsap.set('.end', {
                opacity: 0
            });
            gsap.to('.end', {
                opacity: .1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.end',
                    start: 'bottom 100%-=50px',
                    once: true
                }
            });
            let mySplitText = new SplitText('.end', {
                type: 'words,chars'
            });
            let chars = mySplitText.chars;
            endTl.to(chars, {
                duration: 0.5,
                scaleY: 0.9,
                ease: 'power3.out',
                stagger: 0.04,
                transformOrigin: 'center bottom'
            });
            endTl.to(chars, {
                yPercent: -10,
                ease: 'elastic',
                stagger: 0.03,
                duration: 0.8
            }, 0.5);
            endTl.to(chars, {
                scaleY: 1,
                ease: 'elastic.out(2.5, 0.2)',
                stagger: 0.03,
                duration: 1.5
            }, 0.5);
            endTl.to(chars, {
                ease: 'power2.out',
                stagger: 0.03,
                duration: 0.3
            }, 0.5);
            endTl.to(chars, {
                yPercent: 0,
                ease: 'back',
                stagger: 0.03,
                duration: 0.8
            }, 0.7);
            endTl.to(chars, {
                duration: 1.4,
                stagger: 0.05
            });
          }


        },

        animationOnHover: function () {
          let cards = document.querySelectorAll('.tmponhover');
          cards.forEach((tmpOnHover) => {
            tmpOnHover.onmousemove = function (e) {
              let rect = tmpOnHover.getBoundingClientRect();
              let x = e.clientX - rect.left; // element X position
              let y = e.clientY - rect.top;  // element Y position
              tmpOnHover.style.setProperty('--x', `${x}px`);
              tmpOnHover.style.setProperty('--y', `${y}px`);
            };
          });
        },

        jaraLux: function (e) {
            $(document).ready(function () {
              $('.jarallax').jarallax();
            });
      
        },

        searchOpton:function(){
            $(document).on('click', '#search', function () {
              $(".tmp-search-input-area").addClass("show");
              $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '#close', function () {
              $(".tmp-search-input-area").removeClass("show");
              $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
              $(".tmp-search-input-area").removeClass("show");
              $("#anywhere-home").removeClass("bgshow");
            });
        },

        lightBoxJs: function () {
            lightGallery(document.getElementById('animated-lightbox'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });

            lightGallery(document.getElementById('animated-lightbox2'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });

            lightGallery(document.getElementById('animated-lightbox3'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });
        },

        imageSlideGsap: function () {
            $(document).ready(function () {
              let image_leftright = document.querySelectorAll('.images-left-right-float');
              if (image_leftright.length) {
                gsap.fromTo(
                  ".images-left-right-float",
                  { transform: "translate(0, 0px)" }, // Start position
                  {
                    transform: "translate(-150px, 0px)", // End position
                    scrollTrigger: {
                      start: "top bottom", 
                      end: "bottom top",  
                      scrub: 2,            

                    },
                    ease: "none", // No easing for linear scrolling effect
                  }
                );
              }
             
            });

            
            $(document).ready(function(){
              let image_r = document.querySelectorAll('.images-r');
              if (image_r.length) {
                gsap.to(".images-r", {
                  scrollTrigger:{
                    // trigger: ".images",
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: 1,
                    // markers: true
                  },
                  x: -150,
                })
              }
          
            });
            $(document).ready(function(){
              let images_2 = document.querySelectorAll('.images-r');
              if (images_2.length) {
                gsap.to(".images-2", {
                  scrollTrigger:{
                    // trigger: ".images",
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: 1,
                    // markers: true
                  },
                  y: -290,
                })
              }
            
            });
        },

        preloaderWithBannerActivation: function () {



          if ($(".tmp-title-split").length) {
            let staggerAmount = 0.03,
              translateXValue = 20,
              delayValue = 0.1,
              easeType = "power2.out",
              animatedTextElements = document.querySelectorAll(".tmp-title-split");

            animatedTextElements.forEach(element => {
              let animationSplitText = new SplitText(element, { type: "chars, words" });
              gsap.from(animationSplitText.chars, {
                duration: 1,
                delay: delayValue,
                x: translateXValue,
                autoAlpha: 0,
                stagger: staggerAmount,
                ease: easeType,
                scrollTrigger: { trigger: element, start: "top 85%" },
              });
            });
          }
      
        },
        
        odoMeter: function () {
          $(document).ready(function () {
            function isInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
              );
            }

            function triggerOdometer(element) {
              const $element = $(element);
              if (!$element.hasClass('odometer-triggered')) {
                const countNumber = $element.attr('data-count');
                $element.html(countNumber);
                $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
              }
            }

            function handleOdometer() {
              $('.odometer').each(function () {
                if (isInViewport(this)) {
                  triggerOdometer(this);
                }
              });
            }

            // Check on page load
            handleOdometer();

            // Check on scroll
            $(window).on('scroll', function () {
              handleOdometer();
            });
          });
        },

        ursorAnimate: function () {
            var myCursor = jQuery(".mouse-cursor");
            if (myCursor.length) {
              if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                  t = document.querySelector(".cursor-outer");
                let n,
                  i = 0,
                  o = !1;
                (window.onmousemove = function (s) {
                  o ||
                    (t.style.transform =
                      "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                      "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
                }),
                  $("body").on(
                    "mouseenter",
                    "a, button, .cursor-pointer",
                    function () {
                      e.classList.add("cursor-hover"),
                        t.classList.add("cursor-hover");
                    }
                  ),
                  $("body").on(
                    "mouseleave",
                    "a, button, .cursor-pointer",
                    function () {
                      ($(this).is("a") &&
                        $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                        t.classList.remove("cursor-hover"));
                    }
                  ),
                  (e.style.visibility = "visible"),
                  (t.style.visibility = "visible");
              }
            }

        },

        stickyTopelements: function () {
            var stickyElement = $('.inversweb-sticky-section');

            stickyElement.each(function () {
                var $this = $(this);

                $(window).on("scroll", function () {
                    var windowTop = $(window).scrollTop();     // Scroll position
                    var windowHeight = $(window).height();     // Window height
                    var triggerPoint = windowTop + (windowHeight * 0.2); // Top theke 20%

                    var elementTop = $this.offset().top;       // Section position

                    if (triggerPoint >= elementTop) {
                        $this.addClass('zoomactive');
                    } else {
                        $this.removeClass('zoomactive');
                    }
                });
            });


            var masonary = $('.invers-theme-masonary');
            masonary.each(function () {
                $('.invers-theme-masonary').imagesLoaded(() => {
                    $('.invers-theme-masonary').masonry({
                        itemSelector: '.invers-masonary-item',
                        horizontalOrder: true,
                    });
                })
            })


        },

        dateUpdate: function () {

          let fullYear = document.querySelectorAll("#year");

          if (fullYear.length) {
            window.addEventListener("DOMContentLoaded", function () {
              document.getElementById("year").textContent = new Date().getFullYear();
            });
          }

        },

        smoothScroll: function (e) {
          $(document).on("click", '.onepage a[href^="#"]', function (event) {
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: $($.attr(this, "href")).offset().top,
              },
              2000
            );
          });

           $(".popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a").on("click", function (e) {
            e.target === this &&
              $(".popup-mobile-menu").removeClass("active") &&
              $(".popup-mobile-menu .mainmenu .has-dropdown > a")
                .siblings(".submenu")
                .removeClass("active")
                .slideUp("400") &&
              $(
                ".popup-mobile-menu .mainmenu .has-dropdown > a"
              ).removeClass("open");
          });
        },
        
        onepageMultipage: function (params) {
            document.querySelectorAll('.tab_wrapper').forEach(tabWrapper => {
            const tabButtons = tabWrapper.querySelectorAll('.tabs-nav .nav-links');
            const tabPanes = tabWrapper.querySelectorAll('.tab-pane');

            tabButtons.forEach(btn => {
              btn.addEventListener('click', () => {
                // Remove active classes
                tabButtons.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active', 'show'));

                // Activate clicked tab
                btn.classList.add('active');
                const targetSelector = btn.getAttribute('data-target');
                const targetPane = tabWrapper.querySelector(targetSelector);
                if (targetPane) {
                  targetPane.classList.add('active', 'show');
                }
              });
            });
          });
        },



        // new updates js

        gridMask: function(){
            // portfolio-slide-3
            if (document.querySelectorAll(".slider-gird").length > 0) {
              document.querySelectorAll('.grid-mask').forEach(gridMask => {
                let blocks = [];
                for (let i = 0; i < 32; i++) {
                  let block = document.createElement("div");
                  block.style.transitionDelay = `${Math.random() * 1.5}s`;
                  blocks.push(block);
                }
                blocks.sort(() => Math.random() - 0.5);
                blocks.forEach(block => gridMask.appendChild(block));
              });

            }

        },

        gymTabs: function(){
            $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
              e.preventDefault();

              var target = $($(this).data('tab'));
              var tabsBox = target.closest('.tabs-box');

              if (target.hasClass('active-tab')) return;

              tabsBox.find('.tab-btn').removeClass('active-btn');
              $(this).addClass('active-btn');

              tabsBox.find('.tab').removeClass('active-tab').hide();

              target.fadeIn(300).addClass('active-tab');
            });
        },



         
        positionStickyJs: function () {

          let mediaMatch = gsap.matchMedia();
          $(document).ready(function () {

              // Register ScrollTrigger
              gsap.registerPlugin(ScrollTrigger);

              // Optional RTL helper
              function rtlValue(value) {
                return value; // LTR এর জন্য as-is
              }
              // Arrange on Scroll Animation
              function initArrangeAnim() {
                const panelsContainers = document.querySelectorAll(
                  ".invers-arrange-container"
                );
                if (panelsContainers?.length) {
                  mediaMatch.add("(min-width: 992px)", () => {
                    panelsContainers.forEach((panelsContainer, idx) => {
                      const panels = panelsContainer.querySelectorAll(".invers-arrange-item");

                      const startOffset = 50;
                      panels.forEach((panel, i) => {
                        gsap.from(panel, {
                          xPercent: i % 2 === 0 ? rtlValue(-20) : rtlValue(20),
                          ease: "none",
                          scrollTrigger: {
                            trigger: panel,
                            start: `top bottom`,
                            end: `bottom bottom`,
                            pin: false,
                            pinSpacing: false,
                            scrub: true,
                            markers: false,
                            invalidateOnRefresh: true,
                          },
                        });
                      });
                    });
                  });
                }
              }
              initArrangeAnim();


          });




          $(document).ready(function () {
            const serviceStack = gsap.utils.toArray(".sticky-stack");
            if (serviceStack.length > 0) {
              mediaMatch.add("(min-width: 992px)", () => {
                serviceStack.forEach(item => {
                  gsap.to(item, {
                    opacity: 0,
                    scale: 0.9,
                    y: 50,
                    scrollTrigger: {
                      trigger: item,
                      scrub: true,
                      start: "top top",
                      pin: true,
                      pinSpacing: false,
                      markers: false,
                    },
                  });
                });
              });
            }

          });
      

        },




    }

    invJs.m();

})(jQuery, window)


// Counter Slider Init
 $(document).ready(function () {
    if ($('.tmp-counter-slider').length) {
        $('.tmp-counter-slider').slick({
            slidesToShow: 4,       // Show 4 slides on desktop
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            arrows: true,
            dots: true,
            infinite: true,
            pauseOnHover: true,
            cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        arrows: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });

        // Re-trigger odometer when slide becomes visible
        $('.tmp-counter-slider').on('afterChange', function () {
            var currentSlide = $(this).find('.slick-active .odometer');
            currentSlide.each(function () {
                var count = $(this).data('count');
                this.innerHTML = count;
            });
        });
    }
});


// document.querySelectorAll('li.with-megamenu').forEach(item => {
//     item.classList.remove('with-megamenu');
// });


// setTimeout(function () {
//   $("#ai-ask-btn").addClass("ai-ask-visible");
//   $("#ai-chat-popup").addClass("ai-chat-open");
// }, 1500);
 
//  $("#ai-ask-btn").on("click", function(event) {
//   event.preventDefault();
//   $("#ai-chat-popup").toggleClass("ai-chat-open");
//   return false;
// });
 
//  $("#ai-chat-close").on("click", function(event) {
//   event.preventDefault();
//   $("#ai-chat-popup").removeClass("ai-chat-open");
//   return false;
// });


 $(document).ready(function () {

    // ===== 1. SHOW BUTTON & AUTO-OPEN AFTER DELAY =====
    setTimeout(function () {
        $("#ai-ask-btn").addClass("ai-ask-visible");
        $("#ai-chat-popup").addClass("ai-chat-open");
    }, 1800);

    // ===== 2. TOGGLE CHAT ON BUTTON CLICK =====
    $("#ai-ask-btn").on("click", function (e) {
        e.preventDefault();
        $("#ai-chat-popup").toggleClass("ai-chat-open");
    });

    // ===== 3. CLOSE CHAT =====
    $("#ai-chat-close").on("click", function (e) {
        e.preventDefault();
        $("#ai-chat-popup").removeClass("ai-chat-open");
    });

    // ===== 4. SEND MESSAGE FUNCTION =====
    function sendMessage() {
        var userText = $("#ai-user-input").val().trim();
        if (userText === "") return;

        // Add user message bubble
        var userMsg = '<div class="ai-chat-message ai-user-msg">' +
            '<div class="ai-msg-bubble">' + escapeHTML(userText) + '</div>' +
            '</div>';
        $("#ai-chat-body").append(userMsg);

        // Clear input
        $("#ai-user-input").val("");

        // Scroll to bottom
        scrollToBottom();

        // Show typing indicator
        showTyping();

        // Simulate bot reply after delay
        setTimeout(function () {
            hideTyping();
            var botReply = getBotReply(userText);
            var botMsg = '<div class="ai-chat-message ai-bot-msg">' +
                '<div class="ai-msg-bubble">' + botReply + '</div>' +
                '</div>';
            $("#ai-chat-body").append(botMsg);
            scrollToBottom();
        }, 1200);
    }

    // ===== 5. SEND ON BUTTON CLICK =====
    $("#ai-send-btn").on("click", function (e) {
        e.preventDefault();
        sendMessage();
    });

    // ===== 6. SEND ON ENTER KEY =====
    $("#ai-user-input").on("keypress", function (e) {
        if (e.which === 13) {
            e.preventDefault();
            sendMessage();
        }
    });

    // ===== 7. VOICE INPUT =====
    var isListening = false;
    $("#ai-voice-btn").on("click", function (e) {
        e.preventDefault();

        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Voice input is not supported in this browser. Please use Chrome.");
            return;
        }

        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        if (!isListening) {
            isListening = true;
            $("#ai-voice-btn").addClass("listening");
            recognition.start();

            recognition.onresult = function (event) {
                var transcript = event.results[0][0].transcript;
                $("#ai-user-input").val(transcript);
                sendMessage();
            };

            recognition.onend = function () {
                isListening = false;
                $("#ai-voice-btn").removeClass("listening");
            };

            recognition.onerror = function () {
                isListening = false;
                $("#ai-voice-btn").removeClass("listening");
            };
        } else {
            isListening = false;
            $("#ai-voice-btn").removeClass("listening");
            recognition.stop();
        }
    });

    // ===== 8. SCROLL TO BOTTOM =====
    function scrollToBottom() {
        var chatBody = document.getElementById("ai-chat-body");
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // ===== 9. TYPING INDICATOR =====
    function showTyping() {
        var typing = '<div class="ai-chat-message ai-bot-msg" id="ai-typing-msg">' +
            '<div class="ai-msg-bubble"><div class="ai-typing-indicator"><span></span><span></span><span></span></div></div>' +
            '</div>';
        $("#ai-chat-body").append(typing);
        scrollToBottom();
    }

    function hideTyping() {
        $("#ai-typing-msg").remove();
    }

    // ===== 10. ESCAPE HTML =====
    function escapeHTML(text) {
        return text.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;');
    }

    // ===== 11. BOT REPLY LOGIC (COMPREHENSIVE v3.0) =====
    function getBotReply(userText) {
        var text = userText.toLowerCase().trim();

        // ========== KEYWORD-BASED Q&A DATABASE ==========
        var qaDatabase = [
            // ---------- COMPANY & GENERAL ----------
            { keywords: ["what is marq ai", "tell me about marq", "about marq ai", "about company", "company info", "what does marq do"],
              answer: "<b>MARQ AI Tech Pvt Ltd</b> is a forward-thinking AI technology company based in Bengaluru, India. We combine cutting-edge AI, enterprise technologies, and industry expertise to create solutions that solve complex business challenges, improve operational efficiency, and accelerate growth. Our team of technology strategists, AI specialists, software engineers, data scientists, and business consultants deliver scalable, secure, and future-ready solutions." },
            { keywords: ["where is marq", "location", "address", "office", "headquarters"],
              answer: "Our headquarters: <b>338/14, Sri Nilyam, 3rd A Main, 4th A Cross, A Sector, Yelahanka New Town, Bengaluru - 560064, India</b>." },
            { keywords: ["contact", "email", "phone", "reach you", "call you"],
              answer: "Contact us at: <b>Phone:</b> +91 8147952705 / +080 29910716 | <b>Email:</b> info@marqaitech.com" },
            { keywords: ["how many clients", "trusted by", "client count"],
              answer: "We are trusted by <b>2000+ leading companies</b> across 80+ industry verticals, with 80+ enterprise clients and 80+ successfully delivered projects." },
            { keywords: ["industries", "sectors", "domains", "verticals"],
              answer: "We serve: <b>Healthcare, Aerospace, Learning & Education, M-Commerce & E-commerce, Manufacturing, Logistics & Transportation, Insurance, Government & Public Sector</b>." },
            { keywords: ["group companies", "3 boxes", "sister companies", "partners"],
              answer: "MARQ AI is part of the <b>3 Boxes ecosystem</b>:<br>- <b>3 Boxes Consulting Services</b> - Staffing & Consulting<br>- <b>3 Boxes Technologies</b> - Software Development<br>- <b>3 Boxes Gifts Curations</b> - Corporate Gifting<br>- <b>3 Boxes LUXURY</b> - Dedicated Services" },
            { keywords: ["vision", "mission", "purpose", "goal", "objective"],
              answer: "<b>Vision:</b> To become a globally trusted leader in AI and digital transformation, empowering organizations with innovative technologies for sustainable growth.<br><br><b>Mission:</b> To deliver intelligent, scalable, and future-ready technology solutions that help businesses innovate faster, automate smarter, and achieve strategic objectives through AI, data, and digital transformation." },
            { keywords: ["how do you work", "process", "approach", "methodology", "journey", "steps"],
              answer: "We follow a <b>3-step approach</b>:<br><b>1. Discover</b> - Map workflows, identify friction points, define AI opportunities.<br><b>2. Design the Product Story</b> - Craft interface systems, data flows, user journeys, dashboards, and conversion paths.<br><b>3. Build with AI-native Architecture</b> - Deploy AI solutions and scale as your business grows." },
            { keywords: ["management team", "ceo", "founder", "who leads", "mahesh", "leadership"],
              answer: "<b>Mahesh Kumar Parvathareddy</b> is the <b>CEO & Founder</b> of MARQ AI Tech Pvt Ltd. He is a visionary technology leader with over <b>20 years of experience</b> in product engineering, AI, enterprise architecture, and digital transformation." },
            { keywords: ["awards", "recognition", "achievements", "accolades"],
              answer: "MARQ AI has received recognition for excellence in AI innovation, digital transformation, and enterprise solutions. Visit our <b>Awards & Recognition</b> page for our latest achievements!" },
            { keywords: ["different", "why choose marq", "unique", "advantage", "what makes you different"],
              answer: "MARQ AI is <b>AI-first</b> - we build intelligent solutions combining AI expertise, product strategy, engineering excellence, and premium design for real-world impact. We specialize in AI-powered applications, intelligent automation, enterprise platforms, cloud systems, mobile apps, and eCommerce ecosystems." },
            { keywords: ["our clients", "key clients", "who are your clients", "atul", "pratyin", "tofflon", "dhanuka", "thai summit"],
              answer: "Our esteemed clients: <b>ATUL</b> (3-wheeled vehicles), <b>Pratyin</b> (IT solutions), <b>Dhananjay Group</b> (sheet metal stamping), <b>Tofflon</b> (pharmaceutical equipment), <b>Dhanuka Agritech</b> (agriculture), <b>Thai Summit Group</b> (automotive parts), and many more across 80+ verticals!" },
            { keywords: ["numbers", "stats", "metrics", "fun facts", "how many projects"],
              answer: "Our key metrics: <b>2000+</b> Trusted companies | <b>80+</b> Projects Delivered | <b>80+</b> Enterprise Clients | <b>80+</b> Industry Verticals | <b>80+</b> Support Coverage | <b>100%</b> Successfully Delivered" },

            // ---------- ALL PRODUCTS OVERVIEW ----------
            { keywords: ["products", "product list", "what products", "all products", "your products", "what product", "tell me about products", "about products"],
              priority: 80,
              answer: "We offer <b>5 core AI-powered products</b>:<br>1. <b>3 BOXES HRMS</b> - Intelligent Workforce Management<br>2. <b>AI ERP</b> - Enterprise Resource Planning<br>3. <b>AI CRM</b> - Customer Relationship Management<br>4. <b>AI Virtual Try-On</b> - Virtual product try-on<br>5. <b>AI eCommerce Platform</b> - Smart online commerce" },

            // ---------- ALL SERVICES OVERVIEW ----------
            { keywords: ["services", "service list", "what services", "all services", "your services", "what service", "tell me about services", "about services"],
              priority: 80,
              answer: "We offer <b>18+ AI & technology services</b>:<br>- <b>AI Solutions</b> - Copilots, agents, recommendation engines<br>- <b>IT Consulting</b> - Architecture, modernization, cloud migration<br>- <b>eCommerce Systems</b> - Conversion-first storefronts<br>- <b>Web & Mobile Apps</b> - Cross-platform with polished UX<br>- <b>3 BOXES HRMS</b> - Talent workflows, performance dashboards<br>- <b>ERP Platforms</b> - Finance, inventory, procurement<br>- <b>AI Agents & Agentic Workflows</b> - Autonomous AI agents<br>- <b>Conversational AI</b> - NLP-powered chatbots<br>- <b>Generative AI</b> - Custom LLM solutions<br>- <b>Recommendation Engines</b> - Personalized recommendations<br>- <b>RAG & Enterprise Knowledge</b> - Retrieval-Augmented Generation<br>- <b>Predictive Analytics & ML</b> - Forecasting & anomaly detection<br>- <b>Computer Vision</b> - Image recognition & video analytics<br>- <b>NLP Solutions</b> - Text classification & sentiment analysis<br>- <b>Intelligent Automation</b> - RPA + AI workflows<br>- <b>Custom AI Model Development</b> - Purpose-built models<br>- <b>AI Integration</b> - Seamless AI embedding<br>- <b>Cloud & DevOps</b> - Cloud infrastructure & CI/CD<br>- <b>Manufacturing AI</b> - AI for manufacturing" },

            // ---------- ALL PRODUCTS & SERVICES COMBINED ----------
            { keywords: ["products and services", "products & services", "product and service", "product & service", "what do you offer", "what you offer", "what you do", "what you provide", "what you sell", "your offerings", "your solutions", "tell me about your products and services", "list all products and services", "all products and services", "complete list"],
              priority: 90,
              answer: "Here is the complete list of our <b>Products & Services</b>:<br><br><b>========== OUR 5 CORE PRODUCTS ==========</b><br><br>1. <b>3 BOXES HRMS</b> - Intelligent Workforce Management<br>2. <b>AI ERP</b> - Enterprise Resource Planning<br>3. <b>AI CRM</b> - Customer Relationship Management<br>4. <b>AI Virtual Try-On</b> - Virtual product try-on<br>5. <b>AI eCommerce Platform</b> - Smart online commerce<br><br><b>========== OUR 18+ AI & TECHNOLOGY SERVICES ==========</b><br><br>1. <b>AI Solutions</b> - Copilots, agents, recommendation engines<br>2. <b>IT Consulting</b> - Architecture, modernization, cloud migration<br>3. <b>eCommerce Systems</b> - Conversion-first storefronts<br>4. <b>Web & Mobile Apps</b> - Cross-platform with polished UX<br>5. <b>3 BOXES HRMS</b> - Talent workflows, performance dashboards<br>6. <b>ERP Platforms</b> - Finance, inventory, procurement<br>7. <b>AI Agents & Agentic Workflows</b> - Autonomous AI agents<br>8. <b>Conversational AI</b> - NLP-powered chatbots<br>9. <b>Generative AI</b> - Custom LLM solutions<br>10. <b>Recommendation Engines</b> - Personalized recommendations<br>11. <b>RAG & Enterprise Knowledge</b> - Retrieval-Augmented Generation<br>12. <b>Predictive Analytics & ML</b> - Forecasting & anomaly detection<br>13. <b>Computer Vision</b> - Image recognition & video analytics<br>14. <b>NLP Solutions</b> - Text classification & sentiment analysis<br>15. <b>Intelligent Automation</b> - RPA + AI workflows<br>16. <b>Custom AI Model Development</b> - Purpose-built models<br>17. <b>AI Integration</b> - Seamless AI embedding<br>18. <b>Cloud & DevOps</b> - Cloud infrastructure & CI/CD<br>19. <b>Manufacturing AI</b> - AI for manufacturing<br><br>Would you like to know more about any specific product or service?" },

            // ---------- 3 BOXES HRMS ----------
            { keywords: ["hrms", "3 boxes hrms", "human resource", "workforce", "hr software", "hr system"],
              answer: "<b>3 BOXES HRMS</b> is a smart, scalable Human Resource Management solution powered by MARQ AI. It manages the complete employee lifecycle - from recruitment and onboarding to payroll, performance management, learning, and workforce analytics.<br><br><b>Key Features:</b> AI-Powered Automation, Scalable Architecture, Enterprise-grade Security, Real-Time Workforce Insights, Customizable Workflows." },
            { keywords: ["hrms modules", "hr features", "hrms features", "hr module"],
              answer: "<b>3 BOXES HRMS - 8 Core Modules:</b><br>1. <b>Recruitment & Talent Acquisition</b> - AI-powered sourcing, resume screening, interview scheduling<br>2. <b>Employee Onboarding</b> - Digital docs, automated workflows, induction<br>3. <b>Attendance & Leave Management</b> - Real-time tracking, shift management<br>4. <b>Payroll Management</b> - Salary processing, tax, compliance, payslips<br>5. <b>Performance Management</b> - Goal setting, KPI tracking, AI insights<br>6. <b>Learning & Development</b> - Courses, skill assessments, certifications<br>7. <b>Employee Self-Service Portal</b> - Pay slips, leaves, HR requests<br>8. <b>Workforce Analytics & Reporting</b> - Dashboards, attrition analysis" },
            { keywords: ["why hrms", "hrms benefits", "hrms advantage", "choose hrms"],
              answer: "<b>Why Choose 3 BOXES HRMS?</b><br>- <b>AI-Powered Automation</b> - Eliminate manual HR tasks<br>- <b>Scalable Architecture</b> - Startup to enterprise<br>- <b>Enterprise-grade Security</b> - Role-based access, encryption<br>- <b>Real-Time Workforce Insights</b> - Data-driven HR decisions<br>- <b>Customizable Workflows</b> - Adapt to your unique policies" },
            { keywords: ["recruitment", "talent acquisition", "hiring", "applicant tracking"],
              answer: "Our <b>Recruitment & Talent Acquisition</b> module automates hiring with AI-powered candidate sourcing, resume screening, interview scheduling, and applicant tracking to reduce time-to-hire significantly." },
            { keywords: ["payroll", "salary", "compensation", "pay slip", "wages"],
              answer: "Our <b>Payroll Management</b> module handles salary processing, tax calculations, statutory compliance, overtime, bonuses, and automated payslip generation - ensuring timely, error-free payroll." },
            { keywords: ["performance management", "performance review", "appraisal", "kpi"],
              answer: "Our <b>Performance Management</b> module enables goal setting, continuous feedback, KPI tracking, periodic reviews, and AI-driven performance insights to build a culture of accountability and growth." },

            // ---------- AI ERP PLATFORMS ----------
            { keywords: ["erp", "ai erp", "enterprise resource", "resource planning", "erp platform"],
              answer: "Our <b>AI ERP Platform</b> provides finance, inventory, procurement, reporting, and role-based operational control in one unified platform. It integrates business processes, automates operations, and provides real-time AI-driven insights across departments." },
            { keywords: ["erp modules", "erp features", "erp module list"],
              answer: "<b>AI ERP - 8 Core Modules:</b><br>1. <b>Finance & Accounting</b> - Ledger, AP/AR, invoicing, tax, forecasting<br>2. <b>Procurement & Purchasing</b> - Vendor management, POs, cost optimization<br>3. <b>Inventory & Warehouse</b> - Stock tracking, demand forecasting<br>4. <b>Sales & Customer Management</b> - Order processing, insights<br>5. <b>Human Resource Management</b> - Integrated HR operations<br>6. <b>Manufacturing Management</b> - Production planning, BOM, quality control<br>7. <b>Supply Chain Management</b> - Route optimization, demand planning<br>8. <b>Project Management</b> - Task allocation, timeline, AI risk prediction" },
            { keywords: ["why erp", "erp benefits", "erp advantage", "choose erp"],
              answer: "<b>Why Choose AI ERP?</b><br>- <b>Unified Platform</b> - All business operations in one system<br>- <b>AI-Driven Insights</b> - Real-time analytics, predictive intelligence<br>- <b>Automated Workflows</b> - Reduce manual effort across departments<br>- <b>Scalable Architecture</b> - Grows with your business<br>- <b>Role-Based Access</b> - Secure operational control" },
            { keywords: ["finance accounting", "financial", "billing", "invoicing", "general ledger"],
              answer: "Our <b>Finance & Accounting</b> module handles general ledger, accounts payable/receivable, invoicing, billing, tax management, financial reporting, and AI-driven financial forecasting." },
            { keywords: ["supply chain", "logistics", "distribution", "shipping erp"],
              answer: "Our <b>Supply Chain Management</b> module manages end-to-end supply chain with AI-powered route optimization, demand planning, supplier coordination, and last-mile delivery." },

            // ---------- AI CRM PLATFORMS ----------
            { keywords: ["crm", "ai crm", "customer relationship", "sales crm", "lead management"],
              answer: "Our <b>AI CRM Platform</b> is a next-generation CRM that empowers businesses to build stronger customer connections, automate sales and marketing workflows, and deliver personalized AI-driven experiences.<br><br><b>Key Capabilities:</b> AI-Powered Customer Insights, End-to-End Sales Management, Automated Marketing, Seamless Omnichannel Engagement, Real-Time Reporting, and Scalability." },
            { keywords: ["crm modules", "crm features", "crm module list"],
              answer: "<b>AI CRM - 8 Core Modules:</b><br>1. <b>Lead Management</b> - AI scoring, capture, qualify, nurture leads<br>2. <b>Sales Pipeline & Deal Tracking</b> - Visual pipeline, real-time tracking<br>3. <b>Marketing Automation</b> - Email campaigns, social media, lead nurturing<br>4. <b>Customer Support & Helpdesk</b> - Tickets, SLA tracking, AI chat support<br>5. <b>Contact & Account Management</b> - 360-degree customer profiles<br>6. <b>Analytics & Reporting</b> - Customizable dashboards, AI reports<br>7. <b>Omnichannel Communication</b> - Email, chat, phone, social unified<br>8. <b>Workflow & Task Automation</b> - Automate repetitive tasks with AI" },
            { keywords: ["why crm", "crm benefits", "crm advantage", "choose crm"],
              answer: "<b>Why Choose AI CRM?</b><br>- <b>AI-Powered Insights</b> - Understand behavior, predict needs<br>- <b>End-to-End Sales</b> - Track leads, manage pipelines, close faster<br>- <b>Automated Marketing</b> - AI-driven campaigns<br>- <b>Omnichannel Engagement</b> - Consistent across all channels<br>- <b>Real-Time Reporting</b> - Live dashboards for decisions<br>- <b>Scalable</b> - Expand as business grows" },
            { keywords: ["lead management", "lead tracking", "lead generation", "sales leads"],
              answer: "Our <b>Lead Management</b> module captures, qualifies, and nurtures leads with AI-driven scoring and routing. AI prioritizes high-quality leads, automates follow-ups, and helps focus on the best opportunities." },
            { keywords: ["marketing automation", "email marketing", "campaign", "marketing"],
              answer: "Our <b>Marketing Automation</b> module enables targeted email campaigns, social media automation, lead nurturing workflows, A/B testing, and AI-powered audience segmentation for maximum ROI." },

            // ---------- AI VIRTUAL TRY-ON ----------
            { keywords: ["virtual try on", "try on", "virtual try-on", "virtual fitting", "ar try on", "virtual mirror"],
              answer: "Our <b>AI Virtual Try-On Platform</b> allows customers to virtually try products (clothing, accessories, eyewear, etc.) using AI-powered technology before purchasing. It improves shopping experience, reduces returns, and boosts conversions.<br><br><b>Powered by MARQ AI</b> - Leveraging computer vision and AR for a seamless virtual try-on experience." },
            { keywords: ["why virtual try on", "try on benefits", "virtual fitting room"],
              answer: "<b>Why Choose AI Virtual Try-On?</b><br>- <b>Enhanced Shopping Experience</b> - Try before you buy<br>- <b>Reduced Returns</b> - Confident purchase decisions<br>- <b>Higher Conversions</b> - Increased engagement and sales<br>- <b>AI-Powered Accuracy</b> - Realistic virtual try-on<br>- <b>Multi-Product Support</b> - Clothing, accessories, eyewear" },

            // ---------- AI ECOMMERCE PLATFORM ----------
            { keywords: ["ecommerce", "e-commerce", "ai ecommerce", "online store", "online shop", "ecommerce platform"],
              answer: "Our <b>AI eCommerce Platform</b> is a next-generation online commerce solution to create, manage, and scale digital storefronts with AI-powered automation, customer intelligence, and advanced commerce capabilities.<br><br><b>Key Features:</b> AI-Powered Personalization, Complete Store Management, Scalable Architecture, Secure Transactions, Real-Time Analytics, Automated Marketing." },
            { keywords: ["ecommerce modules", "ecommerce features", "store modules"],
              answer: "<b>AI eCommerce - 8 Core Modules:</b><br>1. <b>Store Management</b> - Storefront builder, themes, multi-language/currency<br>2. <b>Product Management</b> - Catalogs, bulk uploads, AI descriptions<br>3. <b>Customer Management</b> - Detailed profiles, relationship insights<br>4. <b>Order Management</b> - Automated processing, returns/exchanges<br>5. <b>Payment Management</b> - Multiple gateways, fraud detection<br>6. <b>Shipping & Logistics</b> - Real-time tracking, courier integration<br>7. <b>Offers & Promotions</b> - Coupons, flash sales, dynamic pricing<br>8. <b>Analytics & Reporting</b> - Sales performance, customer behavior" },
            { keywords: ["why ecommerce", "ecommerce benefits", "ecommerce advantage"],
              answer: "<b>Why Choose AI eCommerce?</b><br>- <b>AI Personalization</b> - Tailored product recommendations<br>- <b>Complete Store Management</b> - One platform for everything<br>- <b>Scalable Architecture</b> - Flexible growth<br>- <b>Secure Transactions</b> - Advanced payment security<br>- <b>Real-Time Analytics</b> - Sales and behavior insights<br>- <b>Automated Marketing</b> - AI-driven campaigns" },

            // ---------- CLOUD & DEVOPS SOLUTIONS ----------
            { keywords: ["cloud", "devops", "cloud computing", "cloud solution", "devops service", "cloud and devops", "cloud devops", "ci/cd", "cicd", "kubernetes", "docker"],
              answer: "Our <b>Cloud & DevOps Solutions</b> provide cloud infrastructure setup, CI/CD pipelines, containerization, monitoring, and automated deployment - helping you build, deploy, and scale applications efficiently.<br><br><b>Platforms:</b> AWS, Azure, GCP | <b>Powered by MARQ AI</b>" },
            { keywords: ["cloud devops modules", "cloud features", "devops features"],
              answer: "<b>Cloud & DevOps - Core Capabilities:</b><br>1. <b>Cloud Infrastructure Setup</b> - AWS, Azure, GCP architecture<br>2. <b>CI/CD Pipelines</b> - Automated build, test, deploy<br>3. <b>Containerization</b> - Docker, Kubernetes orchestration<br>4. <b>Monitoring & Observability</b> - Real-time logging, alerting<br>5. <b>Automated Deployment</b> - Zero-downtime with rollback<br>6. <b>Infrastructure as Code</b> - Terraform, CloudFormation" },
            { keywords: ["why cloud devops", "cloud benefits", "devops benefits"],
              answer: "<b>Why Choose Cloud & DevOps?</b><br>- <b>Faster Time-to-Market</b> - Automated delivery pipelines<br>- <b>Scalability</b> - Scale on demand<br>- <b>Reliability</b> - Automated testing and monitoring<br>- <b>Cost Optimization</b> - Efficient cloud resource utilization<br>- <b>Security</b> - Built-in compliance practices" },

            // ---------- MANUFACTURING AI SOLUTIONS ----------
            { keywords: ["manufacturing ai", "manufacturing solution", "ai for manufacturing", "smart manufacturing", "industry 4", "predictive maintenance"],
              answer: "Our <b>Manufacturing AI Solutions</b> leverage AI to transform manufacturing with predictive maintenance, quality control, production optimization, and intelligent automation.<br><br><b>Powered by MARQ AI</b> - Reduce downtime, improve quality, optimize production through data-driven AI insights." },
            { keywords: ["manufacturing ai modules", "manufacturing features"],
              answer: "<b>Manufacturing AI - Core Capabilities:</b><br>1. <b>Predictive Maintenance</b> - Predict equipment failures before they happen<br>2. <b>Quality Control & Inspection</b> - Computer vision defect detection<br>3. <b>Production Optimization</b> - AI scheduling and resource allocation<br>4. <b>Supply Chain Intelligence</b> - Demand forecasting, inventory optimization<br>5. <b>Digital Twin</b> - Virtual replicas of manufacturing processes<br>6. <b>Process Automation</b> - RPA + AI for repetitive tasks" },
            { keywords: ["why manufacturing ai", "manufacturing ai benefits"],
              answer: "<b>Why Choose Manufacturing AI?</b><br>- <b>Reduced Downtime</b> - Predictive maintenance prevents breakdowns<br>- <b>Improved Quality</b> - AI inspection catches defects early<br>- <b>Production Efficiency</b> - Optimized scheduling and resources<br>- <b>Cost Savings</b> - Less waste, less rework<br>- <b>Data-Driven Decisions</b> - Real-time shop floor to management insights" },

            // ---------- WEB & MOBILE APPS ----------
            { keywords: ["web app", "mobile app", "app development", "android app", "ios app", "mobile application", "web development", "mobile development", "web and mobile", "cross platform"],
              answer: "Our <b>Web & Mobile Apps Development</b> delivers cross-platform applications with polished UX, secure API layers, and in-app automation. We build AI-powered apps for <b>Android and iOS</b> with modern frameworks and AI integration.<br><br><b>Powered by MARQ AI</b> - Performant, scalable apps with intelligent features." },
            { keywords: ["web mobile features", "app features", "app capabilities"],
              answer: "<b>Web & Mobile Apps - Core Capabilities:</b><br>1. <b>Cross-Platform Development</b> - Build once, deploy everywhere<br>2. <b>UI/UX Design</b> - Polished, premium user interfaces<br>3. <b>Secure API Development</b> - Authentication & encryption<br>4. <b>In-App AI Features</b> - Chatbots, recommendations, voice<br>5. <b>Performance Optimization</b> - Fast loading, smooth interactions<br>6. <b>App Store Deployment</b> - End-to-end publishing support" },
            { keywords: ["why web mobile", "app development benefits"],
              answer: "<b>Why Choose Web & Mobile Development?</b><br>- <b>Cross-Platform Efficiency</b> - One codebase, multiple platforms<br>- <b>AI-Integrated</b> - Built-in intelligent features<br>- <b>Secure & Scalable</b> - Enterprise-grade architecture<br>- <b>Premium UX</b> - Polished design for engagement<br>- <b>End-to-End Service</b> - Design to deployment and maintenance" },

            // ---------- NATURAL LANGUAGE PROCESSING ----------
            { keywords: ["nlp", "natural language", "natural language processing", "text analysis", "sentiment", "language processing", "nlp solution", "nlp service"],
              answer: "Our <b>NLP Solutions</b> provide text classification, sentiment analysis, entity extraction, and multilingual understanding to unlock insights from unstructured text and speech data.<br><br><b>Powered by MARQ AI</b> - Process human language at scale using advanced NLP models." },
            { keywords: ["nlp features", "nlp modules", "nlp capabilities"],
              answer: "<b>NLP Solutions - Core Capabilities:</b><br>1. <b>Text Classification</b> - Categorize documents automatically<br>2. <b>Sentiment Analysis</b> - Understand customer opinions and emotions<br>3. <b>Entity Extraction</b> - Identify names, dates, locations<br>4. <b>Multilingual Understanding</b> - Multiple languages<br>5. <b>Document Summarization</b> - Condense long documents<br>6. <b>Speech-to-Text</b> - Convert spoken language to text" },
            { keywords: ["why nlp", "nlp benefits"],
              answer: "<b>Why Choose NLP Solutions?</b><br>- <b>Scale Language Processing</b> - Handle millions of documents<br>- <b>Real-Time Insights</b> - Instant sentiment and intent analysis<br>- <b>Multilingual Support</b> - Operate across global markets<br>- <b>Custom Models</b> - Fine-tuned for your domain<br>- <b>Easy Integration</b> - API-ready NLP services" },

            // ---------- RECOMMENDATION ENGINES ----------
            { keywords: ["recommendation", "recommendation engine", "recommendation system", "personalization", "suggest", "product recommendation"],
              answer: "Our <b>Recommendation Engines</b> use smart filtering and ranking systems that analyze user behavior and preferences to deliver highly personalized product, content, and service recommendations.<br><br><b>Powered by MARQ AI</b> - Right content to the right user at the right time." },
            { keywords: ["recommendation features", "recommendation modules"],
              answer: "<b>Recommendation Engines - Core Capabilities:</b><br>1. <b>Collaborative Filtering</b> - Based on similar user behavior<br>2. <b>Content-Based Filtering</b> - Based on item attributes<br>3. <b>Hybrid Models</b> - Combined for better accuracy<br>4. <b>Real-Time Personalization</b> - Dynamic as users browse<br>5. <b>A/B Testing</b> - Optimize strategies<br>6. <b>Multi-Channel Delivery</b> - Web, mobile, email, push" },
            { keywords: ["why recommendation", "recommendation benefits"],
              answer: "<b>Why Choose Recommendation Engines?</b><br>- <b>Higher Engagement</b> - Personalized content keeps users engaged<br>- <b>Increased Conversions</b> - Relevant recommendations drive sales<br>- <b>Real-Time Adaptation</b> - Learns from user interactions<br>- <b>Multi-Channel</b> - Consistent across platforms<br>- <b>Scalable</b> - Handle millions of users and items" },

            // ---------- RAG & ENTERPRISE KNOWLEDGE SYSTEMS ----------
            { keywords: ["rag", "knowledge system", "enterprise knowledge", "knowledge base", "retrieval augmented", "rag system"],
              answer: "Our <b>RAG & Enterprise Knowledge Systems</b> use Retrieval-Augmented Generation pipelines that connect your enterprise data to LLMs, enabling accurate, context-aware answers from your knowledge base.<br><br><b>Powered by MARQ AI</b> - Combine company data with AI for accurate, context-aware answers." },
            { keywords: ["rag features", "rag modules", "knowledge system features"],
              answer: "<b>RAG & Enterprise Knowledge - Core Capabilities:</b><br>1. <b>Document Ingestion</b> - Process PDFs, docs, web pages, databases<br>2. <b>Vector Search</b> - Semantic search across knowledge base<br>3. <b>Context-Aware Answers</b> - Grounded in your data<br>4. <b>Multi-Source Integration</b> - CRM, ERP, databases, wikis<br>5. <b>Access Control</b> - Role-based permissions<br>6. <b>Continuous Learning</b> - Knowledge base stays updated" },
            { keywords: ["why rag", "rag benefits", "knowledge system benefits"],
              answer: "<b>Why Choose RAG & Enterprise Knowledge?</b><br>- <b>Accurate AI Answers</b> - Grounded in your actual data<br>- <b>Reduce Hallucinations</b> - Factual, sourced responses<br>- <b>Unified Knowledge</b> - Single source of truth<br>- <b>Secure</b> - Access controls for sensitive data<br>- <b>Scalable</b> - Handle growing knowledge bases" },

            // ---------- PREDICTIVE ANALYTICS & ML ----------
            { keywords: ["predictive analytics", "prediction", "forecasting", "trend analysis", "predictive model", "machine learning", "ml"],
              answer: "Our <b>Predictive Analytics & Machine Learning</b> services forecast demand, detect anomalies, and optimize operations with custom ML models trained on your historical data for data-driven decision making.<br><br><b>Powered by MARQ AI</b> - Advanced ML models for classification, regression, clustering, and recommendation." },
            { keywords: ["predictive features", "ml features", "predictive modules"],
              answer: "<b>Predictive Analytics & ML - Core Capabilities:</b><br>1. <b>Demand Forecasting</b> - Predict future demand<br>2. <b>Anomaly Detection</b> - Identify unusual patterns and fraud<br>3. <b>Customer Behavior Prediction</b> - Anticipate needs and churn<br>4. <b>Custom ML Models</b> - Classification, regression, clustering<br>5. <b>Model Training & Deployment</b> - End-to-end ML pipeline<br>6. <b>BI Dashboards</b> - Interactive visual analytics" },
            { keywords: ["why predictive", "predictive benefits", "ml benefits"],
              answer: "<b>Why Choose Predictive Analytics & ML?</b><br>- <b>Data-Driven Decisions</b> - Backed by predictions<br>- <b>Proactive Operations</b> - Anticipate problems before they occur<br>- <b>Custom Models</b> - Built for your data and domain<br>- <b>Real-Time Predictions</b> - Live scoring at scale<br>- <b>Continuous Improvement</b> - Models retrain over time" },

            // ---------- AI SOLUTIONS (MAIN) ----------
            { keywords: ["ai solutions", "ai service", "artificial intelligence solution", "ai capabilities"],
              answer: "Our <b>AI Solutions</b> empower businesses through AI, ML, Automation, and Data-Driven Intelligence:<br>- AI Chatbots & Virtual Assistants<br>- Machine Learning Solutions<br>- Intelligent Process Automation<br>- Computer Vision Solutions<br>- Predictive Analytics<br>- Intelligent Document Processing<br>- Data Analytics & Business Intelligence<br>- Custom AI Application Development" },
            { keywords: ["why ai solutions", "ai solutions benefits", "key benefits"],
              answer: "<b>Why Choose AI Solutions?</b><br>- <b>Intelligent Automation</b> - Automate tasks, improve productivity<br>- <b>Custom AI Development</b> - Tailored for your challenges<br>- <b>Data-Driven Decisions</b> - Transform data into insights<br>- <b>Scalable & Future-Ready</b> - Flexible AI architectures<br>- <b>Seamless Integration</b> - Connect to existing systems<br>- <b>Enhanced CX</b> - Personalized AI interactions<br><br><b>Key Benefits:</b> Increased Efficiency, Data-Driven Decisions, Enhanced CX, Cost Reduction, Predictive Intelligence" },
            { keywords: ["computer vision", "image recognition", "object detection", "visual ai"],
              answer: "Our <b>Computer Vision Solutions</b> use AI to analyze visual data - quality inspection, object detection, facial recognition, document processing, visual search, and video analytics." },
            { keywords: ["intelligent document", "idp", "document processing", "ocr"],
              answer: "Our <b>Intelligent Document Processing (IDP)</b> uses AI, OCR, and NLP to extract, classify, and process data from documents - invoices, contracts, forms - turning unstructured data into actionable insights." },
            { keywords: ["data analytics", "business intelligence", "bi", "dashboard", "reporting"],
              answer: "Our <b>Data Analytics & BI</b> services transform raw data into actionable insights through AI-powered analytics and interactive dashboards with custom reports and KPI tracking." },
            { keywords: ["custom ai", "custom solution", "bespoke", "tailored"],
              answer: "We specialize in <b>Custom AI Application Development</b> - tailored AI solutions from ideation to deployment, designed for your unique business challenges and goals." },

            // ---------- AI AGENTS & AGENTIC WORKFLOWS ----------
            { keywords: ["ai agent", "agentic", "agent workflow", "autonomous agent", "ai agents", "agentic workflow"],
              answer: "Our <b>AI Agents & Agentic Workflows</b> are autonomous AI agents that orchestrate multi-step workflows, make decisions, and execute tasks across systems with minimal human intervention.<br><br><b>8 Agent Types:</b> Customer Agents, Reasoning & Planning, Workflow Automation, Visual Analysis, Data Analysis, Document Intelligence, Research & Knowledge, Multi-Agent Systems." },
            { keywords: ["ai agent types", "agentic features", "agent capabilities"],
              answer: "<b>AI Agents - 8 Types:</b><br>1. <b>Autonomous Customer Agents</b> - 24/7 complex interaction handling<br>2. <b>Reasoning & Planning</b> - Multi-step reasoning, strategic planning<br>3. <b>Agentic Workflow Automation</b> - End-to-end business process automation<br>4. <b>Visual Analysis Agents</b> - Computer vision monitoring<br>5. <b>Data Analysis & Insight</b> - Reports and BI on demand<br>6. <b>Document Intelligence</b> - Automated document extraction<br>7. <b>Research & Knowledge</b> - Market research, competitive intelligence<br>8. <b>Multi-Agent Architecture</b> - Collaborative agent ecosystems" },
            { keywords: ["why ai agents", "agentic benefits", "agent benefits"],
              answer: "<b>Why Choose AI Agents?</b><br>- <b>Autonomous Execution</b> - Reason and execute independently<br>- <b>Specialized Roles</b> - Custom agents for specific functions<br>- <b>Multi-Agent Collaboration</b> - Work together on complex tasks<br>- <b>Minimal Human Oversight</b> - Self-directed execution<br>- <b>Scalable Intelligence</b> - Add agents as needs grow<br>- <b>Real-Time Decisions</b> - Instant intelligent actions" },

            // ---------- CONVERSATIONAL AI ----------
            { keywords: ["conversational ai", "chatbot", "chat bot", "virtual assistant", "ai assistant", "ai chat", "ai chatbot"],
              answer: "Our <b>Conversational AI</b> delivers intelligent chatbots and virtual assistants powered by NLP that understand context, handle complex dialogues, and deliver human-like interactions. We build chatbots for customer support, sales, and internal workflows." },

            // ---------- GENERATIVE AI ----------
            { keywords: ["generative ai", "gen ai", "content generation", "ai content", "genai", "generative"],
              answer: "Our <b>Generative AI Solutions</b> provide custom LLM-powered solutions for content generation, document summarization, creative design, and knowledge synthesis tailored to your domain." },

            // ---------- INTELLIGENT AUTOMATION ----------
            { keywords: ["intelligent automation", "automation solution", "rpa ai", "workflow automation"],
              answer: "Our <b>Intelligent Automation</b> combines RPA, AI decisioning, and process orchestration to eliminate repetitive tasks and accelerate business outcomes with process discovery, automated execution, and continuous optimization." },

            // ---------- CUSTOM AI MODEL DEVELOPMENT ----------
            { keywords: ["custom ai model", "custom ml model", "ai model development", "fine tune", "custom model"],
              answer: "Our <b>Custom AI Model Development</b> delivers purpose-built AI models designed from scratch or fine-tuned for your specific domain, data, and performance requirements with full ownership and control." },

            // ---------- AI INTEGRATION ----------
            { keywords: ["integration", "integrate", "system integration", "ai integration", "embed ai"],
              answer: "Our <b>AI Integration</b> seamlessly embeds AI into your current tech stack with API-first integration, middleware connectors, and minimal-disruption deployment. We bridge legacy infrastructure and cutting-edge AI." },
            { keywords: ["integration features", "integration modules"],
              answer: "<b>AI Integration - Core Capabilities:</b><br>1. <b>Legacy Modernization</b> - Wrap old systems with AI APIs<br>2. <b>API & Microservices</b> - RESTful APIs, secure architecture<br>3. <b>Data Pipeline Architecture</b> - ETL for clean data flow<br>4. <b>Security & Governance</b> - GDPR, HIPAA compliance<br>5. <b>Real-Time Data Sync</b> - Live streaming data<br>6. <b>Cloud-Hybrid Deployment</b> - Cloud + on-premise<br>7. <b>Edge AI</b> - Deploy on IoT/edge devices<br>8. <b>Custom RPA & AI Workflows</b> - RPA + AI intelligence" },
            { keywords: ["why integration", "integration benefits"],
              answer: "<b>Why Choose AI Integration?</b><br>- <b>Minimal Disruption</b> - Non-invasive, operations continue<br>- <b>Future-Proof</b> - Swap AI models without changing systems<br>- <b>Unified Data</b> - Break down silos, single source of truth<br>- <b>Cost-Effective</b> - Enhance current investments with AI<br>- <b>Enhanced Interoperability</b> - Cross-generation communication<br>- <b>Rapid Deployment</b> - Pre-built connectors" },
            { keywords: ["legacy system", "modernization", "old system", "system upgrade"],
              answer: "Our <b>Legacy Modernization</b> wraps older systems with AI APIs, enabling smart features without rewriting core code - saving time and cost." },

            // ---------- IT CONSULTING ----------
            { keywords: ["it consulting", "consulting", "technology consulting", "tech advisory", "consultant"],
              answer: "Our <b>IT Consulting</b> provides architecture strategy, system modernization, cloud migration, and platform governance. We identify the right technology strategies, optimize systems, plan digital transformation, and implement AI solutions." },

            // ---------- SECURITY & TECHNICAL ----------
            { keywords: ["security", "safe", "secure", "data protection", "privacy", "gdpr", "hipaa"],
              answer: "All products built with <b>enterprise-grade security</b>: role-based access control, data encryption, GDPR/HIPAA compliance, and robust security & governance frameworks." },
            { keywords: ["scalable", "scale", "enterprise", "small business", "startup", "company size"],
              answer: "Our solutions are built on <b>scalable architecture</b> for organizations of all sizes - from startups to large enterprises. We adapt to your needs and budget." },
            { keywords: ["technology", "tech stack", "technologies used", "framework"],
              answer: "Cutting-edge technologies: <b>AI, ML, NLP, Computer Vision, Cloud (AWS, Azure, GCP)</b>, and modern web/mobile frameworks." },

            // ---------- PRICING & TRIALS ----------
            { keywords: ["price", "pricing", "cost", "how much", "fee", "budget", "quote"],
              answer: "Pricing varies by product, size, and requirements. Contact us at <b>info@marqaitech.com</b> or call <b>+91 8147952705</b> for a customized quote!" },
            { keywords: ["demo", "trial", "free trial", "start trial"],
              answer: "Start a <b>free trial</b> by clicking the Start Free Trial button on our website, or contact <b>info@marqaitech.com</b> / <b>+91 8147952705</b> to schedule a demo!" },
            { keywords: ["free", "free service", "free services", "free product", "free products", "is it free", "any free", "do you have free", "free plan", "free tier", "no cost", "free of cost", "free version"],
              priority: 100,
              answer: "Thank you for your interest in <b>MARQ AI</b>.<br><br>Currently, we do not offer free products or free services. Our solutions are provided based on your business requirements and subscription plan.<br><br>For pricing, product demonstrations, or business inquiries, please contact our team:<br><br><b>MARQ AI</b><br>Phone: <b>+91 8029910716</b><br>Email: <a href='mailto:info@marqai.com'>info@marqai.com</a><br>Website: <a href='http://www.marqai.com' target='_blank'>www.marqai.com</a><br><br>For office address details, please contact our support team, and they will assist you with the latest office location information." },
            { keywords: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "offer", "offers", "discount", "discounts", "sale", "deal", "deals", "coupon", "promo", "promotion", "cashback", "reduction", "percent off", "percentage off"],
              priority: 100,
              answer: "Thank you for your interest in <b>MARQ AI</b>.<br><br>Currently, we do not have any offers on our products or services.<br><br>For any query, please contact our team:<br><br><b>MARQ AI</b><br>Phone: <b>+91 8029910716</b><br>Email: <a href='mailto:enquiry@marqaitech.com'>enquiry@marqaitech.com</a><br>Website: <a href='http://www.marqai.com' target='_blank'>www.marqai.com</a>" },

            // ---------- SUPPORT ----------
            { keywords: ["support", "help", "after sales", "maintenance", "technical support"],
              answer: "We provide <b>24/7 dedicated support</b> for all clients. Reach us: <b>Phone:</b> +91 8147952705 | <b>Email:</b> info@marqaitech.com" },

            // ---------- CAREERS ----------
            { keywords: ["career", "job", "jobs", "work", "employment", "hiring", "apply", "vacancy", "openings", "careers"],
              answer: "Visit the <b>Careers</b> section to apply! <b>At MARQ AI:</b><br>- <b>Cutting-Edge AI Work</b> - Real-world AI products for enterprises globally<br>- <b>Rapid Career Growth</b> - Mentorship, clear growth paths<br>- <b>Global Exposure</b> - Teams and clients spanning 12+ countries<br><br><b>Founded 2019</b> - A fast-growing AI company where your work makes real impact." },
            { keywords: ["hiring process", "interview process", "how to apply", "recruitment process"],
              answer: "<b>4-Step Hiring Process:</b><br>1. <b>Apply Online</b> - Submit resume and why MARQ AI excites you<br>2. <b>Initial Screening</b> - 30-min call with talent team<br>3. <b>Technical Assessment</b> - Coding, system design, or case studies<br>4. <b>Welcome Aboard</b> - Meet leadership, receive offer, join onboarding" },

            // ---------- SPECIFIC INTENTS ----------
            { keywords: ["build chatbot", "want chatbot", "chatbot for business", "need bot"],
              answer: "We specialize in <b>Conversational AI</b> - intelligent chatbots with NLP for human-like interactions, context understanding, and seamless escalation. Contact us to get started!" },
            { keywords: ["need hrms", "hr software", "payroll system", "leave management"],
              answer: "<b>3 BOXES HRMS</b> is perfect! Recruitment, onboarding, attendance, payroll, performance, learning, workforce analytics - all AI-powered. Contact us for a free trial!" },
            { keywords: ["need erp", "erp software", "business management system"],
              answer: "<b>AI ERP Platform</b> is ideal! Finance, procurement, inventory, sales, HR, manufacturing, supply chain, project management - all AI-powered. Contact us!" },
            { keywords: ["need crm", "crm software", "customer management", "sales software"],
              answer: "<b>AI CRM Platform</b> is perfect! Lead management, sales pipeline, marketing automation, support, analytics, omnichannel - all AI-powered. Contact us!" },

            // ---------- GREETINGS & CLOSINGS ----------
            { keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings"],
              answer: "Hello! Welcome to <b>MARQ AI</b>. How can I help you today? Ask about our <b>Products</b> (HRMS, ERP, CRM, Virtual Try-On, eCommerce), <b>Services</b> (AI Solutions, Cloud & DevOps, Manufacturing AI, NLP, RAG, Predictive Analytics), <b>Pricing</b>, <b>Careers</b>, or anything else!" },
            { keywords: ["thank", "thanks", "thank you", "appreciate"],
              answer: "You are welcome! Feel free to ask if you need anything else." },
            { keywords: ["bye", "goodbye", "see you", "have a nice day", "take care"],
              answer: "Goodbye! Have a great day. Come back anytime!" },
            { keywords: ["who are you", "your name", "what are you", "are you a bot"],
              answer: "I am <b>MARQ AI</b>, the virtual assistant for MARQ AI Tech Pvt Ltd. I can help you with our AI products, services, pricing, careers, and more!" }
        ];

        // ========== KEYWORD MATCHING ENGINE ==========
        var bestMatch = null;
        var bestScore = 0;

        for (var i = 0; i < qaDatabase.length; i++) {
            var qa = qaDatabase[i];
            var score = 0;
            for (var j = 0; j < qa.keywords.length; j++) {
                var kw = qa.keywords[j].toLowerCase();
                if (text.indexOf(kw) !== -1) {
                    score += kw.length;
                }
                // Partial word matching
                var kwWords = kw.split(/\s+/);
                var inputWords = text.split(/\s+/);
                var matchCount = 0;
                for (var k = 0; k < kwWords.length; k++) {
                    if (kwWords[k].length > 2) {
                        for (var m = 0; m < inputWords.length; m++) {
                            if (inputWords[m].indexOf(kwWords[k]) !== -1 || kwWords[k].indexOf(inputWords[m]) !== -1) {
                                matchCount++;
                                break;
                            }
                        }
                    }
                }
                if (matchCount > 0 && matchCount < kwWords.length) {
                    score += matchCount * 0.5;
                }
            }
            var entryPriority = qa.priority || 1;
            var bestPriority = bestMatch ? (bestMatch.priority || 1) : 1;
            var effectiveScore = score * entryPriority;
            var bestEffective = bestScore * bestPriority;
            if (effectiveScore > bestEffective) {
                bestScore = score;
                bestMatch = qa;
            }
        }

        if (bestScore > 1 && bestMatch) {
            return bestMatch.answer;
        }

        // ========== FALLBACK ==========
        var fallbacks = [
            "Thank you for your interest in <b>MARQ AI</b>.<br><br>I did not quite understand that. You can ask about our <b>Products</b> (HRMS, ERP, CRM, Virtual Try-On, eCommerce), <b>Services</b> (AI Solutions, Cloud & DevOps, Manufacturing AI, NLP, RAG, Predictive Analytics), <b>Pricing</b>, <b>Careers</b>, or <b>Contact</b> info.<br><br>For any query, please contact:<br><b>MARQ AI</b> | Phone: <b>+91 8029910716</b> | Email: <a href='mailto:enquiry@marqaitech.com'>enquiry@marqaitech.com</a> | <a href='http://www.marqai.com' target='_blank'>www.marqai.com</a>",
            "Thank you for your interest in <b>MARQ AI</b>.<br><br>Not sure about that. Try asking about our <b>AI products</b>, <b>HRMS</b>, <b>CRM</b>, <b>ERP</b>, <b>AI Agents</b>, <b>Cloud & DevOps</b>, <b>Manufacturing AI</b>, or <b>NLP Solutions</b>!<br><br>For any query, please contact:<br><b>MARQ AI</b> | Phone: <b>+91 8029910716</b> | Email: <a href='mailto:enquiry@marqaitech.com'>enquiry@marqaitech.com</a> | <a href='http://www.marqai.com' target='_blank'>www.marqai.com</a>",
            "Thank you for your interest in <b>MARQ AI</b>.<br><br>I am still learning! I can help with <b>products, services, pricing, company info, careers, and management team</b>.<br><br>For any query, please contact:<br><b>MARQ AI</b> | Phone: <b>+91 8029910716</b> | Email: <a href='mailto:enquiry@marqaitech.com'>enquiry@marqaitech.com</a> | <a href='http://www.marqai.com' target='_blank'>www.marqai.com</a>"
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

});



    // Force white color on hamburger & header icons after feather.js renders
    function forceWhiteIcons() {
        document.querySelectorAll('.hamberger-button svg, .header-btn svg, .search-area-btn svg').forEach(svg => {
            svg.style.stroke = '#ffffff';
            svg.style.color = '#ffffff';
        });
        document.querySelectorAll('.offcanvas-bars span').forEach(span => {
            span.style.backgroundColor = '#ffffff';
        });
    }

    // Run after feather icons load
    setTimeout(forceWhiteIcons, 500);
    setTimeout(forceWhiteIcons, 1500);
    setTimeout(forceWhiteIcons, 3000);

    // Also run on click (for hamburger)
    document.querySelector('.hamberger-button')?.addEventListener('click', forceWhiteIcons);



    // searchbar js code


const siteData = [
    { title: "3 BOXES HRMS", url: "aihrms.html" },
    { title: "AI ERP", url: "aierp.html" },
    { title: "AI CRM", url: "aicrms.html" },
    { title: "AI Virtual Try-On", url: "virtual-try-on.html" },
    { title: "Services", url: "services.html" },
    { title: "Products", url: "products.html" },
    { title: "Careers", url: "careers.html" },
    { title: "Contact Us", url: "contact-white.html" }
];

const searchInput = document.getElementById("searchInput1");
const suggestions = document.getElementById("searchSuggestions");
const searchBtn = document.getElementById("searchBtn");

// Live Suggestions
searchInput.addEventListener("keyup", function() {

    const query = this.value.toLowerCase().trim();
    suggestions.innerHTML = "";

    if(query === "") return;

    const results = siteData.filter(item =>
        item.title.toLowerCase().includes(query)
    );

    if(results.length > 0){

        results.forEach(item => {

            const div = document.createElement("div");
            div.className = "item";
            div.innerHTML = item.title;

            div.onclick = function() {
                window.location.href = item.url;
            };

            suggestions.appendChild(div);
        });

    } else {

        suggestions.innerHTML =
            '<div class="no-result">No matching product or service found</div>';
    }
});

// Search Function
function performSearch() {

    const query = searchInput.value.toLowerCase().trim();

    if(query === "") {
        alert("Please enter a search term.");
        return;
    }

    const match = siteData.find(item =>
        item.title.toLowerCase().includes(query)
    );

    if(match) {
        window.location.href = match.url;
    } else {
        alert("No matching product or service found.");
    }
}

// Search button click
searchBtn.addEventListener("click", performSearch);

// Enter key search
searchInput.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        performSearch();
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function(e) {
    if(!searchInput.contains(e.target) &&
       !suggestions.contains(e.target)) {
        suggestions.innerHTML = "";
    }
});



function openChat() {
        var popup = document.getElementById('ai-chat-popup');
        
        // FORCE OPEN: We set styles directly on the element
        // This overrides any CSS conflicts
        popup.style.display = 'flex';
        popup.style.opacity = '1';
        popup.style.visibility = 'visible';
        popup.style.transform = 'translateY(0)';
    }

    function closeChat() {
        var popup = document.getElementById('ai-chat-popup');
        
        // FORCE CLOSE: Simply display none
        popup.style.display = 'none';
    }


    








