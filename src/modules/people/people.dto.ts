export type PeopleDTO = {
  id?: string
  name: string
  genre: 'F' | 'M'
  birth?: Date | null
  email?: string | null
}