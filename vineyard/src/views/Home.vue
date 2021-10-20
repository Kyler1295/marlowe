<template>
  <div class="home">
    <Hero
        hero-title="Marlowe Vineyards"
        :hero-background="require(`@/assets/johny-goerend-pnigODapPek-unsplash.jpg`)"
        hero-description="The Jewel of Los Santos."
    />
    <section class="section">
      <div class="columns is-vcentered">
        <div class="column is-6">
          <img :src="require('@/assets/marlowe-photo.png')" alt="Marlowe Vineyard">
        </div>
        <div class="column is-6 has-text-centered is-centered">
          <h3 class="is-size-3" style="font-weight: bold;">About Us</h3>
          <p style="width: 80%; margin: 0 auto;">
            Marlowe Vineyards is the best place to take a break from the city. Life in the big city can be busy, but up here at the Vineyard it is nothing but luxury and peace.
            Whether you need a break from your job as a mechanic, a glass of wine after a hard shift at Mount Zonah, or a place to spend your hard earned PD cash, we've got it for you.
          </p>
          <router-link to="/about" tag="a" class="button is-dark mr-3 mt-3">Learn More About Us</router-link>
          <router-link to="/events" tag="a" class="button is-dark ml-3 mt-3">See Our Events</router-link>
        </div>
      </div>
    </section>
    <hr />
    <section class="section">
      <div class="columns is-vcentered">
        <div class="column is-8 has-text-centered">
          <h3 class="is-size-3" style="font-weight: bold;">Upcoming Events</h3>
          <h4 class="is-size-3 festive" style="width: 80%; margin: 0 auto;">
            Marlowe Hallowine Event
          </h4>
          <p class="mt-3" style="width: 80%; margin: 0 auto;">
            Think you're the best dresser in the city? Take a drive up to Marlowe Vineyards on Tuesday October 26th.
            <br /><br />
            Come dressed in your best halloween costume and enter the contest for a chance to win $5k. Our esteemed panel of judges will vote on the best costume of the night.
            <br /><br />
            After the competition our 6 judges will be offering themselves to the highest bidder for a romantic date night for 2. Ever wanted to talk to our owner Mr. Endeavour Jackson about a law you want passed? Now's your chance!
            <br /><br />
            <router-link to="/events" tag="a" class="button is-dark mt-3">See More Events</router-link>
          </p>
        </div>
        <div class="column is-4">
          <img :src="require('@/assets/Hallowine.jpg')" alt="Hallowine Poster">
        </div>
      </div>
    </section>
    <hr />
    <section class="section">
      <div class="columns is-vcentered">
        <div class="column is-6 has-text-centered">
          <img :src="require('@/assets/Marlowe-matt.png')" alt="Marlowe card">
        </div>
        <div class="column is-6 has-text-centered">
          <h3 class="is-size-3">Interested in Visiting?</h3>
          <p class="mt-3" style="width: 80%; margin: 0 auto;">
            We are happy to host your special day or event. Whether a wedding, reception or just a special date night after you've found yourself in the dog house.
            <br /><br />
            Marlowe Vineyards is happy to host you and make your night something to remember. For interest in setting up an event please contact Mr. Endeavour Jackson for details.
          </p>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero';

export default {

  name: 'Home',
  components: {
    Hero
  }
}
</script>
