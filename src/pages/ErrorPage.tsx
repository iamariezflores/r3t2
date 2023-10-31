import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
    const errorMessages: any = useRouteError();

    if(isRouteErrorResponse(errorMessages)){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-2xl text-red-600 pr-2">{errorMessages.status}</div>
                <div className="text-2xl text-red-600">{errorMessages.statusText}</div>
            </div>
        )
    } else {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-2xl text-red-600 pr-2">{errorMessages.message}</div>
                <div className="text-2xl text-red-600">{errorMessages.statusText}</div>
            </div>
        )
    }
}
