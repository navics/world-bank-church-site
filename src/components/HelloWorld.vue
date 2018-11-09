<template>
  <v-container fluid>

    <center>
      <v-card class="text-md-center" column align-center max-width="150" color="blue">
        <br />
        <v-card-text><img src="/static/img/logo.svg" style="width:100px" alt="world bank church" class="mb-5"></v-card-text>
      </v-card>
      <br />
      <blockquote max-width="100">
        &#8220;God is love, power, and splendor—and God is a mystery. <br /> His ways are far beyond us, but He
        still reaches out to us. <br /> God is infinite yet intimate, three yet one, all-knowing yet
        all-forgiving.&#8221;
        <footer>
          <small>
            <em>&mdash; Navicstein Rotciv</em>
          </small>
        </footer>
      </blockquote>
    </center>
    <br />
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <!-- carousel -->
        <v-carousel height="400">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
            <h3>
              <v-card max-width="500" flat id="carou-slid" v-html="item.text"></v-card>
            </h3>
          </v-carousel-item>
        </v-carousel>
        <br />




        <br />
        <br />

        <v-container fluid grid-list-md text-xs-center>

          <v-layout align-end justify-space-between wrap row fill-height>
            <v-flex v-for="blc in blocks" :key="i" sm6 xs12 md4>
              <v-card :to="blc.linkTo" :img="blc.img" style="color:white; margin: 0px !important;">
                <!--v-img :src="blc.img" aspect-ratio="2.75"></v-img-->
                <br />
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{blc.title}}</h3>
                    <div>{{blc.text}}</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>

          <br />
          <h1> Our Departments </h1>
          <br />

          <!-- department for mobile [small] devices only -->
          <v-layout class="hidden-md-and-up" align-end justify-space-between wrap row fill-height>
            <v-flex v-for="blc in timelineData" :key="i" sm6 xs12 md4>
              <v-card :to="blc.link" :img="blc.img" style="color:white;">
                <!--v-img :src="blc.img" aspect-ratio="2.75"></v-img-->
                <br />
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{blc.title}}</h3>
                    <div>{{blc.text}}</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>

          <!-- timeline -->
          <!-- only shows in bigger screens :( -->
          <v-timeline class="hidden-xs-only" align-top>
            <v-timeline-item v-for="(item, i) in timelineData" :color="item.color" :icon="item.icon" :key="i" fill-dot>
              <v-card :color="item.color" dark>
                <v-card-title class="title">{{ item.title }}</v-card-title>
                <v-card-text class="white text--primary">
                  <p>{{ item.text }} </p>
                  <v-btn :to="item.btn" :color="item.color" class="mx-0" outline>
                    Go
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <!-- / timeline -->


        </v-container>
      </v-layout>

    </v-slide-y-transition>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {

        timelineData: [
          {
            title: `Youth`,
            text: ` This site is designed to load very fast even in slow and unstable network conditions to save you data and time, this site (after the first time) has the ability to load offline even when your data isoff the purpose of this site is not for educational or fun purpose`,
            btn: `youth`,
            color: 'red lighten-2',
            icon: 'mdi-star',
            img: '/static/img/youth.jpg',
            link: 'make'
          },
          {
            title: `Children Ministry`,
            text: `God’s law in the Ten Commandments show us how to live and make clear our need for Jesus. Though the law shows us the path to follow and convicts us of sin, it’s about far more than just toeing the line.`,
            btn: `infant`,
            color: 'purple darken-1',
            icon: 'mdi-book-variant',
            img: '/static/img/infant.png',
            link: 'make'
          },
          {
            title: `Personal Ministry`,
            text: `From the Garden of Eden to the Tower of Babel, the destruction of Sodom to the Exodus from Egypt, God has always investigated before taking action`,
            btn: `pm`,
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            img: '/static/img/pm.png',
            link: ''
          },
          {
            title: `AMO`,
            text: `Adventist Men Organization has been established primarily to promote programmes and activities designed to foster the spiritual, intellectual, social, moral, health and physical well-being of students, working class, businessmen, professional men etc., to give them opportunities to understand the responsibilities of Adventist men and to engage them in evangelistic activities.`,
            btn: `amo`,
            color: 'indigo',
            icon: 'mdi-buffer',
            img: '/static/img/amo.png',
            link: ''
          },
          {
            title: `AWM`,
            text: `The Department of Women's Ministries exists to uphold, encourage, and challenge Adventist women in their pilgrimage as disciples of Jesus Christ and members of His world church.`,
            btn: `amo`,
            color: 'blue darken-1',
            icon: 'mdi-buffer',
            img: '/static/img/awm.png',
            link: ''
          }
        ],

        /******************/
        blocks: [{
          img: `static/img/q.jpg`,
          title: `OUR BELIEFS`,
          text: `Seventh-day Adventists accept the Bible as the only source of our beliefs. We consider our movement to be
                  the result of the Protestant conviction Sola Scriptura—the Bible as the only standard of faith and
                  practice
                  for Christians.`,
          linkTo: `beliefs`
        }, {
          img: `static/img/r.jpg`,
          title: `SPIRITUALITY`,
          text: `Many have tried to determine what constitutes the essential human endeavor. For some it is to be known and for others it is to be loved. For many it is to make a lasting mark on the world so that the impact of ones life continues to have significance.`,
          linkTo: `spirituality`
        }, {
          img: `static/img/w.jpg`,
          title: `Photo Gallery`,
          text: `Jesus left His followers with an epic mission: tell the world of His love and His promise to return. Also, they should love people the way He loved them.`,
          linkTo: `gallery`
        }],



        /**********************/
        items: [
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            text: ` <h3>My God loves without restraint...</h3>
          <p>Many have tried to determine what constitutes the essential human endeavor. For some it is to be known and
            for others it is to be loved. For many it is to make a lasting mark on the world so that the impact of
            one's life continues to have significance.
          </p>`
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            text: `<h3>My Life is a gift to be valued...</h3>
                <p>When the Creator breathed the breath of life into the nostrils of Earth’s first parents the act of giving human life was the culmination of a larger scope of work.</p>`
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            text: `<h3>My World is a place where people find hope...</h3>
                  <p>The ultimate demonstration of love is to serve. Setting aside our own agendas, in service we live out our commitment to the well being of others, often to our own discomfort.</p>`
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            text: `<h3> OUR BELIEFS</h3><p>Seventh-day Adventist beliefs are meant to permeate your whole life. Growing out of scriptures that paint a compelling portrait of God, you are invited to explore, experience and know the One who desires to make us whole.</p>`
          }
        ]
      };
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #carou-slid {
    padding: 30px;
    background: transparent;
    color: white;
  }
</style>
