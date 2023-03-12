import { api } from "../services/api/index.service"

export const getHome = () => {
    const data = api.POST(`home`)
    return data
}