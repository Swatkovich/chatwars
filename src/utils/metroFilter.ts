import { MetroDto } from '../interface/client'
import { MetroList } from './metroList'

const metroArray: MetroDto[] = Object.keys(MetroList).map((key) => ({ name: key, color: MetroList[key] }))

export const metroFilter: (filter: string) => MetroDto[] = (filter) => {
  const filteredArray = metroArray
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((station) => station.name.toLowerCase().startsWith(filter.toLowerCase()))
  return filteredArray
}
