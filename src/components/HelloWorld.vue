<template>
  <v-container fluid>

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

        
        <center>
          <v-card class="text-md-center" column align-center max-width="150" color="blue">
            <br />
            <v-card-text><img src="/static/img/logo.svg" style="width:100px" alt="world bank church" class="mb-5"></v-card-text>
          </v-card>
          <br/>
          <blockquote max-width="100">
            &#8220;God is love, power, and splendor—and God is a mystery. <br/> His ways are far beyond us, but He still reaches out to us. <br/> God is infinite yet intimate, three yet one, all-knowing yet all-forgiving.&#8221;
            <footer>
              <small>
                <em>&mdash; Navicstein Rotciv</em>
              </small>
            </footer>
          </blockquote>

        </center>


        <br />
        <br />
        <v-container fluid grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="blc in blocks" xs6>
              <v-card>
                <v-img :src="blc.img" aspect-ratio="2.75"></v-img>
                <br />
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{blc.title}}</h3>
                    <div>{{blc.text}}</div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn :to="blc.linkTo" color="orange">Read more</v-btn>
                </v-card-actions>
              </v-card>

            </v-flex>

          </v-layout>
          <br />
          <h1> Our Departments </h1>
          <br />

          <!-- timeline -->
          <v-timeline align-top>
            <v-timeline-item v-for="(item, i) in timelineData" :color="item.color" :icon="item.icon" :key="i" fill-dot>
              <v-card :color="item.color" dark>
                <v-card-title class="title">{{ item.title }}</v-card-title>
                <v-card-text class="white text--primary">
                  <p>{{ item.text }} </p>
                  <v-btn :to="item.btn" :color="item.color" class="mx-0" outline>
                    Read More
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
            text: `this is a `,
            btn: `youth`,
            color: 'red lighten-2',
            icon: 'mdi-star'
          },
          {
            title: `Children Ministry`,
            text: ``,
            btn: `infant`,
            color: 'purple darken-1',
            icon: 'mdi-book-variant'
          },
          {
            title: `Personal Ministry`,
            text: ``,
            btn: `pm`,
            color: 'green lighten-1',
            icon: 'mdi-airballoon'
          },
          {
            title: `AMO`,
            text: ``,
            btn: `amo`,
            color: 'indigo',
            icon: 'mdi-buffer'
          },
          {
            title: `AWM`,
            text: ``,
            btn: `amo`,
            color: 'blue darken-1',
            icon: 'mdi-buffer'
          }
        ],

        /******************/
        blocks: [{
          img: `https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg`,
          title: `OUR BELIEFS`,
          text: `Seventh-day Adventists accept the Bible as the only source of our beliefs. We consider our
                  movement to be
                  the result of the Protestant conviction Sola Scriptura—the Bible as the only standard of faith and
                  practice
                  for Christians.`,
          linkTo: `beliefs`
        }, {
          img: `https://www.adventist.org/fileadmin/_processed_/f/6/csm_bible-study-lessons_9b5726a173.jpg`,
          title: `SPIRITUALITY`,
          text: `Many have tried to determine what constitutes the essential human endeavor. For some it is to be known and for others it is to be loved. For many it is to make a lasting mark on the world so that the impact of ones life continues to have significance.`,
          linkTo: `spirituality`
        }, {
          img: `static/img/refuges.jpg`,
          title: `Photo Gallery`,
          text: ``,
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
