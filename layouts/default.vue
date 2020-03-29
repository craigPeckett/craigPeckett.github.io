<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar dark app class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.xsOnly"></v-spacer>
      <v-toolbar-title class="brand">Craig Peckett</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="dialog = true" icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <!-- <v-btn @click="changeTheme" icon>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>-->
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item class="primary">
        <v-list-item-avatar>
          <v-img :src="require('@/assets/me.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="navlink">Craig Peckett</v-list-item-title>
          <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn @click="drawer = !drawer" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav class="navlink">
        <v-list-item v-for="nav in navs" :key="nav.title" link :href="nav.link" @click>
          <v-list-item-icon>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-card-actions>
          <v-btn @click="dialog = true" class="primary" block text>Contact Me</v-btn>
        </v-card-actions>
      </template>
    </v-navigation-drawer>

    <!-- Contact Form -->
    <Dialog v-model="dialog" />

    <!-- Content -->
    <v-content>
      <v-alert v-model="alert.show" :type="alert.type" tile dismissible>
        {{alert.message}}
      </v-alert>
      <nuxt />
    </v-content>

    <!-- Footer -->
    <v-card dark flat tile class="primary text-center">
      <v-card-text>
        <v-btn
          v-for="network in networks"
          :key="network.icon"
          :href="network.link"
          target="_blank"
          class="mx-4"
          icon
        >
          <v-icon size="24px">{{ network.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        {{ new Date().getFullYear() }} -
        <span>
          <a href="mailto:me@craigpeckett.com" class="brand">peckett.io</a>
        </span>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Dialog from "@/components/Dialog";

export default {
  components: {
    Dialog
  },
  data() {
    return {
      dialog: false,
      drawer: false,
      icon: "mdi-lightbulb-on",
      navs: [
        {
          title: "Who am I?",
          icon: "mdi-account",
          link: "#who"
        },
        {
          title: "What can I do?",
          icon: "mdi-text-box-check",
          link: "#what"
        },
        {
          title: "How can I do it?",
          icon: "mdi-microsoft-visual-studio-code",
          link: "#how"
        },
        {
          title: "Where have I done it?",
          icon: "mdi-web",
          link: "#where"
        }
      ],
      networks: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/craigpeckett.io/"
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/craigpeckett.io/"
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/craig-peckett-337881128/"
        },
        { icon: "mdi-github", link: "https://github.com/craigPeckett" }
      ]
    };
  },
  computed: {
    drawerWidth() {
      return "100%";
    },
    ...mapState(["alert"])
  },
  methods: {
    changeTheme() {
      if (this.icon === "mdi-lightbulb-on") this.icon = "mdi-lightbulb-off";
      else this.icon = "mdi-lightbulb-on";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    ...mapMutations(["toggleAlert"])
  }
};
</script>
<style>
html {
  font-size: 16px;
}
.brand {
  font-family: "Lobster", cursive;
}
.v-application a {
  color: white;
}
</style>
