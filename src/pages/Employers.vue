<template>
  <div>
    <div class="d-flex justify-content-between">
        <b-form-select v-model="perPage" :options="options"></b-form-select>
        <b-form-select @change="filter()" v-model="selectSection" :options="$store.state.sections">
            <b-form-select-option value="all">All</b-form-select-option>
        </b-form-select>
        <b-form-select @change="filter()" v-model="selectGander" :options="gender">
            <b-form-select-option value="all">All</b-form-select-option>
        </b-form-select>
        <Modal/>
    </div>
    <b-table :per-page="perPage"
      :current-page="currentPage" select-mode="single" ref="selectableTable"
      selectable @row-selected="oneEmployer" small :fields="fields" :items="$store.state.employers" responsive="sm">
      
      <template #cell(action)="row">
        <b-button @click="deleteEmployer(row.item.id)" variant="danger">
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        </b-button>
      </template>
    </b-table>
    <div class="d-flex justify-content-end">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal"
  export default {
    components:{
        Modal
    },
    data() {
      return {
        options: [3, 5, 10, 100,],
        perPage: 5,
        currentPage: 1,
        selectSection: 'all',
        selectGander: 'all',
        fields: [
          { key: 'id', label: 'Index' },
          { key: 'fullname', label: 'Full Name' },
          'position',
          'section',
          'gender',
          'birthday',
          "action"
        ],
        gender: [{text:"Male", value:"male"}, {text:"Famale", value:"famale"}]
      }
    },
    methods:{
        filter(){
            this.$router.replace({ 
                    query: {
                        section: this.selectSection,
                        gender : this.selectGander
                    }
            })
            this.$store.commit("getFilter", this.query)
        },
        deleteEmployer(id){
            this.$store.commit("deleteEmployer", id)
            location.reload()
        },
        oneEmployer(item){
            this.$router.push(`/employer/${item[0].id}`)
        }
    },
    computed: {
      rows() {
        return this.$store.state.employers.length
      },
      query(){
          return this.$route.fullPath.replace(this.$route.path, '')
      }
    }
  }
</script>