
export interface CorporationResponse{

    success:                      boolean;
    data:                         CorporationData
    displayMessage:               string
    errorMessage:                 any[]
    code:                         number

  }


export interface CorporationData
{
    info:
    {
        name:                     string
        mission:                  string
        vision:                   string
        logoUri:                  string
        imageUri:                 string
        videoUri:                 string
    }
    club: 
    {
        title:                    string
        description:              string
        imageUri:                 string
      }
    casinos:                      Casino[]
    services:                     Service[]
    announcement:
    {
        promotions:               Annoucement[]
        events:                   Annoucement[]
      }
    socialNetworks:               SocialNetwoork[]
      
    contact: {
        address:                  string
        latitude:                 number
        longitude:                number
        phones:                   string[]
        emails:                   string[]
      }
}

export interface Annoucement{

    id:                           number
    title:                        string
    startDate:                    string
    endDate:                      string
    imagesUri:                    string[]

}

export interface Casino{

    name:                         string
    logoUri:                      string
    url:                          string

}

export interface Service{
    name:                         string
    icon:                         string
    description:                  string
}

export interface SocialNetwoork{

  name:                           string
  icon:                           string
  uri:                            string

}




export interface AnnouncementResponse{
  succes:                         boolean
  data:                           DataAnnouncement
  displayMessage:                 string
  errorMessage:                   []
  code:                           number
}



export interface DataAnnouncement{

  idCorpAnnouncement:            number
  typeAnnouncement:              number
  title:                         string
  description:                   string
  publishAt:                     string
  startDate:                     string
  endDate:                       string
  priority:                      number
  state:                         boolean
  corpAnnouncementsMedia:        AnnoucementMedia[]

}



export interface AnnoucementMedia{

  idCorpAnnouncementMedia:      number
  idCorpAnnouncement:           number
  path:                         string
  pathWeb:                      string

}




export interface AnnouncementsResponse{
  succes:                         boolean
  data:                           DataAnnouncement[]
  displayMessage:                 string
  errorMessage:                   []
  code:                           number
}


