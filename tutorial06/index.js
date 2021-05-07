const tracks = [
  {
    "id": "5v4GgrXPMghOnBBLmveLac",
    "name": "Savage Remix (feat. Beyoncé)",
    "preview_url": "https://p.scdn.co/mp3-preview/82b86052d5cfa3802d47b4ee63036d2bfeb86525?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "album":
    {
      "id": "6M4VOF1ExBRii1x20Pk0GR",
      "name": "Savage Remix (feat. Beyoncé)",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273cd613f53a22b92b14694943c"
    },
    "artist":
    {
      "id": "181bsRPaVXVlUKXrxwZfHK",
      "name": "Megan Thee Stallion"
    }
  },
  { "id": "5IVuqXILoxVWvWEPm82Jxr", "name": "Crazy In Love (feat. Jay-Z)", "preview_url": "https://p.scdn.co/mp3-preview/ce8ace0ec425840416be78db07cf50dd331eed4f?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "6oxVabMIqCMJRYN1GqR3Vf", "name": "Dangerously In Love", "image_url": "https://i.scdn.co/image/ab67616d0000b27345680a4a57c97894490a01c1" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } },
  { "id": "6g0Orsxv6glTJCt4cHsRsQ", "name": "Formation", "preview_url": "https://p.scdn.co/mp3-preview/470cfb59470d8313dc99634c2845170b56a8762e?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "7dK54iZuOxXFarGhXwEXfF", "name": "Lemonade", "image_url": "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } },
  { "id": "4JehYebiI9JE8sR8MisGVb", "name": "Halo", "preview_url": "https://p.scdn.co/mp3-preview/3c97985f3736fab6d4abcd2067f346a9b30955fa?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "39P7VD7qlg3Z0ltq60eHp7", "name": "I AM...SASHA FIERCE", "image_url": "https://i.scdn.co/image/ab67616d0000b273801c4d205accdba0a468a10b" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } },
  { "id": "1z6WtY7X4HQJvzxC4UgkSf", "name": "Love On Top", "preview_url": "https://p.scdn.co/mp3-preview/9a7675cc7f71c524af1397cf1675b61a8fbc74ed?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "1gIC63gC3B7o7FfpPACZQJ", "name": "4", "image_url": "https://i.scdn.co/image/ab67616d0000b273ff5429125128b43572dbdccd" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } },
  { "id": "0rzNMzZsubFcXSEh7dnem7", "name": "Hold Up", "preview_url": "https://p.scdn.co/mp3-preview/45ca175a1ceffc733b2d62dfc49e6ede386415c1?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "7dK54iZuOxXFarGhXwEXfF", "name": "Lemonade", "image_url": "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } },
  { "id": "2Z71PZlOeF9YVze4hy1A1a", "name": "Savage Remix (feat. Beyoncé)", "preview_url": "https://p.scdn.co/mp3-preview/11198d1a864ba457a2a90f21d2bcd2f2c98b1e95?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "0KjckH1EE6HRRurMIXSc0r", "name": "Good News", "image_url": "https://i.scdn.co/image/ab67616d0000b273da256972582b455d46985ba9" }, "artist": { "id": "181bsRPaVXVlUKXrxwZfHK", "name": "Megan Thee Stallion" } },
  { "id": "5hgnY0mVcVetszbb85qeDg", "name": "Partition", "preview_url": "https://p.scdn.co/mp3-preview/8ecd5010e5a46f1c84f42bcfed50505395825d7a?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "2UJwKSBUz6rtW4QLK74kQu", "name": "BEYONCÉ [Platinum Edition]", "image_url": "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } },
  { "id": "1uXbwHHfgsXcUKfSZw5ZJ0", "name": "Run the World (Girls)", "preview_url": "https://p.scdn.co/mp3-preview/c5e90d8d93467fc4aeda29c2cbefaa494081232a?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "1gIC63gC3B7o7FfpPACZQJ", "name": "4", "image_url": "https://i.scdn.co/image/ab67616d0000b273ff5429125128b43572dbdccd" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } },
  { "id": "0lnIJmgcUpEpe4AZACjayW", "name": "Sorry", "preview_url": "https://p.scdn.co/mp3-preview/5f4f6414a73c124d629ffe0b0bc8aa679ef10a7c?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "7dK54iZuOxXFarGhXwEXfF", "name": "Lemonade", "image_url": "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } }, 
  { "id": "6RX5iL93VZ5fKmyvNXvF1r", "name": "Irreplaceable", "preview_url": "https://p.scdn.co/mp3-preview/b1cd9ecf3b5108363846f497897b5bcbec44343a?cid=9697a3a271d24deea38f8b7fbfa0e13c", "album": { "id": "0Zd10MKN5j9KwUST0TdBBB", "name": "B'Day Deluxe Edition", "image_url": "https://i.scdn.co/image/ab67616d0000b273026e88f624dfb96f2e1ef10b" }, "artist": { "id": "6vWDO969PvNqNYHIOW5v0m", "name": "Beyoncé" } }
];


// Part 1: 
// This code adds a card for the 6th track in the list (above)
// How would you use a loop so that a card is generated for every 
// track in the list?

// const track = tracks[5];
// const template = `
//     <div data-index="5" onclick="playSong(event);">
//         <img src="${track.image_url}" />
//         <h2>${track.name}</h2>
//     </div>`;
// document.querySelector('main').innerHTML += template;

let dataIndex = 0;
for (track of tracks) {
  const template = `
  <div data-index="${dataIndex}" onclick="playSong(event);">
      <img src="${track.album.image_url}" />
      <h2>${track.name}</h2>
  </div>`;
  document.querySelector('main').innerHTML += template;
  dataIndex += 1;
};


// Part 2: 
// Using the event object, detect the element that triggered the
// click event (currentTarget) to figure out which song to load 
// into the player next. When you've figured it out, set the 
// #audio-source element's "src" attribute with the correct 
// sound sample and then invoke the audio.load() and audio.play() 
// logic.
const playSong = (ev) => {
    const selectedTrack = ev.currentTarget;
    const trackIndex = selectedTrack.dataset.index;
    const previewURL = tracks[trackIndex].preview_url;
    document.querySelector('#audio-source').src = previewURL;
    const audio = document.querySelector('audio');
    audio.load();
    audio.play();
}
