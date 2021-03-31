<template>
    <BaseTemplete>
        <Modal modal-id="formModal">
            <template>
                <form @submit.prevent="submitForm(formData)">
                    <ModalHeader></ModalHeader>
                    <div class="modal-body">
                        <form-section title="Basic & Contact Information"></form-section>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <input placeholder="Name" type="text" v-model="formData.name" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input placeholder="Father name" type="text" v-model="formData.name" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input placeholder="Mother name" type="text" v-model="formData.name" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input placeholder="NID/Birth Registration No" type="text" v-model="formData.name" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input placeholder="Email" type="text" v-model="formData.name" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 form-group">
                                <select v-model="formData.name" class="form-control">
                                    <option value="">Nationality</option>
                                </select>
                            </div>
                            <div class="col-md-4 form-group">
                                <select v-model="formData.name" class="form-control">
                                    <option value="">Relagion</option>
                                </select>
                            </div>
                            <div class="col-md-4 form-group">
                                <select v-model="formData.name" class="form-control">
                                    <option value="">Blood group</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input placeholder="Family Contact" type="text" v-model="formData.name" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input placeholder="Personal Contact" type="text" v-model="formData.name" class="form-control">
                            </div>
                        </div>
                        <form-section title="Guardian Information"></form-section>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <input placeholder="Guardian Name" type="text" v-model="formData.name" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input placeholder="Relation" type="text" v-model="formData.name" class="form-control">
                            </div>
                            <div class="col-md-6 form-group">
                                <input placeholder="Contact number" type="text" v-model="formData.name" class="form-control">
                            </div>
                        </div>
                         <form-section title="Education History"></form-section>
                        <div class="row">
                            <div class="col-md-1 form-group text-center">SL</div>
                            <div class="col-md-3 form-group">
                                <input type="text" class="form-control" placeholder="Education name">
                            </div>
                            <div class="col-md-2 form-group">
                                <input type="text" class="form-control" placeholder="Board">
                            </div>
                            <div class="col-md-2 form-group">
                                <input type="text" class="form-control" placeholder="Year">
                            </div>
                            <div class="col-md-2 form-group">
                                <input type="text" class="form-control" placeholder="Result">
                            </div>
                            <div class="col-md-2 form-group">
                                <a class="btn btn-outline-primary btn-circle">
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a class="btn btn-outline-primary btn-circle">
                                    <i class="fa fa-trash"></i>
                                </a>
                            </div>
                        </div>
                        <form-section title="Address Information"></form-section>
                        <div class="row">
                            <div class="col-md-12">
                                <span>Present Address</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">Division</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">District</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">Upozilla</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">Union</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-group">
                                <textarea class="form-control" rows="1" placeholder="Present Address"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <span>Permanent Address</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">Division</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">District</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">Upozilla</option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">
                                <select class="form-control">
                                    <option value="">Union</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-group">
                                <textarea class="form-control" rows="1" placeholder="Permanent Address"></textarea>
                            </div>
                        </div>
                    </div>
                    <ModalFooter modal-id="formModal">
                        <button class="btn btn-outline-success" type="submit">Submit</button>
                    </ModalFooter>
                </form>
            </template>
        </Modal>
        <PageTop title="Table">
            <a @click="openModal('formModal', 'Add new student')" class="btn btn-sm btn-outline-primary shadow-sm">
                <i class="fas fa-plus fa-sm text-white-50"></i>
                <span>Add New</span>
            </a>
        </PageTop>
        <Table title="Test Table" :thead="['SL','Name','Email','Phone','Action']">
            <template slot="filter">
                <div class="col-md-2">
                    <select class="form-control">
                        <option>Select</option>
                    </select>
                </div>
            </template>
            <template slot="tbody">
                <tr v-for="(data, index) in dataList" :key="data.id">
                    <td>{{index+1}}</td>
                    <td>{{data.name}}</td>
                    <td>{{data.email}}</td>
                    <td>{{data.phone}}</td>
                    <td>
                        <a href="#" class="btn btn-outline-primary btn-circle"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="btn btn-outline-warning btn-circle"><i
                                class="fas fa-exclamation-triangle"></i></a>
                        <a href="#" class="btn btn-outline-danger btn-circle"><i class="fas fa-trash"></i></a>
                    </td>
                </tr>
            </template>
        </Table>
    </BaseTemplete>
</template>

<script>
    import BaseTemplete from "../BaseTemplete";
    import PageTop from "../components/PageTop";
    import Table from "../components/Table";
    import Modal from "../components/Modal";
    import ModalHeader from "../components/Modal/ModalHeader";
    import ModalFooter from "../components/Modal/ModalFooter";
    import FormSection from "../components/FormSection";

    export default {
        name: "TableComponent",
        components: {FormSection, ModalFooter, ModalHeader, Modal, Table, PageTop, BaseTemplete},
        data() {
            return {
                formDataz: {
                    name: '',
                    department_id: '',
                    section: '',
                },
                dataList: [
                    {
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },
                    {
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>