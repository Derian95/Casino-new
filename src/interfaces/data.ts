
export interface CorporationResponse{
    success:            boolean;
    data:               CorporationData
    displayMessage:     string
    errorMessage:       any[]
    code:               number
}


export interface CorporationData{
    info:{
        name:           string
        mission:        string
        vision:         string
        logoUri:        string
        imageUri:       string
        videoUri:       string
    }
    club: {
        title:          string
        description:    string
        imageUri:       string
      }
    casinos: {
        name:           string
        logoUri:        string
        url:            string
      }
    services: {
        name:           string
        icon:           string
        description:    string
      }
    announcement: {
        promotions:     Annoucement[]
        events:         Annoucement[]
      }
    socialNetworks: 
      {
        name:           string
        icon:           string
        uri:            string
      }
      
    contact: {
        address:        string
        latitude:       number
        longitude:      number
        phones:         string[]
        emails:         string[]
      }
}

export interface Annoucement{
    id:         number
    title:      string
    startDate:  string
    endDate:    string
    imagesUr:   string[]
    
}


