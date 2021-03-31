import $ from 'jquery';
import '../plugin/bootstrap'
import Cookies from "vue-cookies";

export default {
    data() {
        return {
            totalSlot: 1,
            activePage: 1,
            showAllPage: false,
            baseUrl: '',
            formDataArray: {}
        }
    },
    watch: {
        'errors': {
            handler: function (value) {
                var is_invalid = $('.is-invalid');
                $(is_invalid).removeAttr("title", '');
                $(is_invalid).removeClass('is-invalid');
                if (value.items.length > 0) {
                    value.items.forEach(function (val) {
                        var message = val.msg;
                        var target = $("[name='" + val.field + "']");
                        $(target).addClass('is-invalid');
                        $(target).attr("title", message.replace(val.field, ""));
                    });
                }
            },
            deep: true
        }
    },
    computed: {
        formType: function () {
            return this.$store.getters.formType;
        },
        formObject: function () {
            return this.$store.getters.formObject;
        }
    },
    methods: {
        assignLoginSession: function (retUserData) {
            Cookies.remove('auth_token');
            Cookies.remove('session_user');

            Cookies.set('auth_token', retUserData.key);
            Cookies.set('session_user', JSON.stringify(retUserData.user));
            this.$store.state.currentUser = retUserData.user;
        },
        openModal: function (modalName = 'createModal', title = false) {
            if (title) {
                this.$store.commit('modalTitle', title);
            }
            $('#' + modalName).modal({
                backdrop: 'static',
                keyboard: true,
                show: true
            });
            this.$validator.reset();
        },
        closeModal: function (modalName = 'createModal', resetForm = true, resetFormType = true) {
            const _this = this;
            this.$validator.reset();
            $('#' + modalName).modal('hide');
            this.$store.commit('formType', 1);
            if (resetForm) {
                this.$store.commit('formObject', {});
            }
            if (resetFormType) {
                _this.$store.state.formType = 1;
            }
        },
        toCamelCase: function (string) {
            return string.replace(/(?:_| |\b)(\w)/g, function ($1) {
                return $1.toUpperCase().replace('_', ' ');
            });
        },
        tooltipShow: function (field) {
            const _this = this;
            var element = $('[name="' + field + '"]');
            if (this.$validator.errors.has(field)) {
                $(element).addClass('input_error');
            } else {
                $(element).removeClass('input_error');
            }
            var message = '<div class="tooltip_error_message">' +
                '<span>' + this.$validator.errors.first(field) + '</span></div>';

            return {
                show: 1,
                content: this.$validator.errors.has(field) ? _this.toCamel(message) : '',
            };
        },
        addRow: function (object, pushEr) {
            if (typeof object === 'object') {
                object.push(this.resetForm(Object.assign({}, pushEr)));
            }
        },
        deleteRow: function (object, index) {
            object.splice(index, 1);
        },
        apiBaseUrl: function () {
            return process.env.VUE_APP_API_BASE_URL;
        },
        getUrl: function () {
            if (this.$route.meta.dataUrl !== undefined) {
                return this.$route.meta.dataUrl;
            }
            return '';
        },
        urlGenerate: function (customUrl = false) {
            var url = '';
            if (customUrl) {
                url = process.env.VUE_APP_API_BASE_URL + '/' + process.env.VUE_APP_API_VERSION + '/' + customUrl;
            } else {
                url = process.env.VUE_APP_API_BASE_URL + '/' + process.env.VUE_APP_API_VERSION + '/' + this.getUrl();
            }
            return url;
        },
        config: function (objectKey = false, key = false) {
            const _this = this;
            if ((objectKey && key) &&
                (_this.$store.state.Config[objectKey] !== undefined) &&
                (_this.$store.state.Config[objectKey][key] !== undefined)) {
                return _this.$store.state.Config[objectKey][key];
            } else {
                return '';
            }
        },
        access: function (key = false, objectKey = 'permission') {
            const _this = this;
            if ((objectKey && key) &&
                (_this.$store.state.Config[objectKey] !== undefined) &&
                _this.$store.state.Config[objectKey].includes(key)) {
                return true;
            } else {
                return false;
            }

        },
        capitalize: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        assignValidationError: function (errors) {
            const _this = this;
            $.each(errors, function (index, errorValue) {
                _this.$validator.errors.add({
                    id: index,
                    field: index,
                    name: index,
                    msg: errorValue[0],
                });
                _this.tooltipShow(index);
            })
        },
        resetForm: function (formData) {
            if (typeof formData == 'object') {
                Object.keys(formData).forEach(function (key) {
                    formData[key] = '';
                });
                return formData;
            }
        },
        editInformation: function (data) {
            this.$store.commit('formObject', data);
            this.$store.commit('formType', 2);
            this.openModal('formModal', 'Edit Institute');
        },
        deleteInformation: function (index, ID, url = false) {
            const _this = this;
            this.$swal({
                title: 'Are you sure..??',
                text: 'Data will be delete Permanently??',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '<i class="fa fa-check"></i>',
                cancelButtonText: '<i class="fa fa-close"></i>',
                showCloseButton: true,
            }).then((result) => {
                if (result.value) {
                    console.log('aaaa');
                }
            });
        },

    },
    mounted() {
        $(window).resize(function () {
            if ($(window).width() < 768) {
                $('.sidebar .collapse').collapse('hide');
            };

            // Toggle the side navigation when window is resized below 480px
            if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
                $("body").addClass("sidebar-toggled");
                $(".sidebar").addClass("toggled");
                $('.sidebar .collapse').collapse('hide');
            }
            ;
        });

        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
            if ($(window).width() > 768) {
                var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;
                this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                e.preventDefault();
            }
        });

        // Scroll to top button appear
        $(document).on('scroll', function () {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        // Smooth scrolling using jQuery easing
        $(document).on('click', 'a.scroll-to-top', function (e) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            e.preventDefault();
        });
    }
}