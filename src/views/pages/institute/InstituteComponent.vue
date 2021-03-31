<template>
    <BaseTemplete>
        <InstituteModal modal-id="formModal"></InstituteModal>
        <PageTop title="Table">
            <a @click="openModal('formModal', 'Add new Institute')" class="btn btn-sm btn-outline-primary shadow-sm">
                <i class="fas fa-plus fa-sm text-white-50"></i>
                <span>Add New</span>
            </a>
        </PageTop>
        <Table title="Test Table" :thead="['SL','Name','Head of Institute','Ein no','Contact','Email','Action']">
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
                    <td>{{data.institute_name}}</td>
                    <td>{{data.head}}</td>
                    <td>{{data.ein_no}}</td>
                    <td>{{data.contact_no}}</td>
                    <td>{{data.email}}</td>
                    <td>
                        <a class="btn btn-outline-primary btn-circle"><i class="fa fa-eye"></i></a>
                        <a @click="editInformation(data)" class="btn btn-outline-warning btn-circle"><i class="fa fa-pencil-square-o"></i></a>
                        <a @click="deleteInformation(index, data.id)" class="btn btn-outline-danger btn-circle"><i class="fa fa-trash-o"></i></a>
                    </td>
                </tr>
            </template>
        </Table>
    </BaseTemplete>
</template>

<script>

    import BaseTemplete from "../../BaseTemplete";
    import PageTop from "../../components/PageTop";
    import Table from "../../components/Table";
    import InstituteModal from "./InstituteModal";
    export default {
        name: "InstituteComponent",
        components: {InstituteModal, Table, PageTop, BaseTemplete},
        data() {
            return {
                dataList: [
                    {
                        id : 1,
                        institute_name: 'Mahmudul',
                        head: 'Mahmudul',
                        ein_no: 'Mahmudul',
                        contact_no: 'Mahmudul',
                        email: 'Mahmudul',
                    }
                ]
            }
        },
        mounted() {
            this.$store.commit('modalTitle','Add New Institute');
            this.$store.commit('formObject',{
                institute_name : '',
                head : '',
                ein_no : '',
                contact_no : '',
                email : '',
                username : '',
                password : '',
                confirm_password : '',
            })
        },
        created() {

        }
    }
</script>

<style scoped>

</style>