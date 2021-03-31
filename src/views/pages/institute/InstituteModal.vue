<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form @submit.prevent="submitForm(formObject)">
                    <ModalHeader :modal-id="modalId"></ModalHeader>
                    <div class="modal-body">
                        <form-section title="Basic Information"></form-section>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <input v-model="formObject.institute_name" name="name" placeholder="Institute name" type="text" class="form-control" v-validate="'required'">
                            </div>
                            <div class="col-md-6 form-group">
                                <input v-model="formObject.head" name="head" placeholder="Head of Institute" type="text" class="form-control" v-validate="'required'">
                            </div>
                            <div class="col-md-6 form-group">
                                <input v-model="formObject.ein_no" name="ein_no" placeholder="EIN number" type="text" class="form-control" v-validate="'required'">
                            </div>
                            <div class="col-md-6 form-group">
                                <input v-model="formObject.roll_no" name="contact_no" placeholder="Contact no" type="text" class="form-control" v-validate="'required'">
                            </div>
                        </div>
                        <form-section title="Login Information"></form-section>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input v-model="formObject.email" name="email" placeholder="Email" type="text" class="form-control" v-validate="'required|email'">
                            </div>
                            <div class="col-md-6 form-group">
                                <input v-model="formObject.username" name="username" placeholder="Username" type="text" class="form-control" v-validate="'required'">
                            </div>
                            <div class="col-md-12 form-group" v-if="formType===1">
                                <input v-model="formObject.password" name="password" placeholder="Password" type="text" class="form-control" v-validate="'required'">
                            </div>
                            <div class="col-md-12 form-group" v-if="formType===1">
                                <input v-model="formObject.confirm_password" name="confirm_password" placeholder="Confirm Password" type="text" class="form-control" v-validate="'required'">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer text-right">
                        <button class="btn btn-outline-success" type="submit">Submit</button>
                        <a class="btn btn-outline-info" @click="closeModal(modalId)">Close</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ModalHeader from "../../components/Modal/ModalHeader";
    import FormSection from "../../components/FormSection";
    import ModalFooter from "../../components/Modal/ModalFooter";
    export default {
        name: "InstituteModal",
        components: {ModalFooter, FormSection, ModalHeader},
        props : {
            modalId : {
                required : false,
                type:[String],
                default : 'formModal',
            },
        },
        mounted() {
            // this.$store.commit('formData',{
            //     name : '',
            //     department_id : '',
            // })
        }
    }
</script>

<style scoped>

</style>