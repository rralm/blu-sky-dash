## Configuration

### Set up a MongoDB database

Set up a MongoDB database either locally or with [MongoDB Atlas for free](https://mongodb.com/atlas).

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.
- `MONGODB_DB` - The name of the MongoDB database you want to use.
- `GOOGLE_ID` - The id of the app you created on google console
- `GOOGLE_SECRET` - The secret id for the app to enable Auth

### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Availabe Routes

- [http://localhost:3000](http://localhost:3000)
- [http://localhost:3000/setting](http://localhost:3000/setting)
- [http://localhost:3000/users](http://localhost:3000/users)

### TECH STACK INFO

- Next Js with Next-Auth
- Tailwind CSS
- MongoDb

### Additional Package(s)

- react-lottie-player - for the loading animation
- react-chartjs-2 - for the charts