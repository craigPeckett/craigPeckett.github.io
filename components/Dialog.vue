<template>
  <v-dialog v-model="dialog" :fullscreen="$vuetify.breakpoint.xsOnly" max-width="500">
    <v-card>
      <v-card-title class="primary">
        <h2>Contact</h2>
        <v-spacer></v-spacer>
        <v-btn @click="dialog=false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="contact.name" label="Name" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="contact.company" label="Company" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="contact.email" label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="contact.message" label="Message" counter required></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="error" text @click="dialog = false">Cancel</v-btn>
        <v-btn class="primary" text @click="send" :loading="loading">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      loading: false,
      contact: {
        name: "",
        company: "",
        email: "",
        message: ""
      }
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    async send() {
      this.loading = true
      this.$axios.$post("http://localhost:5000/", this.contact).then(res => {
        this.loading = false
        console.log(res)
      })
    }
  }
};
</script>