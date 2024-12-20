import {onCurrentUser} from "@/actions/user";
import {createAutomation} from "@/actions/automations/quries";

export const getAllAutomations =  async () => {
    const user = await onCurrentUser()

    try {
        const create = await createAutomation(user.id)
        if (create) return { status: 200, data: "Automation created successfully" }
        return { status: 404, data: "Oops! something went wrong" }
    } catch (error) {
        return { status: 500, data: "Internal server error" }
    }
}