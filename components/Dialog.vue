<template>
  <v-dialog v-model="dialog" :fullscreen="$breakpoint.xsOnly" max-width="500">
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
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="contact.name" label="Name" required :rules="nameRules"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="contact.company" label="Company"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="contact.email" label="Email" required :rules="emailRules"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="contact.message"
                  label="Message"
                  counter
                  required
                  :rules="messageRules"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
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
import { mapMutations } from "vuex";

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
      },
      valid: true,
      nameRules: [v => !!v || "Name is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      messageRules: [
        v => !!v || "Message is required",
        v =>
          (v && v.length >= 10) ||
          "Please type a message longer than 10 characters"
      ]
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
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$axios
          .$post("https://portfolio-server23.herokuapp.com/", this.contact)
          .then(res => {
            this.loading = false;
            this.dialog = false;
            this.toggleAlert(res);
            this.$emit("snackbar");
          });
      }
    },
    ...mapMutations(["toggleAlert"])
  }
};
</script>