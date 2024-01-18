# Running this Project

Clone the repositiory on your machine and run:

```bash
pnpm i
```

to install the required dependencies,
after that you can run:

```bash
pnpm run dev
```

This will serve the app on [this url](http://localhost:5173) which would be enough to start downloading mp3 from Youtube links.

# How i run this on my pi:

- <code>git clone https://github.com/MyLastSerenade/svelteytdl.git</code>
- <code>cd svelteytdl</code>
- <code>docker build -t svelteytdl -f /home/USERNAME/svelteytdl/Dockerfile /home/USERNAME/svelteytdl</code>
- <code>sudo docker-compose up -d</code>

# TODO:

- [x] filename should be the name of the Youtube video -> ytdl core cant be imported client side for some reason
- [x] add some ui library (shadcn oder bits or maybe skeleton?)
- [x] add Dockerfile in order to run it inside a docker environment
- [ ] (try to send the progess of the download to the client and add a progess-bar instead of the spinner)
