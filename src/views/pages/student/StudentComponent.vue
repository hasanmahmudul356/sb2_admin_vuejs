<template>
    <BaseTemplete>
        <StudentModal modal-id="formModal"></StudentModal>
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
                        <a href="#" class="btn btn-outline-primary btn-circle"><i class="fa fa-facebook-f"></i></a>
                        <a href="#" class="btn btn-outline-warning btn-circle"><i class="fa fa-exclamation-triangle"></i></a>
                        <a href="#" class="btn btn-outline-danger btn-circle"><i class="fa fa-trash"></i></a>
                    </td>
                </tr>
            </template>
        </Table>
    </BaseTemplete>
</template>

<script>

    import BaseTemplete from "../../BaseTemplete";
    import StudentModal from "./StudentModal";
    import PageTop from "../../components/PageTop";
    import Table from "../../components/Table";
    export default {
        name: "StudentComponent",
        components: {Table, PageTop, StudentModal, BaseTemplete},
        data() {
            return {
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
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },{
                        name: 'Mahmudul',
                        email: 'Hasan',
                        phone: '02222222',
                    },
                ]
            }
        },
        mounted() {
            this.$store.commit('formObject',{
                department : '',
                nationality : '',
                religion : '',
                blood_group : '',
                guardians : [{name : '', relation : '', contact : ''}],
                educations : [{name : '', board : '', year : '', result : ''}],
                addresses : [
                        {type : 'Present', division : '', district : '', upazilla: '', union : '', address:''},
                        {type : 'Permanent', division : '', district : '', upazilla: '', union : '', address:''}
                    ],
            })
        },
        created() {

        }
    }
</script>

<style scoped>

</style>