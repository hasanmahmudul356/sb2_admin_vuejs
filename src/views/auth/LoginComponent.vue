<template>
    <div class="bg-gradient-primary" style="height: 100vh;">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-6 offset-3">
                <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                 <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Login Here!</h1>
                    </div>
                    <form class="user" @submit.prevent="submitLogin()">
                        <div class="form-group row">
                            <div class="col-sm-12 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Username/Email">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control form-control-user" id="exampleInputEmail" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                    </form>
                    <hr>
                    <div class="text-center">
                        <router-link to="/forget-password" class="small" href="forgot-password.html">Forgot Password?</router-link>
                    </div>
                    <div class="text-center">
                        <router-link class="small" to="/registration">Still not register? Registration!</router-link>
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
    export default {
        name: "LoginComponent",
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