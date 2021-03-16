<template>
    <div id="teachers-table">
        <div class="container-fluid">
            <div class="row m-0">
                <div class="col-md-6 col-12">
                    <b-table 
                        id="docentes-table" 
                        striped 
                        hover 
                        :items="docentes" 
                        :fields="this.fields"
                        :per-page="perPage"
                        :current-page="currentPage">
                    </b-table>
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="docentes-table"
                        align="center"
                    ></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        docentes: Array,
    },
    data(){
        return{
            fields: [{label: "Nome", key:"name"},{label: "Email", key:"email"}, {label: "Departamento", key:"departmentCode"}],
            perPage: 15,
            currentPage: 1,
        }
    },
    computed: {
      rows() {
        return this.docentes.length
      }
    }
}
</script>