# Tapestry resource manager

Small app to track resources on a solo game of
[Tapestry](https://boardgamegeek.com/boardgame/286096/tapestry).

## Development container

To build the image and fire up the container:

```bash
docker-compose up -d --build
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the app.
To bring down the container:

```bash
docker-compose stop
```

## Production container

To build the image and fire up the container:

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```