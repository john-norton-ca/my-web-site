<template>
  <div>
    <div>
      <h1>Terms of Service</h1>
      <p>
        Welcome to our corner of the internet! Here’s the deal with using our
        site:
      </p>

      <ol>
        <li>
          <p>
            <span class="bold">Just a Demo: </span> Our site is a showcase of
            cool tech. We’re always tweaking and improving things. While we
            strive to keep things smooth, we can’t promise there won’t be a
            hiccup here and there. Thanks for understanding!
          </p>
        </li>
        <li>
          <p>
            <span class="bold">Play Nice: </span> We’re all about keeping things
            friendly and respectful here. If someone's not playing nice, we
            might have to show them the door. So, let's keep it civil and enjoy
            our time together.
          </p>
        </li>
        <li>
          <p>
            <span class="bold">No Guarantees:</span> We do our best to keep this
            ship sailing smoothly, but sometimes the internet can be
            unpredictable. We can’t guarantee that everything will always work
            perfectly, but we'll sure try!
          </p>
        </li>
        <li>
          <p>
            <span class="bold">Your Content:</span> Anything you post or share
            on our site is your responsibility. Make sure you have the right to
            share it and that it's not going to offend or infringe on anyone
            else's rights.
          </p>
        </li>
        <li>
          <p>
            <span class="bold">Changes and Updates: </span> Occasionally, we
            might update these terms to keep up with new developments or
            feedback. We’ll do our best to let you know about any big changes,
            but it’s always good to check back here once in a while.
          </p>
        </li>
        <li>
          <p>
            <span class="bold">Using Our Site: </span> By hanging out here,
            you’re agreeing to these terms. If you don’t agree with them, then
            this might not be the right site for you.
          </p>
        </li>
      </ol>
      <p>
        Thanks for reading! Enjoy exploring what we’ve built and have fun. If
        you have any questions, just drop us a line!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'new-default',
})
</script>

<style scoped>
h1 {
  color: var(--clr-primary);
  margin-bottom: 20px;
}
li {
  margin-bottom: 20px;
}

.bold {
  font-weight: bold;
}
</style>
