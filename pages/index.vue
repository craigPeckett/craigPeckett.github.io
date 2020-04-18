<template>
  <v-container>
    <v-snackbar v-model="snackbar" :color="alert.type">
      {{ alert.message }}
      <v-btn icon @click="this.snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>

    <!-- <v-row id="who" class="text-center py-5" justify="center">
      <v-col cols="12">
        <h1>Who am I?</h1>
      </v-col>
      <v-col cols="12" sm="6" lg="4" xl="3">
        <v-avatar size="200">
          <v-img :src="require('@/assets/me.jpg')"></v-img>
        </v-avatar>
        <h2>Craig Peckett</h2>
        <v-card-text>
          Hello... my name is Craig and I am a full stack web developer based in
          Sydney. I love building web applications from start to finish
          primarily focusing on simplicity and efficiency.
        </v-card-text>
        <v-btn @click="dialog = true" class="primary" :block="$breakpoint.xsOnly">Contact Me</v-btn>
      </v-col>
    </v-row>-->

    <v-row justify="center" align="center" class="mb-10" :class="{'mt-10': $breakpoint.mdAndUp} ">
      <v-col cols="12" sm="6">
        <div :class="{'text-center': $breakpoint.xsOnly, 'text-right': $breakpoint.smAndUp}">
          <v-avatar size="250">
            <v-img :src="image"></v-img>
          </v-avatar>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <h1 class="header">
          Hi, I'm
          <span class="secondary--text primary px-2">Craig Peckett</span>
        </h1>
        <h1 class="mb-5 subheader">
          I love to
          <span class="primary--text secondary px-2">{{ subheader }}</span>
        </h1>
        <v-btn @click="dialog = true" class="primary" :block="$breakpoint.xsOnly">Contact Me</v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center py-5" justify="center">
      <v-col cols="12">
        <h1>What can I do?</h1>
      </v-col>
      <v-col v-for="item in what" :key="item.title" cols="12" sm="4" xl="3">
        <v-icon size="100" color="primary">{{ item.icon }}</v-icon>
        <h2 class="d-block">{{ item.title }}</h2>
        <v-card-text>{{ item.text }}</v-card-text>
      </v-col>
    </v-row>

    <v-row justify="center" class="py-5">
      <v-col cols="12">
        <h1 class="text-center">How can I do it?</h1>
      </v-col>
      <v-col v-for="(list, index) in computedHow" :key="index" cols="12" sm="6" md="4" xl="3">
        <v-list>
          <v-list-item v-for="item in computedHow[index]" :key="item.title">
            <v-list-item-icon>
              <v-icon :color="item.colour">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-tooltip color="primary" left>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" :href="item.link" target="_blank" icon>
                    <v-icon color="primary">mdi-information</v-icon>
                  </v-btn>
                </template>
                <span>{{ item.title }}</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" xl="6">
        <Chart v-if="$breakpoint.smAndUp" />
      </v-col>
    </v-row>

    <v-row class="py-5">
      <v-col cols="12" class="text-center">
        <h1>Where have I done it?</h1>
        <v-progress-circular :size="150" color="primary" indeterminate class="my-5"></v-progress-circular>
        <v-card-text>Projects coming soon...</v-card-text>
      </v-col>
    </v-row>

    <v-row class="py-5 mb-10" justify="center">
      <v-col cols="12" sm="8" md="6" xl="4" class="text-center">
        <h1>Why do I do it?</h1>
        <v-card-text>
          I do it because I love it! With a background in electronics I started teaching myself how to code
          about 4 years ago. Since then I have moved into a development role at work and have started building my own business on the side.
          I would love to help you get your business started too. I am forever expanding my skill set and I am dedicated to my work.
          If you have a project you would like to discuss, lets meet up for a coffee... my shout.
        </v-card-text>
        <v-btn @click="dialog = true" class="primary" :block="$breakpoint.xsOnly">Hmmm... Coffee</v-btn>
      </v-col>
    </v-row>
    <Dialog v-model="dialog" @snackbar="showSnackbar" />
  </v-container>
</template>
<script>
import Dialog from "@/components/Dialog";
import Chart from "@/components/Chart";
import { mapState } from "vuex";

export default {
  head() {
    return {
      titleTemplate: "%s - Home",
      meta: [
        {
          hid: "craigpeckett:home",
          name: "craigpeckett:home",
          content: "Craig Peckett - Home Page"
        }
      ]
    };
  },
  components: {
    Dialog,
    Chart
  },
  data() {
    return {
      snackbar: false,
      mounted: false,
      hover: false,
      contact: "white primary--text",
      dialog: false,
      subheader: "",
      subheaderArr: ["write code.", "solve problems.", "drink bee"],
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
          colour: "red",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
          icon: "mdi-language-css3",
          title: "CSS3",
          subtitle: "Cascading Style Sheets",
          colour: "blue",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          icon: "mdi-language-javascript",
          title: "Javascript",
          subtitle: "ECMAScript",
          colour: "yellow",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
          icon: "mdi-bootstrap",
          title: "Bootstrap",
          subtitle: "Component Library",
          colour: "purple",
          link: "https://getbootstrap.com/"
        },
        {
          icon: "mdi-sass",
          title: "Sass",
          subtitle: "CSS Language",
          colour: "pink",
          link: "https://sass-lang.com/"
        },
        {
          icon: "mdi-jquery",
          title: "JQuery",
          subtitle: "Javascript Library",
          colour: "blue",
          link: "https://jquery.com/"
        },
        {
          icon: "mdi-vuejs",
          title: "Vue JS",
          subtitle: "Javascript Framework",
          colour: "#41b883",
          link: "https://vuejs.org/"
        },
        {
          icon: "mdi-vuetify",
          title: "Vuetify",
          subtitle: "Vue UI Library",
          colour: "#1f96f2",
          link: "https://vuetifyjs.com/en/"
        },
        {
          icon: "mdi-nodejs",
          title: "Node JS",
          subtitle: "JavaScript Runtime",
          colour: "#3c873b",
          link: "https://nodejs.org/en/"
        },
        {
          icon: "mdi-firebase",
          title: "Firebase",
          subtitle: "Application Platform",
          colour: "#f37f0a",
          link:
            "https://firebase.google.com/docs/functions/get-started?authuser=1"
        },
        {
          icon: "mdi-leaf",
          title: "Mongo DB",
          subtitle: "Document Database",
          colour: "#3c873b",
          link: "https://www.mongodb.com/"
        },
        {
          icon: "mdi-nuxt",
          title: "Nuxt JS",
          subtitle: "Vue JS Framework",
          colour: "#41b883",
          link: "https://nuxtjs.org/"
        }
      ]
    };
  },
  mounted() {
    this.mounted = true;

    // Typewriter
    let char = 0,
      arr = 0,
      text = this.subheaderArr[arr].split(""),
      coffee = true,
      coffeeString = "coffee.",
      coffeeArr = coffeeString.split(""),
      coffeeCount = 0;

    setInterval(() => {
      if (char < text.length) {
        this.subheader += text[char];
        char++;
      } else {
        if (arr === 2) {
          if (this.subheader.length > 6 && coffee)
            this.subheader = this.subheader.slice(0, -1);
          else {
            coffee = false;
            if (coffeeCount < coffeeArr.length) {
              this.subheader += coffeeArr[coffeeCount];
              coffeeCount++;
            } else this.subheader = this.subheader.slice(0, -1);
          }
        } else this.subheader = this.subheader.slice(0, -1);
      }
      if (this.subheader.length === 0) {
        if (arr < this.subheaderArr.length - 1) arr++;
        else arr = 0;
        text = this.subheaderArr[arr].split("");
        char = 0;
        coffee = true;
        coffeeCount = 0;
      }
    }, 200);
  },
  computed: {
    computedHow() {
      if (this.mounted)
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return [this.how];
          case "sm":
          case "xl":
            let halfLength = Math.ceil(this.how.length / 2),
              firstHalf = this.how.slice(0, halfLength),
              secondHalf = this.how.slice(halfLength, this.how.length);
            return [firstHalf, secondHalf];
          case "md":
          case "lg":
            let thirdLength = Math.ceil(this.how.length / 3),
              firstThird = this.how.slice(0, thirdLength),
              secondThird = this.how.slice(thirdLength, thirdLength * 2),
              thirdThird = this.how.slice(thirdLength * 2, this.how.length);
            return [firstThird, secondThird, thirdThird];
          // let quarterLength = Math.ceil(this.how.length / 4),
          //   firstQuarter = this.how.slice(0, quarterLength),
          //   secondQuarter = this.how.slice(quarterLength, quarterLength * 2),
          //   thirdQuarter = this.how.slice(quarterLength * 2, quarterLength * 3),
          //   fourthQuarter = this.how.slice(quarterLength * 3, this.how.length);
          // return [firstQuarter, secondQuarter, thirdQuarter, fourthQuarter];
        }
    },
    image() {
      if (this.$vuetify.theme.dark) return require("@/assets/cartoon-dark.jpg");
      return require("@/assets/cartoon-light.png");
    },
    ...mapState(["alert"])
  },
  methods: {
    showSnackbar() {
      this.$emit("snackbar");
      this.snackbar = true;
    }
  }
};
</script>

<style>
h1,
h2 {
  font-family: "Bebas Neue", cursive;
}
</style>
