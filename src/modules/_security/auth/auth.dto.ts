  export type AuthDTO = {
    email:    string
    password: string
    app?:     string
  }

  export type UserResponseType = {
    id: string,
    name: string,
    genre: string,
    birth: string,
    photo: string,
    email: string,
    password: string,
    loginAttempts: number,
    statsLogin: string,       
    inRecovery: boolean,     
    isAdmin: boolean,
    TwoFactorAuthenticationActive: boolean,
    PersonsOnChurches: [{
      church: {
        id: string,
        name: string,
        fantasy: string,
        image: string
      },
      permitChurch: boolean,
      permitEAD: boolean,
      permitPortal: boolean,
      dizimist: boolean,
      member: boolean,
      singnedAt: Date | string
    }]
  }

  export type VinculeType = {
    permitEAD: boolean;
    permitChurch: boolean;
    permitPortal: boolean; 
  }
  
 export type AuthSessionDTO = {
    id?:        string
    userId:     string
    userAgent?: string
    ipClient?:  string
    platform?:  string
    token?:     string
    app:        string
  }