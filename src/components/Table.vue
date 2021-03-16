<template>
  <div id="teachers-table">
    <!-- <button @click="addDocente()">add</button>
        <button @click="removeDocente()">rem</button> -->
    <b-container>
      <b-row id="search-filter" align-content="center">
        <b-form-input
          v-model="searchQuery"
          placeholder="Pesquisar"
        ></b-form-input>
        <b-form-select
          v-model="selectedDepartment"
          text-field="Teste"
          :options="departmentFilter"
          ><template v-slot:defaut>Teste</template></b-form-select
        >
      </b-row>
      <b-row align-content="center">
        <b-table
          id="docentes-table"
          striped
          hover
          :items="filteredList"
          :fields="this.fields"
          :per-page="perPage"
          :current-page="currentPage"
          @row-clicked="getId"
          class="border"
        >
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="docentes-table"
          align="center"
        ></b-pagination>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { db } from "../db";
export default {
  props: {
    docentes: Array,
  },
  data() {
    return {
      fields: [
        { label: "Nome", key: "name" },
        { label: "Email", key: "email" },
        { label: "Departamento", key: "departmentCode" },
      ],
      perPage: 15,
      currentPage: 1,
      docenteId: "",
      searchQuery: "",
      selectedDepartment: "",
    };
  },
  computed: {
    rows() {
      return this.docentes.length;
    },
    departmentFilter() {
      let departments = [""];
      this.docentes.map((item) => {
        if (!departments.includes("D" + item.departmentCode)) {
          departments.push("D" + item.departmentCode);
        }
      });
      return departments.sort();
    },
    filteredList() {
      if (this.selectedDepartment) {
        if (this.searchQuery) {
          return this.docentes.filter((item) => {
            return (
              item.name
                .toLowerCase()
                .includes(this.searchQuery.toLowerCase()) &&
              "d" + item.departmentCode.toLowerCase() ==
                this.selectedDepartment.toLowerCase()
            );
          });
        } else {
          return this.docentes.filter((item) => {
            return (
              "d" + item.departmentCode.toLowerCase() ==
              this.selectedDepartment.toLowerCase()
            );
          });
        }
      } else {
        if (this.searchQuery) {
          return this.docentes.filter((item) => {
            return item.name
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase());
          });
        } else return this.docentes;
      }
    },
  },
  methods: {
    async addDocente() {
      try {
        db.collection("docentes").add({
          name: "AAAteste",
          email: "romaiajr5@gmail.com",
          departmentName: "Departamento de Ciências Exatas",
          departmentCode: "DEXA",
        });
      } catch (e) {
        console.log(e);
      }
    },
    async removeDocente() {
      try {
        await db
          .collection("docentes")
          .doc(this.docenteId)
          .delete();
      } catch (e) {
        console.log(e);
      }
    },
    getId(docente) {
      console.log(docente);
      this.docenteId = docente.email;
      console.log(this.docenteId);
    },
  },
};
</script>
