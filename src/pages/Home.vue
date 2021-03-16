<template>
    <div id="main">
        <Table :docentes="this.docentes"/>
    </div>
</template>
<script>
import { db } from '../db'
import Table from '../components/Table'
export default {
  name: 'Home',
  components: {
      Table,
  },
  data(){
    return {
      docentes: [],
      docenteId: '',
    }
  },
   firestore: {
      docentes: db.collection('docentes').orderBy('name')
  },
  methods:{
    async addDocente(){
      try {
        db.collection('docentes').add({
          name: 'AAAteste',
          email: 'romaiajr5@gmail.com',
          departmentName: 'Departamento de Ciências Exatas',
          departmentCode: 'DEXA'
        })
      } catch (e) {
        console.log(e)
      }
    },
    async removeDocente(){
      try {
        await db.collection('docentes')
          .doc(this.docenteId)
          .delete()
      } catch (e) {
        console.log(e)
      }
    },
    getId(docente){
      this.docenteId = docente.id
      console.log(this.docenteId)
    }
  }
}
</script>