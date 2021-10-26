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
import {marloweEvents} from '@/data/events.js';

export default {
  name: "Events",
  components: {
    Hero
  },
  data() {
    return {
      events: marloweEvents
    }
  }
}
</script>

<style scoped>

</style>