<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar dark app class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer v-if="$breakpoint.xsOnly"></v-spacer>
      <v-toolbar-title class="brand">Craig Peckett</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip color="white" left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="dialog = true" icon>
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </template>
        <span class="primary--text">Contact Me</span>
      </v-tooltip>
      <!-- <v-btn @click="changeTheme" icon>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>-->
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app style="max-height: 100%">
      <v-list-item class="primary">
        <v-list-item-avatar>
          <v-img :src="require('@/assets/cartoon.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Craig Peckett</v-list-item-title>
          <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn @click="drawer = !drawer" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-list nav>
        <v-list-item link href="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group v-for="nav in navs" :key="nav.title" :prepend-icon="nav.icon" no-action>
          <template v-slot:activator>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </template>
          <v-list-item v-for="item in nav.items" :key="item.title" :href="item.link" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
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
        {{
        alert.message
        }}
      </v-alert>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer padless app absolute inset width="auto">
      <v-card dark flat tile class="primary text-center" width="100%">
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
            Created by
            <a
              href="https://www.craigpeckett.com/"
              target="_blank"
              class="brand white--text"
            >Craig Peckett</a>
          </span>
          - V{{ version }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import packageJson from "../package.json";
import { mapState, mapMutations } from "vuex";
import Dialog from "@/components/Dialog";

export default {
  components: {
    Dialog
  },
  data() {
    return {
      dialog: false,
      drawer: null,
      icon: "mdi-lightbulb-on",
      version: packageJson.version,
      navs: [
        // {
        //   title: "Games",
        //   icon: "mdi-gamepad-variant",
        //   items: [{ title: "Breakout", link: "/games/breakout" }]
        // }
      ],
      networks: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/peckett.io/"
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/peckett.io/"
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
</style>
