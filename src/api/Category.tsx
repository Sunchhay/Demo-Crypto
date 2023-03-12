import { AuthorizeParams } from "../redux/actionTypes/authorize.type"
import { api } from "../services/api/index.service"

export const getCategory = () => {
    const data = api.POST(`category`)
    return data
}