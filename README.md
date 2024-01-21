# Transactions Viewer

**Configuration:**

To change the quantity of generated data, go to `/src/services/api.js`. In the `FakeFetch` class, within the `init()` method, modify the arguments with numbers to generate a different quantity of data.

To change the latency for responses, navigate to `/src/services/api.js`. In the `FakeFetch` class, within the `response()` method, adjust the milliseconds in the `setTimeout` function.

**Scripts to run:**

To start the project:

```
npm run start
```

To build the project:

```
npm run build
```

To test the project:

```
npm run test
```

To deploy (with repository permissions):

```
npm run deploy
```

Please note that you need Node 16 or a newer version to run the project.

Have a good day!
