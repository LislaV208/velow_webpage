export interface BandMember {
  name: string;
  role: string;
  image?: string;
}

export interface Tour {
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
}

export interface Album {
  title: string;
  year: string;
  coverUrl: string;
  spotifyLink?: string;
}