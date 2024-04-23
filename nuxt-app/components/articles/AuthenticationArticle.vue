<template>
  <div>
    <div class="flex-parent-element">
      <div class="flex-child-element menu content">
        <h1>Authentication</h1>
        <p>Choosing the right technology</p>
      </div>

      <div class="flex-child-element context content">
        <h2>Needs based selection</h2>
        <p>
          When the time came to choose how I wanted to authenticate users I
          wanted to give the choice of creating a username and password or using
          a social account like Google so they wouldn’t have to remember yet
          another password.
        </p>
        <p>
          The needs of this site are humble. The site is a Business to Consumer
          (B2C) application for a single tenant. People need to be able to sign
          up, sign in, and reset their password without support. The user flow
          should be simple and familiar.
        </p>
        <p>
          The system is built on Microsoft Azure Cloud technology. The two
          finalists were Microsoft Entra External ID and Microsoft Azure Active
          Directory B2C (AD B2C).
        </p>
        <p>
          Microsoft positions Entra External ID as the next stage evolution to
          seamlessly unite secure and engaging experiences for a wide range of
          external identities including customers and partners as citizens
          within a single cohesive platform. Whereas AD B2C is basically used to
          build customer facing applications only.
        </p>
        <p>
          I like the vision of Entra External ID. That’s been my mental model of
          how identities work. All excitement aside, the AD B2C does what I need
          today and is inexpensive under the pay as you go model. The first
          50,000 monthly active users (MAU) are free.
        </p>
        <p>
          I chose AD B2C because it is a mature product that does what I need,
          is easy to use and has a lot of documentation. I can always switch to
          Entra External ID later if I need to.
        </p>
      </div>
    </div>
  </div>
</template>
