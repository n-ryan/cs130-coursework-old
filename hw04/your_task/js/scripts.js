const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);

    const queryURL = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`
    fetch(queryURL)
        .then((response) => {
            return response.json();
        })
        .then((artists) => {
            if (artists.length !== 0) {
                const artistResult = artists[0];
                const artistCard = `
                <section class="artist-card" id="${artistResult.id}">
                    <div>
                        <img src="${artistResult.image_url}">
                        <h3>${artistResult.name}</h3>
                        <div class="footer">
                            <a href="${artistResult.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`;
                document.querySelector('#artist').innerHTML = artistCard;
            } else {
                document.querySelector('#artist').innerHTML = `No artist matching "${term}" was found.`;
            }
        });
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);

    const queryURL = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    fetch(queryURL)
        .then((response) => {
            return response.json();
        })
        .then((albums) => {
            if (albums.length !== 0) {
                let albumList = ``;
                for (const album of albums) {
                    albumList += `
                    <section class="album-card" id="${album.id}">
                        <div>
                            <img src="${album.image_url}">
                            <h3>${album.name}</h3>
                            <div class="footer">
                                <a href="${album.spotify_url}" target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>`;
                };
                document.querySelector('#albums').innerHTML = albumList;
            } else {
                document.querySelector('#albums').innerHTML = `No albums matching "${term}" were found.`;
            };
        });
};

const playTrackPreview = (ev) => {
    const selectedTrack = ev.currentTarget;
    const previewURL = selectedTrack.dataset.previewTrack;
    const trackInfo = document.querySelector('footer .track-item');
    trackInfo.innerHTML = selectedTrack.innerHTML;
    audioPlayer.setAudioFile(previewURL);
    audioPlayer.play();
};

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    
    const queryURL = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`
    fetch(queryURL)
        .then((response) => {
            return response.json();
        })
        .then((tracks) => {
            if (tracks.length !== 0) {
                const trackResults = tracks.slice(0, 5);
                let trackList = ``;
                for (const track of trackResults) {
                    trackList += `
                    <section class="track-item preview" data-preview-track="${track.preview_url}" onclick="playTrackPreview(event)">
                        <img src="${track.album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                        <div class="label">
                            <h3>${track.name}</h3>
                            <p>
                            ${track.artist.name}
                            </p>
                        </div>
                    </section>`
                }
                document.querySelector('#tracks').innerHTML = trackList;
            } else {
                document.querySelector('#tracks').innerHTML = `No tracks matching "${term}" were found.`;
            }
        });
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};