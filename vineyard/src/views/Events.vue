<template>
  <div class="events">
    <Hero
        hero-title="Events"
        :hero-background="require(`@/assets/wineglass.jpg`)"
        hero-description="&nbsp;"
    />
    <section class="section">
      <div class="event" v-for="(event, index) in events" :key="index">
        <div class="columns is-vcentered has-text-centered">
          <div class="column is-4">
            <img :src="require(`@/assets/${event.photo}`)" :alt="event.name">
          </div>
          <div class="column is-8">
            <h3 class="is-size-3" style="font-weight: bold;">{{ event.name }}</h3>
            <h4 class="is-size-4" style="font-weight: bold;">Date: {{ event.date }}</h4>
            <p style="width: 80%; margin: 0 auto;">
              {{ event.description }}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero';

export default {
  name: "Events",
  components: {
    Hero
  },
  data() {
    return {
      events:
      [
        {
          "name": "Hallowine",
          "date": "October 26th, 2021",
          "photo": "Hallowine_28.png",
          "description": "Think you're the best dresser in the city? Take a drive up to Marlowe Vineyards on Tuesday October 26th. Come dressed in your best halloween costume and enter the contest for a chance to win $5k. Our esteemed panel of judges will vote on the best costume of the night. After the competition our 6 judges will be offering themselves to the highest bidder for a romantic date night for 2. Ever wanted to talk to our owner Mr. Endeavour Jackson about a law you want passed? Now's your chance!"
        },
        {
          "name": "Awakening",
          "date": "October 31st, 2021",
          "photo": "Awakening.png",
          "description": "Description Needed"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>