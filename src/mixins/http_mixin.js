export default {
    data() {
        return {
            formData: {},
            SelectFilter: {},
        }
    },
    methods: {
        getDataList: function (page = 1) {
            const _this = this;
            var listParameters = {
                per_page: 20,
                page: page,
            };
            var data_params = Object.assign(this.SelectFilter, listParameters, this.$store.state.Filter);
            _this.requestToServer(_this.urlGenerate(), 'get', {}, data_params, function (retData) {
                if (parseInt(retData.status) === 2000) {
                    _this.$store.state.DataList = retData.result;
                } else {
                    _this.$store.state.DataList = [];
                    _this.$toastr(retData.type, retData.message, 'Warning');
                }
            }, true);
        },
        submitForm: function (formData = {}, model = false, callDataList = true, resetForm = true) {
            const _this = this;
            console.log(formData);
            var URL = '';
            var method = 'post';
            if (_this.$store.state.currentFromModel === 2) {
                URL = _this.urlGenerate() + _this.$store.state.updateId + '/';
                method = 'put';
            } else {
                URL = _this.urlGenerate();
                method = 'post';
            }

            this.$validator.validate().then(valid => {
                if (valid) {
                    _this.requestToServer(URL, method, formData, {}, function (retData) {
                        if (parseInt(retData.status) === 2000) {
                            _this.$store.state.currentFromModel = 1;
                            _this.$toastr(retData.type, retData.message, _this.capitalize(retData.type));
                            if (model) {
                                _this.closeModal(model);
                            }
                            if (callDataList){
                                _this.getDataList();
                            }
                            if (resetForm){
                                _this.resetForm(formData);
                            }
                        }else if(parseInt(retData.status) === 3000){
                            _this.$toastr(retData.type, retData.message, _this.capitalize(retData.type));
                            _this.assignValidationError(retData.result);
                        }
                    }, true);
                }
            });
        },
        editData: function (data, updateId, model = 'createModal') {
            const _this = this;
            var edit_data = [];
            Object.assign(edit_data, data);
            _this.$set(_this.formData, edit_data);
            console.log(_this.formData);
            _this.$store.state.updateId = updateId;
            _this.$store.state.currentFromModel = 2;
            _this.showAllPage = true;
            _this.openModal(model);
        },
        getRequiredData: function (key_array = []) {
            const _this = this;
            _this.requestToServer(_this.urlGenerate('required/'), 'post', key_array, {}, function (retData) {
                _this.$store.state.requiredDataList = retData.result;
            });
        },
        requestToServer: function (route, method, parameter = {}, data_params = false, callback = null, loader = true) {
            const _this = this;
            if (loader) {
                _this.$store.state.httpRequest = true;
            }
            _this.axios({
                method: method,
                url: route,
                data: parameter,
                params: data_params
            }).then(function (response) {
                _this.$store.state.httpRequest = false;
                if (typeof callback === 'function') {
                    callback(response.data);
                }
            }).catch(function (error) {
                var retData = error.response.data;
                _this.$store.state.httpRequest = false;
                if (retData.message !== undefined) {
                    _this.$toastr('error', retData.message, 'Error');
                }
                if (parseInt(retData.status) === 6001){
                    window.location = '/dashboard'
                }
            });
        },
    },
}