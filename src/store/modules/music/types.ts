export interface Music {
  id: number;
  name: string;
  artist: string;
  posterUrl: string;
}

export interface MusicState {
  topMusicList: Array<Music>;
  newReleaseList: Array<Music>;
}
