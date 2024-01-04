import { toast } from 'react-toastify';

export const Notify = (text,type) => {
    if (type === 'success') {
        toast.success(text);
    } else {
        toast.error(text);
    }
}