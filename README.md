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

This will serve the app on [this url](http://localhost:5173)  which would be enough to start downloading mp3 from Youtube links.


# TODO: 

- [x] filename should be the name of the Youtube video -> ytdl core cant be imported client side for some reason
- [ ] add some ui library (shadcn oder bits or maybe skeleton?)
- [ ] try to send the progess of the download to the client and add a progess-bar instead of the spinner

