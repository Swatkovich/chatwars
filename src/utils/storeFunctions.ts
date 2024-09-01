export const processKitchen = (kitchen: string[]) => {
  if (kitchen.length === 0) {
    return ''
  } else if (kitchen.length === 1) {
    return kitchen[0]
  } else {
    return 'мультикухня'
  }
}

export const processPrice = (avgPrice: string) => {
  if (avgPrice) {
    return avgPrice
  } else {
    return 'none'
  }
}

export const processName = (companyName: string) => {
  if (companyName.length > 15) {
    return companyName.substring(0, 13) + '...'
  } else {
    return companyName
  }
}
