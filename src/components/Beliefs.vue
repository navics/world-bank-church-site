<template>
  <v-container fluid>

    <v-card img="static/img/refuges.jpg" class="elevation-13" style="padding:20px;color:white" flat>
      <v-card style="color:white" color="transparent" flat max-width="500">
        <h1>Beliefs</h1>
        <br />
        <h3>Seventh-day Adventists accept the Bible as the only source of our beliefs. We consider our movement to be
          the result of the Protestant conviction Sola Scriptura—the Bible as the only standard of faith and practice for
          Christians.
        </h3>
        <br />
        <p>Currently, Adventists hold 28 fundamental beliefs that can be organized into six categories—the doctrines of
          God, man, salvation, the church, the Christian life and last day events. In each teaching, God is the
          architect, who in wisdom, grace and infinite love, is restoring a relationship with humanity that will last
          for eternity.
        </p>
      </v-card>
    </v-card>
    <br />
    <br />
    <br />
    <h1 class="text-md-center">Our Beliefs</h1>

    <v-container>

      <v-layout class="" row wrap>
        <v-flex xs12 lg5 mb-3>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="(beliefs,i) in beliefsData" :key="i">
              <div slot="header">{{ beliefs.title }}</div>
              <v-card>
                <v-card-text>{{ beliefs.text }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>

      </v-layout>
    </v-container>


  </v-container fluid>
</template>

<script>
  export default {
    data() {
      return {
        beliefsData: [
          { title: "The Holy Scriptures", text: `God is love, power, and splendor—and God is a mystery. His ways are far beyond us, but He still reaches out to us. God is infinite yet intimate, three yet one, all-knowing yet all-forgiving.` },
          { title: "The Trinity", text: `God is love, power, and splendor—and God is a mystery. His ways are far beyond us, but He still reaches out to us. God is infinite yet intimate, three yet one, all-knowing yet all-forgiving.` },
          { title: "The Father", text: `God is love, power, and splendor—and God is a mystery. His ways are far beyond us, but He still reaches out to us. God is infinite yet intimate, three yet one, all-knowing yet all-forgiving.` },
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
