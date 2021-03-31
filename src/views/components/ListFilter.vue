<template>
    <div class="row">
        <div class="col-md-2">
            <input type="text" class="form-control" placeholder="Search">
        </div>
        <slot></slot>
        <div class="col-md-1">
            <a  href="#" class="btn btn-primary btn-circle">
                <i class="fa fa-search-plus"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListFilter"
    }
</script>

<style scoped>

</style>