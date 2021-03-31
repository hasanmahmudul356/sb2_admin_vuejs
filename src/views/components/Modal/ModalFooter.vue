<template>
    <div class="modal-footer text-right">
        <slot></slot>
        <a class="btn btn-outline-info" @click="closeModal(modalId)">Close</a>
    </div>
</template>

<script>
    export default {
        name: "ModalFooter",
        props : {
            modalId : {
                type:[String],
                default : 'formModal',
            }
        }
    }
</script>

<style scoped>

</style>