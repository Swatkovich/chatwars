export interface CompanyDto {
  id: string
  name: string
  rating: number
  avg_price: string
  city: string
  address: string
  metro: [string]
  district: string
  region: string
  workingHours: [string]
  images: [string]
  description: string
  links: {
    tel: string | null
    vk: string | null
    tg: string | null
    web: string | null
  }
  kitchen: string
  isFavorite: boolean
  isBlacklist: boolean
}

export interface CompanyBackendDTO {
  company_id: string
  company_name: string
  company_rating: number
  company_avg_price: string
  city_name: string
  company_address: string
  company_address_metro: [string]
  company_district: string
  company_region: string
  company_working_hours: [string]
  company_image_urls: [string]
  company_description: string
  company_links: {
    tel: string | null
    vk: string | null
    tg: string | null
    web: string | null
  }
  company_kitchen: [string]
  is_favorite: boolean
  is_blacklist: boolean
}

export interface LoginFormDto {
  username: string
  password: string
}

export interface RegistrationFormDto {
  username: string
  email: string
  password: string
}

export interface UserDto {
  id: string
  username: string
  email: string
  role: [string]
  avatar: number
}

export interface ProfileDto {
  username: string
  email: string
  avatar: number
}

export interface MetroDto {
  name: string
  color: string
}

export interface FiltersDto {
  metro: string[]
  kitchens: string[]
  alcohol: boolean | null
  coffee: boolean | null
  hookah: boolean | null
}

export interface LobbyDto {
  name: string
  playersNumber: number
  filters: FiltersDto
}

export interface User {
  username: string
  avatar: number
}
