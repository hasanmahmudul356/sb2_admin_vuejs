<template>
    <div class="bg-gradient-primary" style="height: 100vh;">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 offset-2">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create your own SCHOOL</h1>
                                </div>
                                <form @submit.prevent="submitForm(formObject)">
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
                                        <div class="col-md-12 form-group">
                                            <input v-model="formObject.password" name="password" placeholder="Password" type="text" class="form-control" v-validate="'required'">
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <input v-model="formObject.confirm_password" name="confirm_password" placeholder="Confirm Password" type="text" class="form-control" v-validate="'required'">
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-user btn-block">Registration</button>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link to="/forget-password" class="small" href="forgot-password.html">Forgot Password?</router-link>
                                </div>
                                <div class="text-center">
                                    <router-link class="small" to="/login">Already have an account? Login!</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import FormSection from "../components/FormSection";
    export default {
        name: "RegistrationComponent",
        components: {FormSection},
        data(){
            return{
                formData : {

                }
            }
        },
        methods : {
            submitLogin : function () {
                this.$router.push({path : 'dashboard'});
            }
        },
        created() {
            this.$store.dispatch('formSubmit', 'Mahmudul');
            console.log(this.urlGenerate('ssss'));
        }
    }
</script>

<style scoped>

</style>