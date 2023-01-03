  export type TwoFactorAuthenticationDTO = {
    id?:                string
    personId:           string  
    ascii:              string
    hex:                string
    base32:             string
    otpauth_url:        string
    recoveryCodeOne:    string
    recoveryCodeTwo:    string
    recoveryCodeThree:  string
    recoveryCodeFour:   string
    recoveryCodeFive:   string
    recoveryCodeSix:    string
    recoveryCodeSeven:  string
    recoveryCodeEigth:  string
    recoveryCodeNine:   string
    recoveryCodeTen:    string
    activedIn:          Date | String
  }

  export type TfaVerifyRequestType = {
    session: string
    token: string
  }

  export type TfaActivateRequestType = {
    user: string
    password: string
  }