# Environment Variables

We use environment variables to store secrets such as API keys.

## How This Project Sets Per-Environment Variables

To set environment variables in each environment:

* Dev: Copy *.env.example* to *.env* then replace any sample values with real ones as per below
* Prod: Set the Preview and Production values in [Vercel > Settings > Environment Variables](https://vercel.com/margaritahumanitarian/helpafamily/settings/environment-variables)

## Google Maps API Key

`REACT_APP_GOOGLE_KEY`

API key for the Maps JavaScript API. 

### Getting a Key

Instructions for getting this key: [Maps JavaScript API: Using API Keys > Creating API Keys](https://developers.google.com/maps/documentation/javascript/get-api-key#creating-api-keys)

In the Google console, name it something like **REACT_APP_GOOGLE_KEY (Dev, audreyfeldroy)** or **REACT_APP_GOOGLE_KEY (Prod)**:

![Google Maps JS API Key Naming](./images/gmaps-key-naming.jpg)

That will help you identify which key is for which environment.

### Key Restrictions

If you're just using this key for local development, it's okay to leave *Key restrictions* as None like this:

![Google Maps JS API Key Restrictions: Dev Environment](./images/gmaps-key-restrictions-dev.jpg)

A production key should have these restrictions:

![Google Maps JS API Key Restrictions: Prod Environment](./images/gmaps-key-restrictions-prod.jpg)
