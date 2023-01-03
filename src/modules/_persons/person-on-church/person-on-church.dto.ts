export type PersonOnChurchDTO = {
  id?: string   
  personId:     string
  churchId:     string
  singnedAt: Date | string
  singnetBy: string
  member?:       boolean       
  dizimist    : boolean       
  permitChurch: boolean       
  permitEAD   : boolean       
  permitPortal: boolean       

}