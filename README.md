

# MicroPrivateSprinkler

A home automation mife that bootstraps a UI for asynchronously scheduling or directly connecting to IoT relays
that fire up lawn irrigation solenoids.

This project is intended for deployment to GCP and leverages Cloud Identity providers for authentication.  This project
assumes that GCP is enabled with support for:

   - **Cloud Identity** w/configured providers, or, Firebase authentication will work fine, too.
   - **IoT Core** minimally configured for pub/sub access
   - **Cloud Run** access for client UI deployment, or at minimum, a source repository that can serve a static Angular app,
     (e.g. firebase hosting)


# Quickstart
To encourage rapid iteration/deployment, this project is configured for use with [bin-go](https://github.com/wejafoo/bin-go), 
a build/deploy utility that is optimized for micro(frontends|services).

##### Local

  $  `bingo --local`

##### GCP Remote

$  `REMOTE_ALIAS=stage  bingo --remote --alias=<REMOTE_ALIAS>` 
