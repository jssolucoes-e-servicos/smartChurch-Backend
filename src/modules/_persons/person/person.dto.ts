

export type PersonDTO = {
  id?:                            string
  name:                           string
  genre?:                         string
  birth?:                         Date | string | null
  photo?:                         string
  email?:                         string | null
  password:                       string
  loginAttempts:                  number 
  statsLogin:                     string    
  inRecovery:                     boolean         
  isAdmin:                        boolean
  TwoFactorAuthenticationActive:  boolean        
}