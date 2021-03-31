<template>
    <div class="card shadow mb-4">
            <div class="card-header">
                <ListFilter>
                    <slot name="filter"></slot>
                </ListFilter>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th v-for="th in thead" :key="th">{{th}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <slot name="tbody"></slot>
                        </tbody>
                        <tfoot v-if="footer">
                            <tr>
                                <th v-for="th in thead" :key="th">{{th}}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
    import ListFilter from "./ListFilter";
    export default {
        name: "Table",
        components: {ListFilter},
        props : {
            title : {
                type : [String],
                default : 'Data Table',
            },
            footer : {
                type : [Boolean],
                default : false,
            },
            thead : {
                type : [Array],
                default : [],
            }
        }
    }
</script>

<style scoped>

</style>