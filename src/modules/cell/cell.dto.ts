export type CellDTO = {
  id?: string
  name: string
  color?: string | null
  image?: string | null
  day: "segunda-feira" | "terça-feira" | "quarta-feira" | "quinta-feira" | 'sexta-feira' | "sábado" | "domingo"
  hour: string
  method: "presencial" | "online" | "hibrido"
  leaderId: string
  address: string | null
  cellsNetworkId: string
}
