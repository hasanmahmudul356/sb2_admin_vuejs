<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props : {
            modalId : {
                required : false,
                type:[String],
                default : 'formModal',
            },
        }
    }
</script>

<style scoped>

</style>