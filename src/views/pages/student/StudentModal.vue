<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form @submit.prevent="submitForm(studentForm)">
                    <ModalHeader :modal-id="modalId"></ModalHeader>
                    <div class="modal-body">
                        <form-section title="Basic & Contact Information"></form-section>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <input v-model="studentForm.name" v-validate="'required'" placeholder="Name" type="text" class="form-control" name="name">
                            </div>
                            <div class="col-md-6 form-group">
                                <input v-model="studentForm.father_name" name="father_name" v-validate="'required'" placeholder="Father name" type="text" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input v-model="studentForm.mother_name" name="mother_name" v-validate="'required'" placeholder="Mother name" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input v-model="studentForm.nid" name="nid" v-validate="'required'" placeholder="NID/Birth Registration No" type="text" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input v-model="studentForm.email" name="email" v-validate="'required'" placeholder="Email" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 form-group">
                                <select class="form-control" v-model="studentForm.nationality" v-validate="'required'" name="nationality">
                                    <option value="">Nationality</option>
                                </select>
                            </div>
                            <div class="col-md-4 form-group">
                                <select class="form-control" v-model="studentForm.religion" v-validate="'required'" name="religion">
                                    <option value="">Religion</option>
                                </select>
                            </div>
                            <div class="col-md-4 form-group">
                                <select class="form-control" v-model="studentForm.blood_group">
                                    <option value="">Blood group</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input placeholder="Family Contact" type="text" class="form-control" v-model="studentForm.family_contact">
                            </div>
                            <div class="col-md-6 form-group">
                                <input placeholder="Personal Contact" type="text" class="form-control" v-model="studentForm.personal_contact">
                            </div>
                        </div>
                        <form-section title="Guardian Information"></form-section>
                        <div class="row">
                            <template v-for="(guardian, index) in studentForm.guardians">
                                 <div class="col-md-1 form-group">
                                    <label>{{index+1}}</label>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input placeholder="Guardian Name" type="text" class="form-control" v-validate="'required'" v-model="guardian.name" :name="'name'+index">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input placeholder="Relation" type="text" class="form-control" v-validate="'required'" v-model="guardian.relation" :name="'relation'+index">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input placeholder="Contact number" type="text" class="form-control" v-validate="'required'" v-model="guardian.contact" :name="'contact'+index">
                                </div>
                                <div class="col-md-2 form-group">
                                    <a @click="addRow(studentForm.guardians, studentForm.guardians[0])" class="btn btn-outline-primary btn-circle" v-if="studentForm.guardians.length===index+1">
                                        <i class="fa fa-plus"></i>
                                    </a>
                                    <a @click="deleteRow(studentForm.guardians, index)" class="btn btn-outline-danger btn-circle" v-if="studentForm.guardians.length > 1">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </div>
                            </template>
                        </div>
                         <form-section title="Education History"></form-section>
                        <div class="row">
                            <template v-for="(education, index) in studentForm.educations">
                                <div class="col-md-1 form-group text-center">{{index+1}}</div>
                                <div class="col-md-3 form-group">
                                    <input type="text" class="form-control" placeholder="Education name" v-validate="'required'" v-model="education.name" :name="'edu_name'+index">
                                </div>
                                <div class="col-md-2 form-group">
                                    <input type="text" class="form-control" placeholder="Board" v-validate="'required'" v-model="education.board" :name="'board'+index">
                                </div>
                                <div class="col-md-2 form-group">
                                    <input type="text" class="form-control" placeholder="Year" v-validate="'required'" v-model="education.year" :name="'year'+index">
                                </div>
                                <div class="col-md-2 form-group">
                                    <input type="text" class="form-control" placeholder="Result" v-validate="'required'" v-model="education.result" :name="'result'+index">
                                </div>
                                <div class="col-md-2 form-group">
                                    <a @click="addRow(studentForm.educations, studentForm.educations[0])" class="btn btn-outline-primary btn-circle" v-if="studentForm.educations.length===index+1">
                                        <i class="fa fa-plus"></i>
                                    </a>
                                    <a @click="deleteRow(studentForm.educations, index)" class="btn btn-outline-danger btn-circle" v-if="studentForm.educations.length > 1">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </div>
                            </template>
                        </div>
                        <form-section title="Address Information"></form-section>
                        <template v-for="(address, index) in studentForm.addresses">
                            <div class="row">
                            <div class="col-md-12">
                                <span>{{address.type}} Address</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 form-group">
                                <select class="form-control" v-model="address.division" v-validate="'required'" :name="'division'+index">
                                    <option value="">Division</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control" v-model="address.district" v-validate="'required'" :name="'district'+index">
                                    <option value="">District</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control" v-model="address.upazilla" v-validate="'required'" :name="'upazilla'+index">
                                    <option value="">Upozilla</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control" v-model="address.union" v-validate="'required'" :name="'union'+index">
                                    <option value="">Union</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-group">
                                <textarea v-model="address.address" class="form-control" rows="1" :placeholder="address.type+' Address'" v-validate="'required'" :name="'address'+index"></textarea>
                            </div>
                        </div>
                        </template>
                        <form-section title="Academic Information"></form-section>
                        <div class="row">
                            <div class="col-md-4 form-group">
                                <select v-model="studentForm.department" v-validate="'required'" class="form-control" name="department">
                                    <option value="">Department</option>
                                </select>
                            </div>
                            <div class="col-md-4 form-group">
                                <input v-model="studentForm.registration_no" name="registration_no" placeholder="Father name" type="text" class="form-control">
                            </div>
                            <div class="col-md-4 form-group">
                                <input v-model="studentForm.roll_no" name="roll_no" placeholder="Mother name" type="text" class="form-control">
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
        name: "StudentModal",
        components: {ModalFooter, FormSection, ModalHeader},
        props : {
            modalId : {
                required : false,
                type:[String],
                default : 'formModal',
            },
        },
        computed : {
            studentForm : function () {
                return this.$store.getters.formObject;
            }
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