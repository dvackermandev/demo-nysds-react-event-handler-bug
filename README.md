# Demo event handler bug found in @nysds/components@1.16.0-alpha-2

I am noticing that @nysds/components/react wrapper components are firing multiple times per event
when a function that updates state is passed as the event handler.

This is demonstrated with the NysButton component in /src/App.tsx

I think the source of this issue is the useEventListener() utility function defined here:
node_modules\@nysds\components\packages\react\react-utils.js