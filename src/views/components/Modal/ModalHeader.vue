<template>
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modelTitle}}</h5>
        <button class="close" type="button" @click="closeModal(modalId)">
            <span aria-hidden="true">×</span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ModalHeader",
        props : {
            modalId : {
                type:[String],
                default : 'formModal',
            }
        },
        computed:{
            modelTitle : function () {
                return this.$store.getters.model_title;
            }
        }
    }
</script>

<style scoped>

</style>