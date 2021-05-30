<template>
    <div>
        <h2>{{$store.state.employer.fullname}}</h2>
        <b-form @submit="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label="Fullname:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.fullname"
                    type="text"
                    placeholder="Enter fullname"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Your Section:"
                    label-for="input-1"
                     class="w-100"
                >
                    <b-form-select class="w-100 p-1" v-model="form.section" :options="$store.state.sections" required></b-form-select>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Your Position:"
                    label-for="input-1"
                     class="w-100"
                >
                    <b-form-select class="w-100 p-1" v-model="form.position" :options="$store.state.positions" required></b-form-select>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Your Gender:"
                    label-for="input-1"
                    class="w-100"
                >
                    <b-form-select class="w-100 p-1" v-model="form.gender" required>
                        <b-form-select-option value="male">Male</b-form-select-option>
                        <b-form-select-option value="famale">Famale</b-form-select-option>
                    </b-form-select>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Your Birthday:"
                    label-for="input-1"
                    class="w-100"
                >
                    <!-- <b-form-datepicker id="example-datepicker" v-model="form.birthday" class="mb-2" required></b-form-datepicker> -->
                    <input class="w-100 p-2" v-model="form.birthday" type="date" name="input-1" id="input">
                </b-form-group>
                <b-button variant="success" class="my-2" type="submit">Update</b-button>
                </b-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          fullname: this.$store.state.employer.fullname,
          position: this.$store.state.employer.position,
          section: this.$store.state.employer.section,
          gender: this.$store.state.employer.gender,
          birthday: this.$store.state.employer.birthday
        }
      }
    },
    methods:{
        onSubmit(event) {
        this.$store.commit("updateEmployer", {id: this.$route.params.id, body: this.form})
        this.$router.push('/employers')
        this.form.fullname = ''
        this.form.position = ''
        this.form.section = ''
        this.form.gender = ''
        this.form.birthday = ''
      }
    },
    mounted(){
        this.$store.commit('getOneEmployer', this.$route.params.id)
    }
}
</script>