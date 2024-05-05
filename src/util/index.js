import toast from "react-hot-toast";

export const triggerToast = (message, type) => {
    const existingToast = toast.loading(message);
    toast.remove(existingToast.id);
    switch (type) {
        case "success":
            toast.success(message);
            break;
        case "error":
            toast.error(message);
            break;
    }
};