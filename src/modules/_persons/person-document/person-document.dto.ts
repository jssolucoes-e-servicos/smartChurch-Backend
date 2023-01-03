export type PersonDocumentDTO = {
  id?: string   
  personId: string
  documentName : string
  documentValue: string
  documentObs1? : string | null
  documentObs2? : string | null
  documentObs3? : string | null
}