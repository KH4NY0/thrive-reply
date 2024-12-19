import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export const Notifications = () => {
    return (
        <Button className="bg-white rounded-full py-6">
            <Bell
                color="#7851A9"
                fill="#7851A9"
            />
        </Button>
    )
}