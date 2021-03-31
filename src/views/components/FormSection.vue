<template>
    <div class="row">
        <div class="col-md-12 form-group">
            <strong>{{title}}</strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FormSection",
        props: {
            title: {
                required: true,
                type: [String],
            }
        }
    }
</script>

<style scoped>

</style>