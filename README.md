# Gatsby + Recoil + Suspense issue

This is a minimal reproduction of an issue I'm having with Gatsby, Recoil, and 
Suspense.

## Issue

When you use Gatsby, and at any point in the app use asynchronous Recoil state,
the app will fail to build, and simply get stuck on "Building static HTML for
pages".

![Recording of the issue](./terminal.svg)

## Steps to reproduce

1. Clone this repo
2. `yarn`
3. `yarn build`