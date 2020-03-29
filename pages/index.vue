<template>
  <v-container>
    <v-row id="who" class="text-center" justify="center">
      <v-col cols="12">
        <h1>Who am I?</h1>
      </v-col>
      <v-col cols="12" sm="6">
        <v-avatar size="200">
          <v-img :src="require('@/assets/me.jpg')"></v-img>
        </v-avatar>
        <h2>Craig Peckett</h2>
        <v-card-text>
          Hello... my name is Craig and I am a full stack web developer based in
          Sydney. I love building web applications from start to finish
          primarily focusing on simplicity and efficiency.
        </v-card-text>
        <v-btn @click="dialog = true" class="primary" block>Contact Me</v-btn>
      </v-col>
    </v-row>

    <v-row id="what" class="text-center" justify="center">
      <v-col cols="12">
        <h1>What can I do?</h1>
      </v-col>
      <v-col v-for="item in what" :key="item.title" cols="12" sm="4">
        <v-icon size="100" color="primary">{{ item.icon }}</v-icon>
        <h2 class="d-block">{{ item.title }}</h2>
        <v-card-text>{{ item.text }}</v-card-text>
      </v-col>
    </v-row>

    <v-row id="how" justify="center">
      <v-col cols="12">
        <h1 class="text-center">How can I do it?</h1>
      </v-col>
      <v-col cols="12" sm="6">
        <v-list>
          <v-list-item v-for="item in how" :key="item.title" @click>
            <v-list-item-icon>
              <v-icon :color="item.colour">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row id="where">
      <v-col cols="12" class="text-center">
        <h1>Where have I done it?</h1>
        <v-progress-circular
          :size="150"
          color="primary"
          indeterminate
          class="mt-2"
        ></v-progress-circular>
        <v-card-text>Projects coming soon...</v-card-text>
      </v-col>
    </v-row>
    <Dialog v-model="dialog" />
  </v-container>
</template>
<script>
import Dialog from "@/components/Dialog";

export default {
  components: {
    Dialog
  },
  data() {
    return {
      dialog: false,
      what: [
        {
          icon: "mdi-tablet-cellphone",
          title: "Build",
          text:
            "I can build fully responsive web applications that work across all electronic devices and internet browsers."
        },
        {
          icon: "mdi-pencil",
          title: "Design",
          text:
            "I can design fast, simple websites that strengthens your company’s brand whilst presenting the ultimate user experience."
        },
        {
          icon: "mdi-account-check",
          title: "Customer Satisfaction",
          text:
            "I can provide a service of high quality and performance to gain 100% customer satisfaction or money back guaranteed."
        }
      ],
      how: [
        {
          icon: "mdi-language-html5",
          title: "HTML5",
          subtitle: "Hypertext Markup Language",
          colour: "red"
        },
        {
          icon: "mdi-language-css3",
          title: "CSS3",
          subtitle: "Cascading Style Sheets",
          colour: "blue"
        },
        {
          icon: "mdi-language-javascript",
          title: "Javascript",
          subtitle: "ECMAScript",
          colour: "yellow"
        },
        {
          icon: "mdi-bootstrap",
          title: "Bootstrap",
          subtitle: "Component Library",
          colour: "purple"
        },
        {
          icon: "mdi-sass",
          title: "Sass",
          subtitle: "CSS Language",
          colour: "pink"
        },
        {
          icon: "mdi-jquery",
          title: "JQuery",
          subtitle: "Javascript Library",
          colour: "blue"
        },
        {
          icon: "mdi-vuejs",
          title: "Vue JS",
          subtitle: "Javascript Framework",
          colour: "#41b883"
        },
        {
          icon: "mdi-vuetify",
          title: "Vuetify",
          subtitle: "Vue UI Library",
          colour: "#1f96f2"
        },
        {
          icon: "mdi-nodejs",
          title: "Node JS",
          subtitle: "JavaScript Runtime",
          colour: "#3c873b"
        },
        {
          icon: "mdi-firebase",
          title: "Firebase",
          subtitle: "Application Platform",
          colour: "#f37f0a"
        },
        {
          icon: "mdi-leaf",
          title: "Mongo DB",
          subtitle: "Document Database",
          colour: "#3c873b"
        },
        {
          icon: "mdi-nuxt",
          title: "Nuxt JS",
          subtitle: "Vue JS Framework",
          colour: "#41b883"
        }
      ]
    };
  },
};
</script>

<style>
h1,
h2,
.navlink {
  font-family: "Bebas Neue", cursive;
}
</style>
